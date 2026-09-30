import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Navbar } from './Navbar'

interface PageHeroProps {
  children: ReactNode
  className?: string
}

/** Blue grid header with the navbar on top, shared by every inner page. */
export function PageHero({ children, className }: PageHeroProps) {
  return (
    <section className={cn('bg-grid relative overflow-hidden text-white', className)}>
      <Navbar />
      {children}
    </section>
  )
}
