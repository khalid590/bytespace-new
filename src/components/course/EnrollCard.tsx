import { IdCard, Megaphone, NotepadText, Video, type LucideIcon } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Course } from '../../data/courses'
import type { CourseDetail } from '../../data/courseDetail'
import { img } from '../../lib/cn'
import { routes } from '../../lib/routes'
import { Button } from '../ui/Button'

const includeIcons: LucideIcon[] = [NotepadText, Video, IdCard, Megaphone]

interface EnrollCardProps {
  course: Course
  detail: CourseDetail
}

/** Sticky-looking sidebar: lesson preview, price, enroll button and creator box. */
export function EnrollCard({ course, detail }: EnrollCardProps) {
  const [enrolled, setEnrolled] = useState(false)

  return (
    <aside className="rounded-[28px] border border-line bg-white p-6 sm:p-[39px]" aria-label="Enroll in this course">
      <h2 className="font-display text-2xl font-semibold text-ink">
        {detail.lessonCount} Lessons ({detail.hours} hours)
      </h2>

      <ol className="mt-5 space-y-3">
        {detail.previewLessons.map((lesson) => (
          <li key={lesson.number} className="grid grid-cols-[32px_1fr_auto] items-start gap-x-2 text-base leading-[21px] text-ink">
            <span>{lesson.number}</span>
            <span className="pr-4">{lesson.title}</span>
            <span className="text-brand">{lesson.mins} mins</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-base text-body">{detail.moreVideos} more videos</p>

      <p className="mt-9 text-base leading-[26px] text-body">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <p className="mt-6">
        <span className="font-display text-[40px] leading-none font-semibold text-brand">${course.price}</span>
        <span className="text-base text-body">/lifetime</span>
      </p>

      <Button
        onClick={() => setEnrolled((v) => !v)}
        aria-pressed={enrolled}
        className="mt-5 h-[46px] w-full text-lg"
      >
        {enrolled ? 'Enrolled ✓' : 'Enroll Now'}
      </Button>

      <h3 className="mt-8 font-display text-xl font-medium text-ink">This course include</h3>
      <ul className="mt-5 space-y-[18px]">
        {detail.includes.map((label, i) => {
          const Icon = includeIcons[i] ?? NotepadText
          return (
            <li key={label} className="flex items-center gap-3 text-base text-body">
              <Icon aria-hidden className="size-[22px] text-brand" strokeWidth={2} />
              {label}
            </li>
          )
        })}
      </ul>

      <hr className="my-6 border-line" />

      <div className="flex items-center gap-3.5">
        <img src={img('avatar-sidebar.jpg')} alt="" width={57} height={57} className="size-[52px] rounded-full object-cover" />
        <div>
          <p className="text-lg leading-tight text-ink">PurePearl Studio</p>
          <p className="text-base text-body">Professional Creator</p>
        </div>
      </div>
      <p className="mt-6 text-base leading-[26px] text-body">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>
      <Link
        to={routes.creator(course.authorId)}
        className="mt-6 inline-flex h-[38px] items-center rounded-full border border-[#c9cad0] px-[17px] text-base text-ink transition hover:bg-surface"
      >
        See Full Profile
      </Link>
    </aside>
  )
}
