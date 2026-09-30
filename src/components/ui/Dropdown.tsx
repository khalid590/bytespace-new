import { Check, ChevronDown, type LucideIcon } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { cn } from '../../lib/cn'

export interface DropdownOption<T extends string> {
  value: T
  label: string
}

interface DropdownProps<T extends string> {
  /** Text shown while nothing (or the default option) is selected */
  label: string
  icon?: LucideIcon
  options: DropdownOption<T>[]
  value: T
  /** Value that means "no filter"; the button then shows `label` */
  defaultValue?: T
  onChange: (value: T) => void
  variant?: 'outline' | 'lime'
  chevron?: boolean
  align?: 'left' | 'right'
  className?: string
}

/** Pill-shaped button that opens a small single-select menu. */
export function Dropdown<T extends string>({
  label,
  icon: Icon,
  options,
  value,
  defaultValue,
  onChange,
  variant = 'outline',
  chevron = false,
  align = 'left',
  className,
}: DropdownProps<T>) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const selected = options.find((o) => o.value === value)
  const text = selected && value !== defaultValue ? selected.label : label

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'inline-flex h-12 items-center gap-2.5 rounded-full px-5 text-base whitespace-nowrap transition',
          variant === 'lime'
            ? 'bg-lime font-medium text-ink hover:brightness-95'
            : 'border border-[#c9cad0] bg-white text-ink hover:bg-surface',
        )}
      >
        {Icon && <Icon aria-hidden className="size-5" />}
        {text}
        {chevron && <ChevronDown aria-hidden className={cn('size-5 transition', open && 'rotate-180')} />}
      </button>

      {open && (
        <ul
          id={menuId}
          role="listbox"
          className={cn(
            'absolute top-full z-30 mt-2 max-h-72 min-w-[13rem] overflow-auto rounded-2xl border border-line bg-white p-1.5 text-ink shadow-[0_16px_40px_rgb(12_12_29/0.12)]',
            align === 'right' ? 'right-0' : 'left-0',
          )}
        >
          {options.map((o) => (
            <li key={o.value} role="option" aria-selected={o.value === value}>
              <button
                type="button"
                onClick={() => {
                  onChange(o.value)
                  setOpen(false)
                }}
                className="flex w-full items-center justify-between gap-6 rounded-xl px-3.5 py-2.5 text-left text-base hover:bg-surface"
              >
                {o.label}
                {o.value === value && <Check aria-hidden className="size-4 text-brand" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
