import { ChartNoAxesColumn, Star, Users } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { AboutTab } from '../components/course/AboutTab'
import { CourseTabs } from '../components/course/CourseTabs'
import { EnrollCard } from '../components/course/EnrollCard'
import { LessonsTab } from '../components/course/LessonsTab'
import { ReviewsTab } from '../components/course/ReviewsTab'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { ShareButton } from '../components/ui/ShareButton'
import { getCourseDetail } from '../data/courseDetail'
import { findCourse } from '../data/courses'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { img } from '../lib/cn'
import { tabs, type TabKey } from '../lib/courseTabs'
import { routes } from '../lib/routes'
import NotFound from './NotFound'

function Pill({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <li className="inline-flex h-10 items-center gap-2.5 rounded-full bg-white px-[26px] text-base text-ink md:h-11">
      {icon}
      {children}
    </li>
  )
}

/** Course Details / Lessons / Reviews frames: one page with three tabs. */
export default function CourseDetail() {
  const { courseId } = useParams()
  const course = findCourse(courseId)
  const [params, setParams] = useSearchParams()
  const [previewing, setPreviewing] = useState(false)

  const requested = params.get('tab') as TabKey | null
  const tab: TabKey = tabs.some((t) => t.key === requested) ? (requested as TabKey) : 'about'

  useDocumentTitle(course ? `${course.title} | ByteSpace` : 'Course not found | ByteSpace')
  if (!course) return <NotFound />

  const detail = getCourseDetail(course)
  const selectTab = (next: TabKey) => setParams(next === 'about' ? {} : { tab: next }, { replace: true })

  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-[minmax(20px,1fr)_minmax(0,722px)_64px_409px_minmax(20px,1fr)]">
        {/* Blue backdrop: rows 1-2 (title + video). The sidebar hangs over its bottom edge. */}
        <div className="bg-grid relative col-span-full row-start-1 row-end-3 overflow-hidden lg:row-end-3">
          <Navbar />
        </div>

        <header className="relative z-10 col-span-full row-start-1 px-5 pt-32 text-white lg:col-start-2 lg:col-end-5 lg:px-0 lg:pt-[166px]">
          <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
            <h1 className="min-w-0 flex-1 basis-[18rem] text-[1.75rem] leading-[1.2] font-semibold sm:text-4xl md:text-[40px]">
              {detail.title}
            </h1>
            <ShareButton title={detail.title} />
          </div>
          <p className="mt-2 font-display text-lg font-medium sm:text-xl">{detail.subtitle}</p>
          <p className="mt-5 text-lg">
            by{' '}
            <Link to={routes.creator(course.authorId)} className="text-lime hover:underline">
              {course.author}
            </Link>
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-3">
            <Pill icon={<ChartNoAxesColumn aria-hidden className="size-5 text-brand" strokeWidth={2.6} />}>
              {detail.level}
            </Pill>
            <Pill icon={<Star aria-hidden className="size-5 fill-brand text-brand" />}>
              {detail.rating} ({detail.reviewCount} reviews)
            </Pill>
            <Pill icon={<Users aria-hidden className="size-5 text-brand" />}>{detail.students} Students</Pill>
          </ul>
        </header>

        <div className="relative z-10 col-span-full row-start-2 px-5 pt-8 pb-10 lg:col-start-2 lg:col-end-3 lg:px-0 lg:pt-[58px] lg:pb-16">
          <div className="relative aspect-[792/527] overflow-hidden rounded-[28px]">
            <img
              src={img('video-still.png')}
              alt="Course preview video"
              width={792}
              height={527}
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              aria-label={previewing ? 'Preview is not available in this demo' : 'Play course preview'}
              onClick={() => setPreviewing((v) => !v)}
              className="absolute top-[57%] left-1/2 flex size-[14%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[22%] transition hover:bg-white/10"
            />
          </div>
          {previewing && (
            <p role="status" className="mt-3 rounded-2xl bg-white/95 px-4 py-2.5 text-center text-sm text-body">
              Video playback is not part of this demo.
            </p>
          )}
        </div>

        <div className="relative z-10 col-span-full row-start-4 px-5 pt-2 pb-16 lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:px-0 lg:pt-[63px] lg:pb-[77px]">
          <CourseTabs value={tab} onChange={selectTab} />
          <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} className="mt-8">
            {tab === 'about' && <AboutTab detail={detail} />}
            {tab === 'lessons' && <LessonsTab detail={detail} />}
            {tab === 'reviews' && <ReviewsTab detail={detail} />}
          </div>
        </div>

        <div className="relative z-20 col-span-full row-start-3 px-5 pb-8 lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-4 lg:self-start lg:px-0 lg:pt-[58px] lg:pb-0">
          <EnrollCard course={course} detail={detail} />
        </div>
      </main>
      <Footer />
    </>
  )
}
