import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { Button } from './Button'
import { cn } from '../../lib/cn'

interface SearchBarProps {
  onSearch: (query: string) => void
  className?: string
}

/** Pill-shaped course search field with a lime submit button. */
export function SearchBar({ onSearch, className }: SearchBarProps) {
  const [value, setValue] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSearch(value.trim())
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={cn('flex w-full items-center gap-3 md:gap-[1.15vw]', className)}
    >
      <label className="flex h-[52px] min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-5 text-muted md:h-[max(48px,3.6vw)]">
        <Search aria-hidden className="size-5 shrink-0" />
        <span className="sr-only">Search courses</span>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Course, topic, creator"
          className="w-full min-w-0 bg-transparent text-base text-ink outline-none placeholder:text-muted md:text-[max(15px,1.15vw)]"
        />
      </label>
      <Button type="submit" className="h-[52px] px-6 md:h-[max(46px,3.2vw)] md:px-[max(24px,2vw)]">
        Search
      </Button>
    </form>
  )
}
