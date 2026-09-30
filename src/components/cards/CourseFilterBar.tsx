import { ArrowDownWideNarrow, ChartNoAxesColumn, Funnel, Shapes } from 'lucide-react'
import { searchCategories } from '../../data/courses'
import type { CourseFilters, LevelFilter, PriceFilter, SortKey } from '../../lib/courseFilters'
import { Chip } from '../ui/Chip'
import { Dropdown, type DropdownOption } from '../ui/Dropdown'

const priceOptions: DropdownOption<PriceFilter>[] = [
  { value: 'all', label: 'Any price' },
  { value: 'under-20', label: 'Under $20' },
  { value: '20-plus', label: '$20 and above' },
]
const levelOptions: DropdownOption<LevelFilter>[] = [
  { value: 'all', label: 'All levels' },
  { value: 'Beginner', label: 'Beginner' },
  { value: 'Intermediate', label: 'Intermediate' },
  { value: 'Advanced', label: 'Advanced' },
]
const categoryOptions: DropdownOption<string>[] = [
  { value: 'Featured', label: 'All categories' },
  ...searchCategories.slice(1).map((c) => ({ value: c, label: c })),
  { value: 'Graphic Design', label: 'Graphic Design' },
  { value: 'Digital Illustration', label: 'Digital Illustration' },
  { value: 'Data Science', label: 'Data Science' },
  { value: 'Productivity', label: 'Productivity' },
  { value: 'Freelance & Entrepreneurship', label: 'Freelance & Entrepreneurship' },
]
const sortOptions: DropdownOption<SortKey>[] = [
  { value: 'relevant', label: 'Most relevant' },
  { value: 'rating', label: 'Top rated' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
]

interface CourseFilterBarProps {
  filters: CourseFilters
  onChange: (patch: Partial<CourseFilters>) => void
  /** Show the category chip row under the dropdowns (search page only) */
  chips?: boolean
}

/** Filter / Level / Category dropdowns, sort menu and the category chip row. */
export function CourseFilterBar({ filters, onChange, chips = true }: CourseFilterBarProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <Dropdown label="Filter" icon={Funnel} options={priceOptions} value={filters.price} defaultValue="all" onChange={(price) => onChange({ price })} />
          <Dropdown label="Level" icon={ChartNoAxesColumn} options={levelOptions} value={filters.level} defaultValue="all" onChange={(level) => onChange({ level })} />
          <Dropdown label="Category" icon={Shapes} options={categoryOptions} value={filters.category} defaultValue="Featured" onChange={(category) => onChange({ category })} />
        </div>
        <Dropdown label="Most relevant" icon={ArrowDownWideNarrow} options={sortOptions} value={filters.sort} onChange={(sort) => onChange({ sort })} align="right" />
      </div>

      {chips && (
        <div className="mt-8 flex flex-wrap gap-x-3 gap-y-3" role="group" aria-label="Course categories">
          {searchCategories.map((name) => (
            <Chip key={name} active={filters.category === name} onClick={() => onChange({ category: name })} className="px-[15px] text-[15px]">
              {name}
            </Chip>
          ))}
        </div>
      )}
    </div>
  )
}
