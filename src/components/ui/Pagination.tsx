import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../../lib/cn'

interface PaginationProps {
  page: number
  pageCount: number
  onChange: (page: number) => void
}

const arrow =
  'flex h-[49px] w-[56px] items-center justify-center rounded-full border border-[#c9cad0] bg-white text-ink transition hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white'

/** Previous / 1 2 3 … / Next control. The current page is greyed out, as in the design. */
export function Pagination({ page, pageCount, onChange }: PaginationProps) {
  if (pageCount <= 1) return null
  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-3 sm:gap-5">
      <button type="button" aria-label="Previous page" disabled={page === 1} onClick={() => onChange(page - 1)} className={arrow}>
        <ChevronLeft aria-hidden className="size-6" />
      </button>
      <ol className="flex items-center gap-1 sm:gap-2">
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
          <li key={n}>
            <button
              type="button"
              aria-label={`Page ${n}`}
              aria-current={n === page ? 'page' : undefined}
              onClick={() => onChange(n)}
              className={cn(
                'size-10 rounded-full font-display text-xl font-medium transition',
                n === page ? 'text-[#b8b9be]' : 'text-ink hover:bg-surface',
              )}
            >
              {n}
            </button>
          </li>
        ))}
      </ol>
      <button type="button" aria-label="Next page" disabled={page === pageCount} onClick={() => onChange(page + 1)} className={arrow}>
        <ChevronRight aria-hidden className="size-6" />
      </button>
    </nav>
  )
}
