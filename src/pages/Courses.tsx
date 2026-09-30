import { Search } from 'lucide-react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CourseFilterBar } from '../components/cards/CourseFilterBar'
import { CourseGrid } from '../components/cards/CourseGrid'
import { Footer } from '../components/layout/Footer'
import { PageHero } from '../components/layout/PageHero'
import { Dropdown, type DropdownOption } from '../components/ui/Dropdown'
import { Pagination } from '../components/ui/Pagination'
import { catalog } from '../data/courses'
import { useCourseFilters } from '../hooks/useCourseFilters'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const PAGE_SIZE = 9

type Scope = 'courses' | 'creators'
const scopeOptions: DropdownOption<Scope>[] = [
  { value: 'courses', label: 'Courses' },
  { value: 'creators', label: 'Creators' },
]

/** "Search Page" frame: Find Your Next Course. */
export default function Courses() {
  useDocumentTitle('Find Your Next Course | ByteSpace')
  const [params] = useSearchParams()
  const { filters, update, visible, total, page, pageCount, setPage } = useCourseFilters(catalog, PAGE_SIZE, {
    query: params.get('q') ?? '',
  })
  const [scope, setScope] = useState<Scope>('courses')

  const changePage = (next: number) => {
    setPage(next)
    document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <main>
        <PageHero className="px-5 pt-32 pb-14 md:pt-[163px] md:pb-[68px]">
          <h1 className="text-center text-[2rem] leading-tight font-semibold md:text-[40px]">Find Your Next Course</h1>
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-7 flex max-w-[640px] items-center gap-3 md:gap-4"
          >
            <label className="flex h-[52px] min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-5 text-muted">
              <Search aria-hidden className="size-5 shrink-0" />
              <span className="sr-only">Search {scope}</span>
              <input
                type="search"
                value={filters.query}
                onChange={(e) => update({ query: e.target.value })}
                placeholder="Search"
                className="w-full min-w-0 bg-transparent text-base text-ink outline-none placeholder:text-muted md:text-[17px]"
              />
            </label>
            <Dropdown label="Courses" options={scopeOptions} value={scope} onChange={setScope} variant="lime" chevron align="right" />
          </form>
        </PageHero>

        <section id="results" className="mx-auto w-full max-w-[1244px] scroll-mt-4 px-5 pt-12 pb-16 md:pt-[72px] md:pb-[72px]">
          <CourseFilterBar filters={filters} onChange={update} />

          <p className="sr-only" role="status">
            {total} {total === 1 ? 'course' : 'courses'} found
          </p>
          <div className="mt-10 md:mt-[76px]">
            <CourseGrid
              courses={scope === 'creators' ? [] : visible}
              emptyMessage={
                scope === 'creators'
                  ? 'Creator search is not available yet. Switch back to Courses.'
                  : 'No courses match your search yet. Try another keyword or clear a filter.'
              }
            />
          </div>

          <div className="mt-14 md:mt-16">
            <Pagination page={page} pageCount={pageCount} onChange={changePage} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
