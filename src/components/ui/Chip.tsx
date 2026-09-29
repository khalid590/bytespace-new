import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  children: ReactNode
}

/** Category filter pill (e.g. "Featured", "Music"). */
export function Chip({ active = false, className, children, ...rest }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
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
}
