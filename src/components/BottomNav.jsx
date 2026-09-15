// ============================================================
// HYELEARNER: FOUNDATION — BOTTOM NAVIGATION
// Dipped bar with raised 4-dot center button
// Home / Study tabs = internal tab swap
// 4-dot center = routes to /dashboard
// Social = routes to /social
// Duel = internal tab
// Built by Hyesent.dev
// ============================================================

import { useNavigate } from 'react-router-dom'
import { Home, Play, Users, Swords } from 'lucide-react'

export function BottomNav({ activeTab, onTabChange }) {
  const navigate = useNavigate()

  // Tab items (left + right of center)
  const leftTabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'study', label: 'Study', icon: Play },
  ]
  const rightTabs = [
    { id: 'duel', label: 'Duel', icon: Swords },
  ]

  const handleTabClick = (id) => {
    if (onTabChange) onTabChange(id)
  }

  return (
    <nav className="bottom-nav" aria-label="Primary navigation">
      <div className="bottom-nav-inner">

        {/* Curved bar background */}
        <div className="bottom-nav-bar">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 480 72"
            preserveAspectRatio="none"
            style={{ display: 'block' }}
            aria-hidden="true"
          >
            <defs>
              <clipPath id="navBarShape">
                <path
                  d="M 0,0 
                     L 180,0 
                     C 200,0 205,42 240,42 
                     C 275,42 280,0 300,0 
                     L 480,0 
                     L 480,72 
                     L 0,72 
                     Z"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Glow behind center button */}
        <div className="bottom-nav-center-glow" aria-hidden="true" />

        {/* Tabs row */}
        <div className="bottom-nav-tabs">

          {/* Left tabs */}
          {leftTabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                className={`bottom-nav-tab ${isActive ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={22} strokeWidth={isActive ? 2.4 : 1.8} />
                <span className="bottom-nav-tab-label">{tab.label}</span>
              </button>
            )
          })}

          {/* Center slot (empty — button overlays) */}
          <div className="bottom-nav-center-slot" />

          {/* Social → route */}
          <button
            className="bottom-nav-tab"
            onClick={() => navigate('/social')}
            aria-label="Open Social"
          >
            <Users size={22} strokeWidth={1.8} />
            <span className="bottom-nav-tab-label">Social</span>
          </button>

          {/* Duel tab */}
          {rightTabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                className={`bottom-nav-tab ${isActive ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={22} strokeWidth={isActive ? 2.4 : 1.8} />
                <span className="bottom-nav-tab-label">{tab.label}</span>
              </button>
            )
          })}

        </div>

        {/* Raised 4-dot center button → Dashboard */}
        <button
          className="bottom-nav-center"
          onClick={() => navigate('/dashboard')}
          aria-label="Open Dashboard"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="7" height="7" rx="2" />
            <rect x="14" y="3" width="7" height="7" rx="2" />
            <rect x="3" y="14" width="7" height="7" rx="2" />
            <rect x="14" y="14" width="7" height="7" rx="2" />
          </svg>
        </button>

      </div>
    </nav>
  )
}
