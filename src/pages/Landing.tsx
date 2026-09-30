import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { routes } from '../lib/routes'
import { CourseExplorer } from '../sections/CourseExplorer'
import { CreatorCta } from '../sections/CreatorCta'
import { CreatorSection } from '../sections/CreatorSection'
import { GrowthSection } from '../sections/GrowthSection'
import { Hero } from '../sections/Hero'
import { LearningPaths } from '../sections/LearningPaths'
import { Partners } from '../sections/Partners'
import { Testimonials } from '../sections/Testimonials'

export default function Landing() {
  const navigate = useNavigate()

  // The hero search hands off to the full search page with the query pre-filled.
  const handleSearch = (query: string) =>
    navigate(query ? `${routes.courses}?q=${encodeURIComponent(query)}` : routes.courses)

  return (
    <>
      <main>
        <Hero onSearch={handleSearch} />
        <Partners />
        <CourseExplorer />
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
