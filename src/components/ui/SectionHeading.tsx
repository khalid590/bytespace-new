import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SectionHeadingProps {
  title: ReactNode
  description?: ReactNode
  /** "lg" is the 48px heading used for the main sections, "md" the smaller 40px one. */
  size?: 'lg' | 'md'
  className?: string
}

/** Centered heading + supporting paragraph used by the courses and learning-path sections. */
export function SectionHeading({ title, description, size = 'lg', className }: SectionHeadingProps) {
  return (
    <div className={cn('mx-auto max-w-[960px] text-center', className)}>
      <h2
        className={cn(
          'font-semibold leading-[1.2] text-ink',
          size === 'lg' ? 'text-4xl md:text-[48px]' : 'text-3xl md:text-[40px]',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-5 max-w-[920px] text-base leading-8 text-muted md:text-lg">{description}</p>
      )}
    </div>
  )
}
