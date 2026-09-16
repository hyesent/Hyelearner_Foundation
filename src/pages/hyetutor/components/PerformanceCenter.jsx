// ============================================================
// HYELEARNER: HYETUTOR — PERFORMANCE CENTER
// Key metrics: Exam Readiness, Confidence, Consistency, Focus, Burnout
// Built by Hyesent.dev
// ============================================================

import {
  BarChart3,
  TrendingUp,
  Award,
  Flame,
  Target,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react'

export function PerformanceCenter({ metrics }) {
  const m = metrics || {}

  const cards = [
    {
      key: 'exam_readiness',
      icon: Target,
      label: 'Exam Readiness',
      value: m.examReadiness ?? 0,
      color: 'var(--color-primary)',
      description: 'Based on daily tutor adherence and quiz average',
    },
    {
      key: 'confidence',
      icon: Award,
      label: 'Confidence',
      value: m.confidence ?? 0,
      color: 'var(--color-success)',
      description: 'Based on your recent reflections',
    },
    {
      key: 'consistency',
      icon: Flame,
      label: 'Consistency',
      value: m.consistency ?? 0,
      color: 'var(--color-warning)',
      description: 'How often you show up',
    },
    {
      key: 'focus',
      icon: TrendingUp,
      label: 'Focus Score',
      value: m.focus ?? 0,
      color: 'var(--color-secondary)',
      description: 'Average session quality',
    },
    {
      key: 'burnout',
      icon: AlertCircle,
      label: 'Burnout Risk',
      value: m.burnoutRisk || 'Low',
      color:
        (m.burnoutRisk || 'Low') === 'Low'
          ? 'var(--color-success)'
          : 'var(--color-danger)',
      isStatus: true,
      description:
        (m.burnoutRisk || 'Low') === 'Low'
          ? 'Study load is healthy'
          : 'Study load is high',
    },
  ]

  const hasAnyData = cards.some(
    (c) => !c.isStatus && typeof c.value === 'number' && c.value > 0
  )

  return (
    <div className="card" style={{ padding: 'var(--space-4)' }}>
      <div
        className="flex"
        style={{
          gap: 'var(--space-2)',
          alignItems: 'center',
          marginBottom: 'var(--space-4)',
        }}
      >
        <BarChart3 size={18} style={{ color: 'var(--color-primary)' }} />
        <span style={{ fontWeight: 600, fontSize: 'var(--font-size-base)' }}>
          Performance Center
        </span>
        <span
          className="badge badge-muted"
          style={{ fontSize: 'var(--font-size-xs)' }}
        >
          Live
        </span>
      </div>

      {!hasAnyData ? (
        <div
          className="text-center"
          style={{
            padding: 'var(--space-8) var(--space-4)',
            color: 'var(--color-text-muted)',
          }}
        >
          <Target
            size={32}
            style={{ margin: '0 auto var(--space-3)', opacity: 0.5 }}
          />
          <p
            style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 600,
              color: 'var(--color-text)',
            }}
          >
            No performance data yet
          </p>
          <p style={{ fontSize: 'var(--font-size-xs)', marginTop: 4 }}>
            Complete a Daily Tutor lesson to unlock these metrics.
          </p>
        </div>
      ) : (
        <div className="grid-5" style={{ gap: 'var(--space-3)' }}>
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.key}
                className="stat-card text-center"
                style={{ padding: 'var(--space-3)' }}
              >
                <div
                  className="flex-center"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: `${card.color}20`,
                    margin: '0 auto var(--space-2)',
                  }}
                >
                  <Icon size={20} style={{ color: card.color }} />
                </div>
                <div
                  className="h2"
                  style={{
                    color: card.color,
                    fontSize: 'var(--font-size-2xl)',
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--space-1)',
                  }}
                >
                  {card.isStatus ? (
                    <>
                      {card.value === 'Low' ? (
                        <CheckCircle2
                          size={20}
                          style={{ color: 'var(--color-success)' }}
                        />
                      ) : (
                        <AlertCircle
                          size={20}
                          style={{ color: 'var(--color-warning)' }}
                        />
                      )}
                      {card.value}
                    </>
                  ) : (
                    `${card.value}%`
                  )}
                </div>
                <div
                  className="text-muted"
                  style={{ fontSize: 'var(--font-size-xs)' }}
                >
                  {card.label}
                </div>
                {!card.isStatus && (
                  <div
                    className="progress"
                    style={{ marginTop: 'var(--space-1)', height: 4 }}
                  >
                    <div
                      className="progress-fill"
                      style={{
                        width: `${card.value}%`,
                        background: card.color,
                      }}
                    />
                  </div>
                )}
                <div
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-text-muted)',
                    marginTop: 'var(--space-1)',
                    opacity: 0.7,
                  }}
                >
                  {card.description}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
