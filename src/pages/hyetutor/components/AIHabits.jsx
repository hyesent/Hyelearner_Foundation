// ============================================================
// HYELEARNER: HYETUTOR — AI HABITS
// Pattern insights from AI
// Built by Hyesent.dev
// ============================================================

import { Brain, Clock, TrendingUp, Lightbulb, Sparkles } from 'lucide-react'

export function AIHabits({ habits = [] }) {
  if (!habits || habits.length === 0) {
    return (
      <div className="card" style={{ padding: 'var(--space-4)', background: 'var(--color-primary-light)', border: '1px solid var(--color-primary)', opacity: 0.7 }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
          <Brain style={{ width: '18px', height: '18px', color: 'var(--color-primary)' }} />
          <span style={{ fontWeight: '600', fontSize: 'var(--font-size-base)' }}>Study Pattern Insights</span>
        </div>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
          Complete more study sessions to unlock AI-detected patterns.
        </p>
      </div>
    )
  }

  const icons = {
    clock: Clock,
    trending: TrendingUp,
    lightbulb: Lightbulb
  }

  return (
    <div className="card" style={{ padding: 'var(--space-4)', background: 'var(--color-primary-light)', border: '1px solid var(--color-primary)' }}>
      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
        <Brain style={{ width: '18px', height: '18px', color: 'var(--color-primary)' }} />
        <span style={{ fontWeight: '600', fontSize: 'var(--font-size-base)' }}>Study Pattern Insights</span>
        <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>
          <Sparkles style={{ width: '12px', height: '12px', display: 'inline' }} /> AI Detected
        </span>
      </div>
      
      <div className="stack" style={{ gap: 'var(--space-2)' }}>
        {habits.map((habit, i) => {
          const Icon = icons[habit.icon] || Lightbulb
          return (
            <div key={i} className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
              <div className="flex-center" style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'var(--color-surface)',
                flexShrink: 0,
                marginTop: '2px'
              }}>
                <Icon style={{ width: '14px', height: '14px', color: 'var(--color-primary)' }} />
              </div>
              <div>
                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                  {habit.text}
                </div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                  {habit.detail}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      
      <div style={{ 
        marginTop: 'var(--space-3)',
        padding: 'var(--space-2) var(--space-3)',
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius)',
        fontSize: 'var(--font-size-sm)',
        color: 'var(--color-text-secondary)'
      }}>
        💡 I'll adjust future recommendations based on these patterns.
      </div>
    </div>
  )
}