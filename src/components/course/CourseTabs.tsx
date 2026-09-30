import { useRef, type KeyboardEvent } from 'react'
import { tabs, type TabKey } from '../../lib/courseTabs'
import { Chip } from '../ui/Chip'

interface CourseTabsProps {
  value: TabKey
  onChange: (tab: TabKey) => void
}

/** ARIA tablist rendered as pills. Arrow keys move between tabs. */
export function CourseTabs({ value, onChange }: CourseTabsProps) {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({})

  const onKeyDown = (e: KeyboardEvent, index: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const next = (index + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length
    onChange(tabs[next].key)
    refs.current[tabs[next].key]?.focus()
  }

  return (
    <div role="tablist" aria-label="Course sections" className="flex flex-wrap gap-x-[17px] gap-y-3">
      {tabs.map((tab, i) => (
        <Chip
          key={tab.key}
          ref={(el) => {
            refs.current[tab.key] = el
          }}
          role="tab"
          id={`tab-${tab.key}`}
          aria-selected={value === tab.key}
          aria-controls={`panel-${tab.key}`}
          tabIndex={value === tab.key ? 0 : -1}
          active={value === tab.key}
          onClick={() => onChange(tab.key)}
          onKeyDown={(e) => onKeyDown(e, i)}
        >
          {tab.label}
        </Chip>
      ))}
    </div>
  )
}
