import { useState } from 'react'

import ShowcaseHome from './ShowcaseHome'

export function ShowcaseShell({ initialPage = 'home' }) {
  const [page, setPage] = useState(initialPage)

  switch (page) {
    case 'home':
      return (
        <ShowcaseHome
          onNavigate={setPage}
          initialTab="home"
        />
      )

    case 'study':
      return (
        <ShowcaseHome
          onNavigate={setPage}
          initialTab="study"
        />
      )

    case 'duel':
      return (
        <ShowcaseHome
          onNavigate={setPage}
          initialTab="duel"
        />
      )

    default:
      return (
        <ShowcaseHome
          onNavigate={setPage}
          initialTab="home"
        />
      )
  }
}

export default ShowcaseShell
