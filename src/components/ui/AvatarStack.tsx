import { cn, img } from '../../lib/cn'

interface AvatarStackProps {
  /** "small" = 4 faces (course cards), "large" = 8 faces (Happy Students card) */
  variant: 'small' | 'large'
  count: string
  /** Colour of the counter chip */
  chip?: 'lime' | 'dark'
  className?: string
}

const sources = {
  small: { file: 'avatars-4.png', width: 108, height: 42, imgClass: 'h-[34px]', chip: 'size-[30px] text-xs' },
  large: { file: 'avatars-8.png', width: 206, height: 55, imgClass: 'h-[50px]', chip: 'size-11 text-[13px]' },
}

/** Overlapping learner photos followed by a lime "+N" counter. */
export function AvatarStack({ variant, count, chip = 'lime', className }: AvatarStackProps) {
  const s = sources[variant]
  return (
    <div className={cn('flex items-center', className)}>
      <img src={img(s.file)} alt="" width={s.width} height={s.height} className={cn('w-auto', s.imgClass)} />
      <span
        className={cn(
          '-ml-1.5 inline-flex shrink-0 items-center justify-center rounded-full font-medium',
          chip === 'lime' ? 'bg-lime text-ink' : 'bg-ink text-white',
          s.chip,
        )}
      >
        {count}
      </span>
    </div>
  )
}
