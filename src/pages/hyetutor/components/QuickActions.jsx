// ============================================================
// HYELEARNER: HYETUTOR — QUICK ACTIONS
// Navigation buttons
// Built by Hyesent.dev
// ============================================================

import { useNavigate } from 'react-router-dom'
import { PenTool, BookOpen, Target, BookMarked, Flame } from 'lucide-react'

export function QuickActions() {
  const navigate = useNavigate()

  const actions = [
    { id: 'practice', icon: PenTool, label: 'Practice', route: '/practice', color: 'var(--color-primary)' },
    { id: 'lessons', icon: BookOpen, label: 'Lessons', route: '/lessons', color: 'var(--color-success)' },
    { id: 'topic-mode', icon: Target, label: 'Topic Mode', route: '/topic-mode', color: 'var(--color-secondary)' },
    { id: 'mistakes', icon: BookMarked, label: 'Mistake Book', route: '/mistake-book', color: 'var(--color-danger)' },
    { id: 'heatmap', icon: Flame, label: 'Heatmap', route: '/heatmap', color: 'var(--color-warning)' }
  ]

  return (
    <div className="card" style={{ padding: 'var(--space-3)' }}>
      <div className="flex" style={{ gap: 'var(--space-2)', justifyContent: 'center', flexWrap: 'wrap' }}>
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <button
              key={action.id}
              onClick={() => navigate(action.route)}
              className="btn btn-ghost"
              style={{
                fontSize: 'var(--font-size-sm)',
                padding: 'var(--space-2) var(--space-4)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border)',
                transition: 'all var(--transition)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)'
                e.currentTarget.style.background = 'var(--color-primary-light)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <Icon style={{ width: '18px', height: '18px', color: action.color }} />
              {action.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}