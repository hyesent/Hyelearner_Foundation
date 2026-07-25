// ============================================================
// HYELEARNER: HYETUTOR — PERFORMANCE CENTER
// Key metrics: Exam Readiness, Confidence, Consistency, Focus, Burnout
// Built by Hyesent.dev
// ============================================================

import { BarChart3, TrendingUp, Award, Flame, Target, AlertCircle, CheckCircle2 } from 'lucide-react'

export function PerformanceCenter({ metrics }) {
  const cards = [
    { 
      key: 'exam_readiness', 
      icon: Target, 
      label: 'Exam Readiness', 
      value: metrics.examReadiness || 89,
      color: 'var(--color-primary)',
      description: 'Based on mock exams and topic mastery'
    },
    { 
      key: 'confidence', 
      icon: Award, 
      label: 'Confidence', 
      value: metrics.confidence || 91,
      color: 'var(--color-success)',
      description: 'Based on recent performance'
    },
    { 
      key: 'consistency', 
      icon: Flame, 
      label: 'Consistency', 
      value: metrics.consistency || 87,
      color: 'var(--color-warning)',
      description: 'Study regularity over 30 days'
    },
    { 
      key: 'focus', 
      icon: TrendingUp, 
      label: 'Focus Score', 
      value: metrics.focus || 84,
      color: 'var(--color-secondary)',
      description: 'Average session length & quality'
    },
    { 
      key: 'burnout', 
      icon: AlertCircle, 
      label: 'Burnout Risk', 
      value: metrics.burnoutRisk || 'Low',
      color: metrics.burnoutRisk === 'Low' ? 'var(--color-success)' : 'var(--color-danger)',
      isStatus: true,
      description: metrics.burnoutRisk === 'Low' ? 'Study load is healthy' : 'Study load is high'
    }
  ]

  return (
    <div className="card" style={{ padding: 'var(--space-4)' }}>
      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
        <BarChart3 style={{ width: '18px', height: '18px', color: 'var(--color-primary)' }} />
        <span style={{ fontWeight: '600', fontSize: 'var(--font-size-base)' }}>Performance Center</span>
        <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
          Live
        </span>
      </div>
      <div className="grid-5" style={{ gap: 'var(--space-3)' }}>
        {cards.map((card) => {
          const Icon = card.icon
          const isPercentage = typeof card.value === 'number'
          
          return (
            <div key={card.key} className="stat-card text-center" style={{ padding: 'var(--space-3)' }}>
              <div className="flex-center" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: `${card.color}20`,
                margin: '0 auto var(--space-2)'
              }}>
                <Icon style={{ width: '20px', height: '20px', color: card.color }} />
              </div>
              <div className="h2" style={{ 
                color: card.color,
                fontSize: 'var(--font-size-2xl)',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-1)'
              }}>
                {card.isStatus ? (
                  <>
                    {card.value === 'Low' ? (
                      <CheckCircle2 style={{ width: '20px', height: '20px', color: 'var(--color-success)' }} />
                    ) : (
                      <AlertCircle style={{ width: '20px', height: '20px', color: 'var(--color-warning)' }} />
                    )}
                    {card.value}
                  </>
                ) : (
                  `${card.value}%`
                )}
              </div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>{card.label}</div>
              {!card.isStatus && (
                <div className="progress" style={{ marginTop: 'var(--space-1)', height: '4px' }}>
                  <div 
                    className="progress-fill" 
                    style={{ 
                      width: `${card.value}%`,
                      background: card.color
                    }} 
                  />
                </div>
              )}
              <div style={{ 
                fontSize: 'var(--font-size-xxs)', 
                color: 'var(--color-text-muted)',
                marginTop: 'var(--space-1)',
                opacity: 0.7
              }}>
                {card.description}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}