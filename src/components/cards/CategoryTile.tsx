import type { LearningPath } from '../../data/content'

/** Square tile with a lime icon badge, used in the "Explore Diverse Learning Paths" grid. */
export function CategoryTile({ label, icon: Icon }: LearningPath) {
  return (
    <a
      href="#courses"
      className="flex aspect-square flex-col items-center justify-center gap-3.5 rounded-[28px] border border-line bg-white p-3 text-center transition hover:border-brand/40 hover:shadow-[0_10px_30px_rgb(0_61_225/0.08)]"
    >
      <span className="flex size-[60px] items-center justify-center rounded-full bg-lime">
        <Icon aria-hidden className="size-7 text-ink" strokeWidth={2.2} />
      </span>
      <span className="text-lg text-ink">{label}</span>
    </a>
  )
}
