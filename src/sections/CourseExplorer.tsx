import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CourseCard } from '../components/cards/CourseCard'
import { Chip } from '../components/ui/Chip'
import { SectionHeading } from '../components/ui/SectionHeading'
import { courseCategories, courses, FEATURED } from '../data/courses'
import { routes } from '../lib/routes'

export function CourseExplorer() {
  const [category, setCategory] = useState(FEATURED)

  const visible = useMemo(
    () => (category === FEATURED ? courses : courses.filter((c) => c.categories.includes(category))),
    [category],
  )

  return (
    <section id="courses" className="mx-auto w-full max-w-[1244px] scroll-mt-4 px-5 pt-16 md:pt-20">
      <SectionHeading
        title={
          <>
            Discover Your Passion, <br className="hidden md:block" />
            Build Your Skills
          </>
        }
        description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />

      <div className="mx-auto mt-11 flex max-w-[1160px] flex-wrap justify-center gap-x-[17px] gap-y-5" role="group" aria-label="Course categories">
        {courseCategories.map((name) => (
          <Chip
            key={name}
            active={name === category}
            onClick={() => setCategory(name)}
          >
            {name}
          </Chip>
        ))}
        <Link to={routes.courses} className="px-3 py-2.5 text-base text-brand hover:underline">
          + More
        </Link>
      </div>

      {visible.length > 0 ? (
        <div className="mt-12 grid gap-8 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-11">
          {visible.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <p className="mt-16 rounded-3xl bg-surface px-6 py-14 text-center text-lg text-body" role="status">
          No courses match that yet. Try another category or search term.
        </p>
      )}
    </section>
  )
}
