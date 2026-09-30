import { ChartNoAxesColumn, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Course } from '../../data/courses'
import { cn, img } from '../../lib/cn'
import { routes } from '../../lib/routes'
import { AvatarStack } from '../ui/AvatarStack'

interface CourseCardProps {
  course: Course
  /** "accent" is the lime-star / dark-chip look used on the auth screens */
  tone?: 'default' | 'accent'
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

export function CourseCard({ course, tone = 'default', className }: CourseCardProps) {
  const { id, title, author, authorId, rating, lessons, duration, comments, level, price, image } = course
  const accent = tone === 'accent'

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
          <Link to={routes.course(id)} className="hover:text-brand">
            {title}
          </Link>
        </h3>
        <span className="flex shrink-0 items-center gap-1 text-[17px] text-muted">
          {rating}
          <Star
            aria-hidden
            className={cn('size-[18px]', accent ? 'fill-lime text-lime' : 'fill-[#bdbdc2] text-[#bdbdc2]')}
          />
        </span>
      </div>

      <p className="mt-0.5 px-0.5 text-[13px] text-muted">
        by{' '}
        <Link to={routes.creator(authorId)} className="text-brand hover:underline">
          {author}
        </Link>
      </p>

      <div className="mt-4 flex items-center gap-3 px-0.5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-chip px-3.5 py-2 text-sm text-body">
          <ChartNoAxesColumn aria-hidden className="size-4 text-ink" />
          {level}
        </span>
        <AvatarStack variant="small" count="26+" chip={accent ? 'dark' : 'lime'} />
      </div>

      <p className="mt-4 px-0.5">
        <span className="font-display text-2xl font-semibold text-brand">${price}</span>
        <span className="text-[13px] text-ink">/lifetime</span>
      </p>
    </article>
  )
}
