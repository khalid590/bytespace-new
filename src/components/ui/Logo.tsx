import { Link } from 'react-router-dom'
import { cn, img } from '../../lib/cn'

interface LogoProps {
  /** "light" = white wordmark for blue backgrounds, "dark" = black wordmark for white backgrounds */
  tone?: 'light' | 'dark'
  className?: string
}

export function Logo({ tone = 'dark', className }: LogoProps) {
  return (
    <Link to="/" aria-label="ByteSpace home" className={cn('inline-block', className)}>
      <img
        src={img(tone === 'light' ? 'logo-light.png' : 'logo-dark.png')}
        alt="ByteSpace"
        width={200}
        height={45}
        className="h-9 w-auto md:h-[41px]"
      />
    </Link>
  )
}
