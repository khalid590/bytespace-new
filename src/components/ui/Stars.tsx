import { Star } from 'lucide-react'
import { cn } from '../../lib/cn'

interface StarsProps {
  /** Number of filled stars (0 to `max`) */
  value: number
  max?: number
  className?: string
  starClassName?: string
}

/** Row of dark stars; unfilled ones are light grey. */
export function Stars({ value, max = 5, className, starClassName }: StarsProps) {
  return (
    <span className={cn('inline-flex items-center', className)} role="img" aria-label={`${value} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          aria-hidden
          className={cn('size-[22px]', i < value ? 'fill-[#4d4d55] text-[#4d4d55]' : 'fill-[#dcdce0] text-[#dcdce0]', starClassName)}
        />
      ))}
    </span>
  )
}
