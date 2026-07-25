// ============================================================
// HYELEARNER: HYETUTOR — MISSION HERO
// Today's missions with priorities, reasons, and XP
// Built by Hyesent.dev
// ============================================================

import { useState } from 'react'
import { Clock, Target, CheckCircle2, Award, AlertCircle, Zap, Check, ChevronRight } from 'lucide-react'

export function MissionHero({ 
  missions = [], 
  timeBudget = { total: 2.75, completed: 1.33, remaining: 1.42 },
  xpReward = 120,
  weeklyGoal = { total: 24, completed: 18, percentage: 75 },
  nextSession = null,
  onMissionToggle = null,
  onStartSession = null
}) {
  const completed = missions.filter(m => m.completed).length
  const total = missions.length
  const progress = total > 0 ? (completed / total) * 100 : 0

  const getPriorityColor = (p) => {
    if (p === 'critical') return 'var(--color-danger)'
    if (p === 'high') return 'var(--color-warning)'
    if (p === 'medium') return 'var(--color-primary)'
    return 'var(--color-success)'
  }

  const getPriorityLabel = (p) => {
    if (p === 'critical') return 'CRITICAL'
    if (p === 'high') return 'HIGH'
    if (p === 'medium') return 'MEDIUM'
    return 'LOW'
  }

  return (
    <div className="card" style={{ 
      padding: 'var(--space-6)',
      background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-surface) 100%)',
      border: '2px solid var(--color-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-60px',
        right: '-60px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'var(--color-primary)',
        opacity: '0.05'
      }} />
      
      {/* Header */}
      <div className="flex-between" style={{ marginBottom: 'var(--space-4)', position: 'relative', zIndex: 1 }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <Target style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
          <span style={{ fontWeight: '700', fontSize: 'var(--font-size-lg)', color: 'var(--color-text)' }}>
            Today's Mission
          </span>
          <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>
            {completed}/{total} done
          </span>
          {progress > 0 && (
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
              • {Math.round(progress)}%
            </span>
          )}
        </div>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <Award style={{ width: '18px', height: '18px', color: 'var(--color-warning)' }} />
          <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-warning)' }}>
            +{xpReward} XP
          </span>
        </div>
      </div>

      {/* Next Session Card */}
      {nextSession && (
        <div 
          className="card" 
          style={{ 
            padding: 'var(--space-3) var(--space-4)',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-primary)',
            marginBottom: 'var(--space-4)',
            cursor: 'pointer',
            transition: 'all var(--transition)',
            position: 'relative',
            zIndex: 1
          }}
          onClick={() => onStartSession && onStartSession(nextSession)}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-primary)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(79, 70, 229, 0.15)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-primary)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <div className="flex-between" style={{ alignItems: 'center' }}>
            <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
              <div className="flex-center" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--color-primary-light)',
                color: 'var(--color-primary)'
              }}>
                <Clock style={{ width: '20px', height: '20px' }} />
              </div>
              <div>
                <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-text)' }}>
                  ▶ Next Session: {nextSession.time || '7:00 PM'}
                </div>
                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                  {nextSession.subject || 'Mathematics'} — {nextSession.topic || 'Quadratic Equations'} • {nextSession.duration || 45} mins • {nextSession.difficulty || 'Medium'}
                </div>
                {nextSession.reason && (
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                    💡 {nextSession.reason}
                  </div>
                )}
              </div>
            </div>
            <ChevronRight style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
          </div>
        </div>
      )}

      {/* Tasks */}
      <div className="stack" style={{ gap: 'var(--space-2)', position: 'relative', zIndex: 1 }}>
        {missions.map((mission, i) => (
          <div 
            key={i}
            className="card"
            style={{
              padding: 'var(--space-3) var(--space-4)',
              background: mission.completed ? 'var(--color-success-light)' : 'var(--color-surface)',
              border: `2px solid ${mission.completed ? 'var(--color-success)' : getPriorityColor(mission.priority)}`,
              opacity: mission.completed ? 0.8 : 1,
              cursor: mission.completed ? 'default' : 'pointer',
              transition: 'all var(--transition)',
              position: 'relative'
            }}
            onClick={() => {
              if (!mission.completed && onMissionToggle) {
                onMissionToggle(mission.id)
              }
            }}
          >
            <div className="flex-between" style={{ alignItems: 'flex-start' }}>
              <div className="flex" style={{ gap: 'var(--space-3)', flex: 1 }}>
                <button
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: 'var(--radius)',
                    border: `2px solid ${mission.completed ? 'var(--color-success)' : 'var(--color-border)'}`,
                    background: mission.completed ? 'var(--color-success)' : 'transparent',
                    color: mission.completed ? 'white' : 'transparent',
                    cursor: mission.completed ? 'default' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  {mission.completed && <CheckCircle2 style={{ width: '14px', height: '14px' }} />}
                </button>
                <div>
                  <div style={{
                    fontWeight: mission.completed ? '400' : '600',
                    textDecoration: mission.completed ? 'line-through' : 'none',
                    color: mission.completed ? 'var(--color-text-muted)' : 'var(--color-text)',
                    fontSize: 'var(--font-size-sm)'
                  }}>
                    {mission.text}
                  </div>
                  <div style={{ 
                    fontSize: 'var(--font-size-xs)', 
                    color: 'var(--color-text-muted)', 
                    marginTop: 'var(--space-1)'
                  }}>
                    💡 {mission.reason}
                  </div>
                </div>
              </div>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', flexShrink: 0 }}>
                <div className="flex" style={{ 
                  gap: 'var(--space-1)', 
                  alignItems: 'center',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)',
                  background: `${getPriorityColor(mission.priority)}15`
                }}>
                  {mission.priority === 'critical' || mission.priority === 'high' ? (
                    <AlertCircle style={{ width: '14px', height: '14px', color: getPriorityColor(mission.priority) }} />
                  ) : mission.priority === 'medium' ? (
                    <Zap style={{ width: '14px', height: '14px', color: getPriorityColor(mission.priority) }} />
                  ) : (
                    <Check style={{ width: '14px', height: '14px', color: getPriorityColor(mission.priority) }} />
                  )}
                  <span style={{
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: '700',
                    color: getPriorityColor(mission.priority)
                  }}>
                    {getPriorityLabel(mission.priority)}
                  </span>
                </div>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                  {mission.estimatedTime || 30}m
                </span>
                {mission.completed && (
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-success)' }}>
                    ✅
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer: Time Budget + Weekly Goal */}
      <div className="flex-between" style={{ 
        marginTop: 'var(--space-4)',
        paddingTop: 'var(--space-3)',
        borderTop: '1px solid var(--color-border)',
        position: 'relative',
        zIndex: 1,
        flexWrap: 'wrap',
        gap: 'var(--space-2)'
      }}>
        <div className="flex" style={{ gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <Clock style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
              <strong>{timeBudget.completed}h</strong> / {timeBudget.total}h done
            </span>
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              ({timeBudget.remaining}h left)
            </span>
          </div>
        </div>
        <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            Weekly Goal: {weeklyGoal.completed}/{weeklyGoal.total}h
          </div>
          <div className="progress" style={{ width: '80px', height: '6px' }}>
            <div 
              className="progress-fill progress-fill-primary" 
              style={{ width: `${weeklyGoal.percentage}%` }} 
            />
          </div>
          <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-primary)' }}>
            {weeklyGoal.percentage}%
          </span>
        </div>
      </div>
    </div>
  )
}