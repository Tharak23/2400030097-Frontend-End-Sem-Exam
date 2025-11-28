import { useState } from 'react'
import './App.css'
import PageToggle from './components/PageToggle'
import OverviewPage from './pages/Overview'
import InsightsPage from './pages/Insights'

const pages = {
  overview: OverviewPage,
  insights: InsightsPage,
}

function App() {
  const [activePage, setActivePage] = useState('overview')
  const ActivePage = pages[activePage]

  return (
    <div className="app-shell">
      <div className="surface">
        <header className="surface__header">
          <div>
            <p className="surface__eyebrow">Product brief</p>
            <h1 className="surface__title">Reusable UI primitives</h1>
            <p className="surface__subtitle">
              These cards, buttons and text styles stay consistent across any screen.
              Toggle to see how the same building blocks adapt to different layouts.
            </p>
          </div>
          <PageToggle activePage={activePage} onChange={setActivePage} />
        </header>

        <main className="page-stack">
          <ActivePage />
        </main>
      </div>
    </div>
  )
}

export default App
