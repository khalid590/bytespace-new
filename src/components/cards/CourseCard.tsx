import { ChartNoAxesColumn, Star } from 'lucide-react'
import type { Course } from '../../data/courses'
import { cn, img } from '../../lib/cn'
import { AvatarStack } from '../ui/AvatarStack'

interface CourseCardProps {
  course: Course
  className?: string
}

/** Small translucent badge that sits on top of the course thumbnail. */
function Badge({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-white/60 px-2.5 py-1.5 text-[12px] leading-none whitespace-nowrap text-body backdrop-blur-sm">
      {children}
    </span>
  )
}

export function CourseCard({ course, className }: CourseCardProps) {
  const { title, author, rating, lessons, duration, comments, level, price, image } = course

  return (
    <article className={cn('min-w-0 rounded-[28px] border border-line bg-white p-[15px]', className)}>
      <div className="relative aspect-[343/197] overflow-hidden rounded-[18px] bg-chip">
        <img src={img(image)} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">
          <Badge>{`${lessons} Lessons`}</Badge>
          <Badge>{duration}</Badge>
          <Badge>{`${comments} Comments`}</Badge>
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-3 px-0.5">
        <h3 className="truncate text-xl font-semibold text-ink" title={title}>
          {title}
        </h3>
        <span className="flex shrink-0 items-center gap-1 text-[17px] text-muted">
          {rating}
          <Star aria-hidden className="size-[18px] fill-[#bdbdc2] text-[#bdbdc2]" />
        </span>
      </div>

      <p className="mt-0.5 px-0.5 text-[13px] text-muted">
        by <span className="text-brand">{author}</span>
      </p>

      <div className="mt-4 flex items-center gap-3 px-0.5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-chip px-3.5 py-2 text-sm text-body">
          <ChartNoAxesColumn aria-hidden className="size-4 text-ink" />
          {level}
        </span>
        <AvatarStack variant="small" count="26+" />
      </div>

      <p className="mt-4 px-0.5">
        <span className="font-display text-2xl font-semibold text-brand">${price}</span>
        <span className="text-[13px] text-ink">/lifetime</span>
      </p>
    </article>
  )
}
