/** Central place for URL paths so links never drift out of sync. */
export const routes = {
  home: '/',
  courses: '/courses',
  course: (id: string) => `/courses/${id}`,
  creator: (id: string) => `/creators/${id}`,
  login: '/login',
  register: '/register',
} as const

export const DEFAULT_CREATOR_ID = 'purepearl-studio'
