import { GrowthArt } from '../components/art/GrowthArt'
import { stats } from '../data/content'

/** "Your Path to Professional Growth" – learner-focused section with stats. */
export function GrowthSection() {
  return (
    <section className="wash-growth">
      <div className="mx-auto grid w-full max-w-[1244px] items-center gap-12 px-5 py-16 lg:min-h-[736px] lg:grid-cols-2 lg:gap-x-6 lg:py-0">
        <div>
          <h2 className="max-w-[640px] text-4xl leading-[1.2] font-semibold text-ink/90 md:text-[48px]">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-9 max-w-[520px] text-base leading-8 text-body md:text-lg">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
            journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
            career path entirely, we have the resources you need.
          </p>
          <dl className="mt-11 flex gap-10 sm:gap-14">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-4xl font-normal text-brand md:text-[40px] md:leading-tight">{stat.value}</dd>
                <dt className="text-base text-body md:text-lg">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto w-full max-w-[604px]">
          <GrowthArt />
        </div>
      </div>
    </section>
  )
}
