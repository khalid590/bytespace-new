import { Video } from 'lucide-react'
import type { CourseDetail } from '../../data/courseDetail'

/** "Lessons" tab: module list, lesson content and progress tracking. */
export function LessonsTab({ detail }: { detail: CourseDetail }) {
  return (
    <div>
      <h2 className="font-display text-xl font-medium text-ink">Explore the Modules</h2>
      <p className="mt-4 text-base leading-[26px] text-body">
        Immerse yourself in the course content as we break down each module into comprehensive lessons, providing
        practical insights and hands-on experiences.
      </p>

      <h3 className="mt-9 font-display text-xl font-medium text-ink">Lesson List</h3>
      <ul className="mt-6 space-y-[19px]">
        {detail.modules.map((module) => (
          <li key={module.title} className="flex items-start gap-3.5">
            <span className="flex size-[72px] shrink-0 items-center justify-center rounded-[20px] bg-lime">
              <Video aria-hidden className="size-8 text-ink" strokeWidth={2.2} />
            </span>
            <div>
              <h4 className="text-base font-medium text-ink">{module.title}</h4>
              <p className="mt-1 text-base leading-[26px] text-body">{module.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="mt-9 font-display text-xl font-medium text-ink">Lesson Content</h3>
      <p className="mt-4 text-base leading-[26px] text-body">{detail.lessonContent}</p>

      <h3 className="mt-9 font-display text-xl font-medium text-ink">Lesson Progress Tracking</h3>
      <p className="mt-4 text-base leading-[26px] text-body">{detail.progressTracking}</p>

      <div className="mt-6 rounded-[22px] border border-[#c9cad0] p-4 sm:px-[15px]">
        <p className="text-[15px] text-ink">Learning Progress</p>
        <p className="mt-1 font-display text-[36px] leading-tight font-semibold text-ink">{detail.progress}%</p>
        <div
          className="mt-2 h-2 rounded-full bg-[#e6e6e8]"
          role="progressbar"
          aria-label="Lesson progress"
          aria-valuenow={detail.progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="h-full rounded-full bg-lime-arc" style={{ width: `${detail.progress}%` }} />
        </div>
      </div>
    </div>
  )
}
