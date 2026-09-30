import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

type Variant = 'lime' | 'blue' | 'outline'

const variants: Record<Variant, string> = {
  lime: 'bg-lime text-ink hover:brightness-95',
  blue: 'bg-brand text-white hover:bg-brand-deep',
  outline: 'border border-line bg-white text-ink hover:bg-surface',
}

const base =
  'inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-3 text-base font-medium transition ' +
  'disabled:cursor-not-allowed disabled:opacity-60'

interface CommonProps {
  variant?: Variant
  className?: string
  children: ReactNode
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined }
type LinkProps = CommonProps & { to: string }

/** Pill button. Renders a router <Link> when `to` is given, otherwise a <button>. */
export function Button(props: ButtonProps | LinkProps) {
  const { variant = 'lime', className, children } = props
  const classes = cn(base, variants[variant], className)

  if (props.to !== undefined) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    )
  }

  const { variant: _v, className: _c, children: _ch, to: _to, ...rest } = props
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
