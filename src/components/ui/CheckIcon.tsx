import { Check } from 'lucide-react'
import { cn } from '../../lib/cn'

/** Blue filled circle with a white check mark. */
export function CheckIcon({ className }: { className?: string }) {
  return (
    <span className={cn('flex size-6 shrink-0 items-center justify-center rounded-full bg-brand', className)}>
      <Check aria-hidden className="size-3.5 text-white" strokeWidth={3.2} />
    </span>
  )
}
