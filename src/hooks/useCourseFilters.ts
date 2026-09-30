import { useCallback, useMemo, useState } from 'react'
import type { Course } from '../data/courses'
import { applyFilters, defaultFilters, type CourseFilters } from '../lib/courseFilters'

/** Filter state + pagination for a list of courses. Any filter change goes back to page 1. */
export function useCourseFilters(source: Course[], pageSize: number, initial: Partial<CourseFilters> = {}) {
  const [filters, setFilters] = useState<CourseFilters>({ ...defaultFilters, ...initial })
  const [requestedPage, setPage] = useState(1)

  const results = useMemo(() => applyFilters(source, filters), [source, filters])
  const pageCount = Math.max(1, Math.ceil(results.length / pageSize))
  const page = Math.min(requestedPage, pageCount)
  const visible = useMemo(() => results.slice((page - 1) * pageSize, page * pageSize), [results, page, pageSize])

  const update = useCallback((patch: Partial<CourseFilters>) => {
    setFilters((f) => ({ ...f, ...patch }))
    setPage(1)
  }, [])

  return { filters, update, visible, total: results.length, page, pageCount, setPage }
}
