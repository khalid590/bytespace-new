import type { CourseDetail } from '../../data/courseDetail'
import { img } from '../../lib/cn'
import { CheckIcon } from '../ui/CheckIcon'

/** "About" tab: description, sneak peek gallery and key points. */
export function AboutTab({ detail }: { detail: CourseDetail }) {
  return (
    <div>
      <h2 className="font-display text-xl font-medium text-ink">Description</h2>
      <div className="mt-5 space-y-6 text-base leading-[26px] text-body">
        {detail.description.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <h2 className="mt-9 font-display text-xl font-medium text-ink">Sneak Peak</h2>
      <ul className="mt-5 flex flex-wrap gap-[18px]">
        {detail.sneakPeek.map((file, i) => (
          <li key={file}>
            <img
              src={img(file)}
              alt={`Course preview ${i + 1}`}
              width={184}
              height={138}
              loading="lazy"
              className="h-[125px] w-[167px] rounded-[20px] object-cover"
            />
          </li>
        ))}
      </ul>

      <h2 className="mt-9 font-display text-xl font-medium text-ink">Key Points</h2>
      <ul className="mt-6 space-y-[18px]">
        {detail.keyPoints.map((point) => (
          <li key={point} className="flex items-center gap-3 text-base text-body">
            <CheckIcon className="size-[22px]" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}
