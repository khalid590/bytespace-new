import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AuthShell } from '../components/layout/AuthShell'
import { Button } from '../components/ui/Button'
import { TextField } from '../components/ui/TextField'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { routes } from '../lib/routes'
import { isEmail } from '../lib/validation'

interface Errors {
  name?: string
  email?: string
  password?: string
}

/** "Register" frame. Front-end validation only; there is no backend. */
export default function Register() {
  useDocumentTitle('Create an account | ByteSpace')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [done, setDone] = useState(false)

  const update = (key: keyof typeof form) => (e: ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setDone(false)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const next: Errors = {}
    if (form.name.trim().length < 2) next.name = 'Enter your full name.'
    if (!isEmail(form.email)) next.email = 'Enter a valid email address.'
    if (form.password.length < 8) next.password = 'Use at least 8 characters.'
    setErrors(next)
    setDone(Object.keys(next).length === 0)
  }

  return (
    <AuthShell
      heading="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      eyebrow="Create an Account"
      title={
        <>
          Welcome to <br className="hidden sm:block" />
          ByteSpace
        </>
      }
      footer={
        <>
          Already have an account?{' '}
          <Link to={routes.login} className="text-brand hover:underline">
            Login
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="mt-9 space-y-[22px]">
        <TextField label="Full Name" autoComplete="name" placeholder="Jamie Davis" value={form.name} onChange={update('name')} error={errors.name} />
        <TextField label="Email" type="email" autoComplete="email" placeholder="designer@example.com" value={form.email} onChange={update('email')} error={errors.email} />
        <TextField label="Password" type="password" autoComplete="new-password" placeholder="********" value={form.password} onChange={update('password')} error={errors.password} />
        <div className="flex flex-wrap items-center justify-end gap-4 pt-1">
          {done && (
            <p role="status" className="mr-auto text-sm text-brand">
              Account created (demo only, no backend).
            </p>
          )}
          <Button type="submit" className="h-[46px] px-[26px] text-lg">
            Continue
          </Button>
        </div>
      </form>
    </AuthShell>
  )
}
