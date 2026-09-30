import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AuthLayout } from '../components/layout/AuthLayout'
import { Button } from '../components/ui/Button'
import { TextField } from '../components/ui/TextField'
import { cn } from '../lib/cn'

type Role = 'learner' | 'creator'

interface Errors {
  name?: string
  email?: string
  password?: string
  confirm?: string
}

const roles: { value: Role; label: string }[] = [
  { value: 'learner', label: 'I want to learn' },
  { value: 'creator', label: 'I want to teach' },
]

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [role, setRole] = useState<Role>('learner')
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const next: Errors = {}
    if (form.name.trim().length < 2) next.name = 'Enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (form.password.length < 8) next.password = 'Use at least 8 characters.'
    if (form.confirm !== form.password) next.confirm = 'Passwords do not match.'
    setErrors(next)
    setSubmitted(Object.keys(next).length === 0)
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join thousands of learners and creators on ByteSpace."
      footer={
        <>
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-brand hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <fieldset>
          <legend className="sr-only">How will you use ByteSpace?</legend>
          <div className="grid grid-cols-2 gap-3">
            {roles.map((r) => (
              <label
                key={r.value}
                className={cn(
                  'cursor-pointer rounded-full border px-4 py-3 text-center text-base transition has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand',
                  role === r.value ? 'border-lime bg-lime font-medium text-ink' : 'border-[#c9cad0] text-body',
                )}
              >
                <input
                  type="radio"
                  name="role"
                  value={r.value}
                  checked={role === r.value}
                  onChange={() => setRole(r.value)}
                  className="sr-only"
                />
                {r.label}
              </label>
            ))}
          </div>
        </fieldset>
        <TextField label="Full name" autoComplete="name" value={form.name} onChange={update('name')} error={errors.name} />
        <TextField
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="name@example.com"
          value={form.email}
          onChange={update('email')}
          error={errors.email}
        />
        <TextField
          label="Password"
          type="password"
          autoComplete="new-password"
          placeholder="At least 8 characters"
          value={form.password}
          onChange={update('password')}
          error={errors.password}
        />
        <TextField
          label="Confirm password"
          type="password"
          autoComplete="new-password"
          value={form.confirm}
          onChange={update('confirm')}
          error={errors.confirm}
        />
        <Button type="submit" className="h-[52px] w-full">
          Create account
        </Button>
        {submitted && (
          <p role="status" className="rounded-2xl bg-surface px-4 py-3 text-center text-sm text-body">
            Account created (demo only, there is no backend connected).
          </p>
        )}
      </form>
    </AuthLayout>
  )
}
