const VERSION = '2.3.4'
const BASE = `https://unpkg.com/github-calendar@${VERSION}/dist`

let loadPromise: Promise<void> | null = null

export function loadGithubCalendarAssets(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('GitHub calendar must load in the browser'))
  }

  const w = window as Window & { GitHubCalendar?: unknown }
  if (typeof w.GitHubCalendar === 'function') {
    return Promise.resolve()
  }

  if (loadPromise) return loadPromise

  loadPromise = new Promise((resolve, reject) => {
    const css = document.createElement('link')
    css.rel = 'stylesheet'
    css.href = `${BASE}/github-calendar-responsive.css`
    document.head.appendChild(css)

    const script = document.createElement('script')
    script.src = `${BASE}/github-calendar.min.js`
    script.async = true
    script.dataset.githubCalendar = VERSION
    script.onload = () => resolve()
    script.onerror = () => {
      loadPromise = null
      reject(new Error('Failed to load GitHub calendar script'))
    }
    document.head.appendChild(script)
  })

  return loadPromise
}
