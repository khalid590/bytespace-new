import type { Testimonial } from '../../data/content'
import { img } from '../../lib/cn'

export function TestimonialCard({ name, role, quote, avatar }: Testimonial) {
  return (
    <figure className="rounded-[32px] bg-white p-6">
      <img
        src={img(avatar)}
        alt={`Photo of ${name}`}
        width={88}
        height={88}
        className="size-20 rounded-full object-cover"
      />
      <figcaption className="mt-5">
        <p className="font-display text-xl font-semibold text-ink">{name}</p>
        <p className="text-lg text-brand">{role}</p>
      </figcaption>
      <blockquote className="mt-5 text-lg leading-[29px] text-body">{quote}</blockquote>
    </figure>
  )
}
