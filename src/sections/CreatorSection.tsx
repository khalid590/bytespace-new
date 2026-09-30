import { Check } from 'lucide-react'
import { CreatorArt } from '../components/art/CreatorArt'
import { creatorBenefits } from '../data/content'

/** "Create & Manage Courses Easily" – creator-focused section with a benefits checklist. */
export function CreatorSection() {
  return (
    <section id="creators" className="wash-creator scroll-mt-4">
      <div className="mx-auto grid w-full max-w-[1204px] items-center gap-12 px-5 py-16 lg:min-h-[736px] lg:grid-cols-2 lg:gap-x-6 lg:py-0">
        <div className="order-2 mx-auto w-full max-w-[549px] lg:order-1 lg:mx-0">
          <CreatorArt />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="max-w-[520px] text-4xl leading-[1.2] font-semibold text-ink/90 md:text-[48px]">
            Create &amp; Manage Courses Easily.
          </h2>
          <p className="mt-9 max-w-[580px] text-base leading-8 text-body md:text-lg">
            <strong className="font-semibold text-ink">ByteSpace</strong> supports individuals or entities in the
            creation, publication, and administration of educational courses.
          </p>
          <ul className="mt-10 space-y-[18px]">
            {creatorBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-lg text-ink md:text-xl">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand">
                  <Check aria-hidden className="size-3.5 text-white" strokeWidth={3.2} />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
