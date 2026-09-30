import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { navLinks } from '../../data/content'
import { cn } from '../../lib/cn'
import { routes } from '../../lib/routes'
import { Logo } from '../ui/Logo'

const linkText = 'text-base md:text-[max(15px,1.1vw)]'

/** Transparent top bar that sits on the blue hero. Collapses into a menu on phones. */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="mx-auto flex h-[72px] w-full max-w-[1244px] items-center justify-between px-5 md:h-[max(72px,8.2vw)]">
        <Logo tone="light" />

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex md:gap-[2.4vw] lg:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                cn(linkText, 'transition hover:text-lime', isActive ? 'font-medium' : 'text-white/85')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex lg:gap-6">
          <Link to={routes.login} className={cn(linkText, 'text-white/85 transition hover:text-lime')}>
            Sign In
          </Link>
          <Link to={routes.register} className={cn(linkText, 'text-white/85 transition hover:text-lime')}>
            Join Us
          </Link>
          <button type="button" aria-label="Shopping bag" className="transition hover:text-lime">
            <ShoppingBag aria-hidden className="size-5" />
          </button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="mx-4 rounded-2xl bg-brand-deep/95 p-5 shadow-xl backdrop-blur md:hidden">
          <ul className="flex flex-col gap-4 text-lg">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink to={link.to} end={link.end} onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="flex gap-3 border-t border-white/20 pt-4">
              <Link to={routes.login} className="flex-1 rounded-full border border-white/40 py-2.5 text-center">
                Sign In
              </Link>
              <Link to={routes.register} className="flex-1 rounded-full bg-lime py-2.5 text-center font-medium text-ink">
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
