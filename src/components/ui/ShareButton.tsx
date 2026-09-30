import { Share2 } from 'lucide-react'
import { useState } from 'react'
import { Button } from './Button'

/** Uses the native share sheet when available, otherwise copies the page link. */
export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false)

  const share = async () => {
    const url = window.location.href
    try {
      if (navigator.share) {
        await navigator.share({ title, url })
        return
      }
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // user dismissed the share sheet or clipboard is blocked: nothing to do
    }
  }

  return (
    <Button onClick={share} className="h-11 shrink-0 gap-2 px-[26px]" aria-live="polite">
      <Share2 aria-hidden className="size-5" />
      {copied ? 'Link copied' : 'Share'}
    </Button>
  )
}
