import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CourseFilterBar } from '../components/cards/CourseFilterBar'
import { CourseGrid } from '../components/cards/CourseGrid'
import { Footer } from '../components/layout/Footer'
import { PageHero } from '../components/layout/PageHero'
import { Button } from '../components/ui/Button'
import { findCreator } from '../data/creators'
import { useCourseFilters } from '../hooks/useCourseFilters'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { img } from '../lib/cn'
import NotFound from './NotFound'

function StatPill({ value, label }: { value: number; label: string }) {
  return (
    <li className="inline-flex h-[46px] items-center gap-2 rounded-full bg-white px-[26px] text-lg text-ink">
      <span className="text-brand">{value}</span>
      {label}
    </li>
  )
}

/** "Creator Profile" frame. */
export default function CreatorProfile() {
  const { creatorId } = useParams()
  const creator = findCreator(creatorId)
  const [following, setFollowing] = useState(false)
  const { filters, update, visible } = useCourseFilters(creator?.courses ?? [], 9)

  useDocumentTitle(creator ? `${creator.name} | ByteSpace` : 'Creator not found | ByteSpace')
  if (!creator) return <NotFound />

  return (
    <>
      <main>
        <PageHero className="pt-32 pb-12 md:pt-[170px] md:pb-[82px]">
          <div className="mx-auto w-full max-w-[1244px] px-5">
            <div className="flex items-center gap-4 md:items-start md:gap-6">
              <img
                src={img(creator.avatar)}
                alt={`${creator.name} profile photo`}
                width={106}
                height={105}
                className="size-20 shrink-0 rounded-[18px] object-cover md:size-[96px]"
              />
              <div className="min-w-0 md:pt-1">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <h1 className="text-3xl leading-tight font-semibold md:text-[40px]">{creator.name}</h1>
                  <span className="inline-flex h-[35px] items-center rounded-full bg-lime px-6 text-base text-ink md:-mt-3">
                    Creator
                  </span>
                </div>
                <p className="mt-1 text-lg md:mt-2">{creator.role}</p>
              </div>
            </div>

            <div className="mt-6 space-y-0 text-base leading-[29px] text-white md:mt-[38px] md:text-[17px]">
              {creator.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 20)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 md:mt-11">
              <ul className="flex flex-wrap gap-x-4 gap-y-3">
                <StatPill value={creator.courses.length} label="Products" />
                <StatPill value={creator.followers + (following ? 1 : 0)} label="Followers" />
              </ul>
              <Button onClick={() => setFollowing((v) => !v)} aria-pressed={following} className="h-[46px] px-[26px] text-lg">
                {following ? 'Following' : 'Follow'}
              </Button>
            </div>
          </div>
        </PageHero>

        <section className="mx-auto w-full max-w-[1244px] px-5 pt-12 pb-16 md:pt-[62px] md:pb-[72px]">
          <CourseFilterBar filters={filters} onChange={update} chips={false} />
          <div className="mt-10">
            <CourseGrid courses={visible} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
