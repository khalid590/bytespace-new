import { TestimonialCard } from '../components/cards/TestimonialCard'
import { testimonials } from '../data/content'

export function Testimonials() {
  return (
    <section className="wash-community">
      <div className="mx-auto w-full max-w-[1204px] px-5 pt-16 pb-14 md:pt-[120px]">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <h2 className="text-4xl leading-[1.2] font-semibold text-black md:text-[48px]">
            Discover What Our <br className="hidden md:block" />
            Community Is Saying
          </h2>
          <p className="max-w-[580px] text-base leading-8 text-body md:text-lg">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-[41px]">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
