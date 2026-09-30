import { useState, type FormEvent } from 'react'
import { footerColumns, legalLinks } from '../../data/content'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'done'>('idle')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    setStatus(valid ? 'done' : 'error')
    if (valid) setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-12 max-w-[560px]">
      <div className="flex items-center gap-4 sm:gap-6">
        <label className="flex-1">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status !== 'idle') setStatus('idle')
            }}
            placeholder="Enter your email"
            aria-invalid={status === 'error'}
            aria-describedby="newsletter-status"
            className="h-[53px] w-full rounded-full border border-[#c9cad0] bg-white px-6 text-base text-ink outline-none placeholder:text-body focus:border-brand"
          />
        </label>
        <Button type="submit" className="h-12 shrink-0 px-7">
          Search
        </Button>
      </div>
      <p
        id="newsletter-status"
        role="status"
        className={status === 'error' ? 'mt-2 text-sm text-red-600' : 'mt-2 text-sm text-brand'}
      >
        {status === 'error' && 'Enter a valid email address, like name@example.com.'}
        {status === 'done' && 'Thanks! You are on the list.'}
      </p>
    </form>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto w-full max-w-[1204px] px-5 pt-[70px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-6">
          <div>
            <Logo tone="dark" />
            <p className="mt-3 max-w-[560px] text-[15px] text-body">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <NewsletterForm />
            <p className="max-w-[540px] text-[13px] leading-5 text-body">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:pt-12">
            {footerColumns.map((column, i) => (
              <ul key={i} className="space-y-[18px]">
                {column.map((label) => (
                  <li key={label}>
                    <a href="#home" className="text-[15px] text-body transition hover:text-brand">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line py-7 text-[13px] text-body sm:flex-row sm:items-center sm:justify-between">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((label) => (
              <li key={label}>
                <a href="#home" className="transition hover:text-brand">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
