// ============================================================
// HYELEARNER: FOUNDATION — BOTTOM NAV (SHOWCASE / PREVIEW)
// Dipped bar with raised 4-dot center button.
// Shell mode (from Home): activeTab + onTabChange.
// Route mode (Dashboard / other pages): all nav via onNavigate.
// Built by Hyesent.dev
// ============================================================

import { ViewOnly } from './ViewOnly'
import { Home, Play, Users, Swords } from 'lucide-react'

const NAV_TABS = [
  { id: 'home',  label: 'Home',  icon: Home },
  { id: 'study', label: 'Study', icon: Play },
  { id: 'duel',  label: 'Duel',  icon: Swords },
]

export function ShowcaseBottomNav({ activeTab, onTabChange, onNavigate }) {
  const handleTab = (id) => {
    if (onTabChange) onTabChange(id)
    else onNavigate?.(id)
  }

  const handleDashboard = () => onNavigate?.('dashboard')
  const handleSocial    = () => onNavigate?.('social')

  const renderTab = (tab) => {
    const Icon = tab.icon
    const isActive = activeTab === tab.id
    return (
      <button
        key={tab.id}
        className={`bottom-nav-tab ${isActive ? 'active' : ''}`}
        onClick={() => handleTab(tab.id)}
        aria-label={tab.label}
        aria-current={isActive ? 'page' : undefined}
      >
        <Icon size={22} strokeWidth={isActive ? 2.4 : 1.8} />
        <span className="bottom-nav-tab-label">{tab.label}</span>
      </button>
    )
  }

  return (
    <nav className="bottom-nav" aria-label="Primary">
      <div className="bottom-nav-inner">
        <svg
          className="bottom-nav-bar-svg"
          viewBox="0 0 480 72"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path
            d="
              M 20,0
              Q 0,0 0,20
              L 0,72
              L 480,72
              L 480,20
              Q 480,0 460,0
              L 300,0
              C 280,0 275,42 240,42
              C 205,42 200,0 180,0
              L 20,0
              Z
            "
            className="bottom-nav-bar-path"
          />
        </svg>

        <div className="bottom-nav-center-glow" aria-hidden="true" />

        <div className="bottom-nav-tabs">
          {renderTab(NAV_TABS[0])}
          {renderTab(NAV_TABS[1])}

          <div className="bottom-nav-center-slot" />

          <ViewOnly tooltip="Sign up to open Social">
            <button
              className="bottom-nav-tab"
              onClick={handleSocial}
              aria-label="Social"
            >
              <Users size={22} strokeWidth={1.8} />
              <span className="bottom-nav-tab-label">Social</span>
            </button>
          </ViewOnly>

          {renderTab(NAV_TABS[2])}
        </div>

        <ViewOnly tooltip="Sign up to open Dashboard">
          <button
            className="bottom-nav-center"
            onClick={handleDashboard}
            aria-label="Dashboard"
            title="Dashboard"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3"  y="3"  width="7" height="7" rx="2" />
              <rect x="14" y="3"  width="7" height="7" rx="2" />
              <rect x="3"  y="14" width="7" height="7" rx="2" />
              <rect x="14" y="14" width="7" height="7" rx="2" />
            </svg>
          </button>
        </ViewOnly>
      </div>
    </nav>
  )
}s
