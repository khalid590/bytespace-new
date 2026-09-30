import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to the top on route changes, or to the #anchor when the URL has one. */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // wait a frame so lazily loaded pages have rendered the target
      const id = window.requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView())
      return () => window.cancelAnimationFrame(id)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
