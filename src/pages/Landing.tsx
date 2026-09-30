import { useCallback, useState } from 'react'
import { Footer } from '../components/layout/Footer'
import { CourseExplorer } from '../sections/CourseExplorer'
import { CreatorCta } from '../sections/CreatorCta'
import { CreatorSection } from '../sections/CreatorSection'
import { GrowthSection } from '../sections/GrowthSection'
import { Hero } from '../sections/Hero'
import { LearningPaths } from '../sections/LearningPaths'
import { Partners } from '../sections/Partners'
import { Testimonials } from '../sections/Testimonials'

export default function Landing() {
  const [query, setQuery] = useState('')

  const handleSearch = useCallback((value: string) => {
    setQuery(value)
    // wait a frame so the filtered list has rendered before scrolling to it
    requestAnimationFrame(() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }))
  }, [])

  return (
    <>
      <main>
        <Hero onSearch={handleSearch} />
        <Partners />
        <CourseExplorer query={query} onClearQuery={() => setQuery('')} />
        <LearningPaths />
        <GrowthSection />
        <CreatorSection />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
