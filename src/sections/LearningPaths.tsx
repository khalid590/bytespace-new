import { CategoryTile } from '../components/cards/CategoryTile'
import { SectionHeading } from '../components/ui/SectionHeading'
import { learningPaths } from '../data/content'

export function LearningPaths() {
  return (
    <section id="learning-paths" className="mx-auto w-full max-w-[1204px] scroll-mt-4 px-5 pt-16 pb-16 md:pt-20 md:pb-[120px]">
      <SectionHeading
        size="md"
        title="Explore Diverse Learning Paths at Bytespace"
        description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />
      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-[71px] lg:grid-cols-6 lg:gap-[41px]">
        {learningPaths.map((path) => (
          <li key={path.label}>
            <CategoryTile {...path} />
          </li>
        ))}
      </ul>
    </section>
  )
}
