import { img } from '../lib/cn'

const partners = [1, 2, 3, 4, 5]

/** Grey strip with partner logos. */
export function Partners() {
  return (
    <section aria-label="Trusted by" className="bg-surface">
      <ul className="mx-auto grid w-full max-w-[1140px] grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 px-5 py-14 sm:grid-cols-3 md:flex md:justify-between md:py-[74px]">
        {partners.map((n) => (
          <li key={n}>
            <img
              src={img(`partner-${n}.png`)}
              alt="Logoipsum"
              loading="lazy"
              className="h-[38px] w-auto md:h-[55px]"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
