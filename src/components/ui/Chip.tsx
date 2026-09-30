import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  children: ReactNode
}

/** Category filter pill (e.g. "Featured", "Music"). */
export const Chip = forwardRef<HTMLButtonElement, ChipProps>(function Chip(
  { active = false, className, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      aria-pressed={rest.role === 'tab' ? undefined : active}
      className={cn(
        'rounded-full px-4 py-2.5 text-base transition sm:px-[17px]',
        active ? 'bg-lime font-medium text-ink' : 'bg-chip text-body hover:bg-[#e8e8ea]',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
})
