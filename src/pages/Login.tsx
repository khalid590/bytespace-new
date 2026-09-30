import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AuthShell } from '../components/layout/AuthShell'
import { Button } from '../components/ui/Button'
import { FacebookIcon, GoogleIcon } from '../components/ui/SocialIcons'
import { TextField } from '../components/ui/TextField'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { routes } from '../lib/routes'
import { isEmail } from '../lib/validation'

interface Errors {
  email?: string
  password?: string
}

const socialButton =
  'flex size-[70px] items-center justify-center rounded-[20px] border border-[#d4d5da] bg-white text-ink transition hover:bg-surface'

/** "Login" frame. Front-end validation only; there is no backend. */
export default function Login() {
  useDocumentTitle('Sign in | ByteSpace')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [done, setDone] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const next: Errors = {}
    if (!isEmail(email)) next.email = 'Enter a valid email address.'
    if (!password) next.password = 'Enter your password.'
    setErrors(next)
    setDone(Object.keys(next).length === 0)
  }

  return (
    <AuthShell
      heading="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      eyebrow="Sign In"
      title="Welcome Back"
      footer={
        <>
          New user?{' '}
          <Link to={routes.register} className="text-brand hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="mt-9 space-y-[22px]">
        <TextField label="Email" type="email" autoComplete="email" placeholder="designer@example.com" value={email} onChange={(e) => { setEmail(e.target.value); setDone(false) }} error={errors.email} />
        <TextField label="Password" type="password" autoComplete="current-password" placeholder="********" value={password} onChange={(e) => { setPassword(e.target.value); setDone(false) }} error={errors.password} />
        <div className="flex flex-wrap items-center justify-end gap-4 pt-1">
          {done && (
            <p role="status" className="mr-auto text-sm text-brand">
              Signed in (demo only, no backend).
            </p>
          )}
          <Button type="submit" className="h-[46px] px-[26px] text-lg">
            Sign In
          </Button>
        </div>
      </form>

      <div className="mt-8 flex items-center gap-4 text-body" aria-hidden="true">
        <span className="h-px flex-1 bg-[#d4d5da]" />
        <span className="text-base">or</span>
        <span className="h-px flex-1 bg-[#d4d5da]" />
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <button type="button" aria-label="Continue with Facebook" className={socialButton}>
          <FacebookIcon className="size-8" />
        </button>
        <button type="button" aria-label="Continue with Google" className={socialButton}>
          <GoogleIcon className="size-7" />
        </button>
      </div>
    </AuthShell>
  )
}
