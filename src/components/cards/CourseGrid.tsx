import type { Course } from '../../data/courses'
import { CourseCard } from './CourseCard'

interface CourseGridProps {
  courses: Course[]
  emptyMessage?: string
}

/** 3-column responsive grid of course cards with an empty state. */
export function CourseGrid({ courses, emptyMessage = 'No courses match your filters yet.' }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <p role="status" className="rounded-3xl bg-surface px-6 py-16 text-center text-lg text-body">
        {emptyMessage}
      </p>
    )
  }
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {courses.map((course, i) => (
        <CourseCard key={`${course.id}-${i}`} course={course} />
      ))}
    </div>
  )
}
