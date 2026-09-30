import { Star } from 'lucide-react'
import { useState } from 'react'
import type { CourseDetail } from '../../data/courseDetail'
import { cn, img } from '../../lib/cn'
import { Chip } from '../ui/Chip'
import { Stars } from '../ui/Stars'

type RatingFilter = 'all' | 1 | 2 | 3 | 4 | 5
const filters: RatingFilter[] = ['all', 5, 4, 3, 2, 1]

/** "Reviews" tab: rating summary, star filters and individual reviews. */
export function ReviewsTab({ detail }: { detail: CourseDetail }) {
  const [filter, setFilter] = useState<RatingFilter>('all')
  const { average, breakdown } = detail.ratingSummary
  const max = Math.max(...breakdown.map((b) => b.count))
  const visible = detail.reviews.filter((r) => filter === 'all' || r.rating === filter)

  return (
    <div>
      <h2 className="font-display text-xl font-medium text-ink">What Learners Are Saying</h2>
      <p className="mt-4 text-base leading-[26px] text-body">
        Discover what our learners have to say about their experience with '{detail.title.split(':')[0]}: A
        Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey
        of mastering digital asset creation.
      </p>

      <div className="mt-6 flex flex-col gap-6 rounded-[22px] border border-[#c9cad0] p-6 sm:flex-row sm:items-center sm:gap-9 sm:px-10 sm:py-11">
        <div className="flex size-[140px] shrink-0 flex-col items-center justify-center self-center rounded-xl bg-lime sm:self-auto">
          <span className="text-[15px] text-ink">Ratings</span>
          <span className="font-display text-[44px] leading-none font-medium text-ink">{average}</span>
        </div>
        <ul className="min-w-0 flex-1 space-y-2.5">
          {breakdown.map(({ stars, count }) => (
            <li key={stars} className="flex items-center gap-4">
              <div className="h-[7px] min-w-0 flex-1 rounded-full bg-[#e6e6e8]" aria-hidden>
                <div className="h-full rounded-full bg-lime-arc" style={{ width: `${Math.max(3, (count / max) * 92)}%` }} />
              </div>
              <Stars value={stars} starClassName="size-[17px] sm:size-[22px]" />
              <span className="w-9 text-right text-base text-body">
                <span className="sr-only">{stars} stars: </span>
                {count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <h3 className="mt-9 font-display text-xl font-medium text-ink">Individual Reviews:</h3>
      <div className="mt-5 flex flex-wrap gap-x-3.5 gap-y-3" role="group" aria-label="Filter reviews by rating">
        {filters.map((f) => (
          <Chip key={f} active={filter === f} onClick={() => setFilter(f)} className="inline-flex items-center gap-2">
            {f === 'all' ? (
              'All rating'
            ) : (
              <>
                <Star aria-hidden className="size-[18px] fill-[#4d4d55] text-[#4d4d55]" />
                {f}
              </>
            )}
          </Chip>
        ))}
      </div>

      <div className="mt-6 space-y-6">
        {visible.length === 0 && (
          <p role="status" className="rounded-3xl bg-surface px-6 py-12 text-center text-base text-body">
            No {filter}-star reviews yet.
          </p>
        )}
        {visible.map((review) => (
          <article key={review.id} className="rounded-[26px] border border-[#c9cad0] p-6 sm:px-[39px] sm:py-9">
            <header className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <img src={img(review.avatar)} alt="" width={57} height={57} className="size-[52px] rounded-full object-cover" />
                <div>
                  <h4 className="text-lg leading-tight text-ink">{review.name}</h4>
                  <p className="text-base text-body">{review.role}</p>
                </div>
              </div>
              <p className={cn('shrink-0 text-base text-body')}>{review.when}</p>
            </header>
            <Stars value={review.rating} className="mt-6 gap-1.5" />
            <p className="mt-5 text-base leading-[26px] text-body">{review.text}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
