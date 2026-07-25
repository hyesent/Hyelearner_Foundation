// ============================================================
// HYELEARNER: HYETUTOR — WEEKLY MOMENTUM
// Study hours, average, best day, longest session, weekly heatmap
// Built by Hyesent.dev
// ============================================================

import { TrendingUp, Calendar, Clock, Flame, Award } from 'lucide-react'

export function WeeklyMomentum({ data }) {
  const { 
    hours = 18.4, 
    average = 2.6, 
    bestDay = 'Tuesday', 
    longestSession = '2h 13m',
    missedDays = 1,
    streak = 7,
    weeklyData = [
      { day: 'Monday', hours: 3.2 },
      { day: 'Tuesday', hours: 4.0 },
      { day: 'Wednesday', hours: 2.4 },
      { day: 'Thursday', hours: 1.8 },
      { day: 'Friday', hours: 2.4 },
      { day: 'Saturday', hours: 1.6 },
      { day: 'Sunday', hours: 1.6 }
    ]
  } = data || {}

  const maxHours = Math.max(...weeklyData.map(d => d.hours), 1)

  return (
    <div className="card" style={{ padding: 'var(--space-4)' }}>
      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
        <TrendingUp style={{ width: '18px', height: '18px', color: 'var(--color-primary)' }} />
        <span style={{ fontWeight: '600', fontSize: 'var(--font-size-base)' }}>Weekly Momentum</span>
        {streak > 0 && (
          <span className="badge badge-warning" style={{ fontSize: 'var(--font-size-xs)' }}>
            <Flame style={{ width: '12px', height: '12px', display: 'inline' }} /> {streak}-day streak
          </span>
        )}
      </div>

      {/* Stats Row */}
      <div className="grid-4" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
        <div className="stat-card text-center" style={{ padding: 'var(--space-2)' }}>
          <div className="h2" style={{ color: 'var(--color-primary)', margin: 0, fontSize: 'var(--font-size-xl)' }}>{hours}</div>
          <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Study Hours</div>
        </div>
        <div className="stat-card text-center" style={{ padding: 'var(--space-2)' }}>
          <div className="h2" style={{ color: 'var(--color-primary)', margin: 0, fontSize: 'var(--font-size-xl)' }}>{average}/day</div>
          <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Average</div>
        </div>
        <div className="stat-card text-center" style={{ padding: 'var(--space-2)' }}>
          <div className="h2" style={{ color: 'var(--color-success)', margin: 0, fontSize: 'var(--font-size-xl)' }}>{bestDay}</div>
          <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Best Day</div>
        </div>
        <div className="stat-card text-center" style={{ padding: 'var(--space-2)' }}>
          <div className="h2" style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: 'var(--font-size-xl)' }}>{missedDays}</div>
          <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Missed Days</div>
        </div>
      </div>

      {/* Weekly Heatmap */}
      <div style={{ marginBottom: 'var(--space-2)' }}>
        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
          Hours per day
        </div>
        {weeklyData.map((day, i) => {
          const percentage = (day.hours / maxHours) * 100
          const isToday = day.day === new Date().toLocaleDateString('en-US', { weekday: 'long' })
          
          return (
            <div key={i} className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-1)' }}>
              <span style={{ 
                fontSize: 'var(--font-size-xs)', 
                fontWeight: isToday ? '700' : '400',
                color: isToday ? 'var(--color-primary)' : 'var(--color-text-muted)',
                width: '36px'
              }}>
                {day.day.slice(0, 3)}
                {isToday && ' ⬅️'}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{
                  height: '24px',
                  background: `linear-gradient(90deg, var(--color-primary) ${percentage}%, var(--color-border) ${percentage}%)`,
                  borderRadius: 'var(--radius)',
                  position: 'relative',
                  transition: 'all var(--transition)',
                  overflow: 'hidden'
                }}>
                  <span style={{
                    position: 'absolute',
                    right: 'var(--space-2)',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: '500',
                    color: percentage > 50 ? 'white' : 'var(--color-text)',
                    transition: 'color var(--transition)'
                  }}>
                    {day.hours}h
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
        ⏱️ Longest Session: {longestSession}
      </div>
    </div>
  )
}