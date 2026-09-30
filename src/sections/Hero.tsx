import { Navbar } from '../components/layout/Navbar'
import { HeroArt, HeroArtMobile } from '../components/art/HeroArt'
import { SearchBar } from '../components/ui/SearchBar'

interface HeroProps {
  onSearch: (query: string) => void
}

/**
 * Blue landing hero. On desktop everything is sized in vw so the copy stays
 * aligned with the scaled illustration; on phones it becomes a simple stack.
 */
export function Hero({ onSearch }: HeroProps) {
  return (
    <section id="home" className="bg-grid relative overflow-hidden text-white md:aspect-[1440/1029]">
      <Navbar />

      <div className="hidden md:absolute md:inset-0 md:block">
        <HeroArt />
      </div>

      <div className="relative z-10 flex flex-col items-center px-5 pt-32 text-center md:absolute md:inset-x-0 md:top-[11.7vw] md:px-0 md:pt-0">
        <h1 className="text-[2.5rem] leading-[1.15] font-semibold sm:text-5xl md:text-[5vw] md:leading-[1.2]">
          Get Access to Hundreds <br className="hidden md:block" />
          Courses Available
        </h1>
        <p className="mt-5 max-w-[34rem] text-base text-white/95 md:mt-[2.4vw] md:max-w-none md:text-[max(15px,1.25vw)]">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        <SearchBar onSearch={onSearch} className="mt-8 max-w-[520px] md:mt-[4.3vw] md:max-w-none md:w-[36vw]" />
      </div>

      <div className="md:hidden">
        <HeroArtMobile />
      </div>
    </section>
  )
}
