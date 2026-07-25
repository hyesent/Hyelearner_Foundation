// ============================================================
// HYELEARNER: SOCIAL — ACTIVITY FEED
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { Activity, Loader2, Flame, Trophy, Star, Users } from 'lucide-react'
import { social } from '../../../services'

export function ActivityFeed() {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadActivity()
  }, [])

  const loadActivity = async () => {
    setLoading(true)
    try {
      const result = await social.getFriendActivity()
      setActivities(result.data?.activities || [])
    } catch (error) {
      console.error('Failed to load activity:', error)
    } finally {
      setLoading(false)
    }
  }

  const getIcon = (type) => {
    switch (type) {
      case 'session': return <Activity style={{ width: '14px', height: '14px', color: 'var(--color-primary)' }} />
      case 'streak': return <Flame style={{ width: '14px', height: '14px', color: 'var(--color-warning)' }} />
      case 'level_up': return <Trophy style={{ width: '14px', height: '14px', color: 'var(--color-success)' }} />
      case 'badge': return <Star style={{ width: '14px', height: '14px', color: 'var(--color-warning)' }} />
      default: return <Users style={{ width: '14px', height: '14px', color: 'var(--color-text-muted)' }} />
    }
  }

  if (loading) {
    return (
      <div className="flex-center" style={{ padding: 'var(--space-4)' }}>
        <Loader2 className="spinner" />
      </div>
    )
  }

  if (activities.length === 0) {
    return (
      <div className="card text-center" style={{ padding: 'var(--space-4)' }}>
        <Activity style={{ width: '32px', height: '32px', margin: '0 auto var(--space-2)', opacity: '0.3' }} />
        <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
          No activity from friends yet
        </div>
      </div>
    )
  }

  return (
    <div className="stack" style={{ gap: 'var(--space-2)' }}>
      {activities.map((activity) => (
        <div key={activity.id} className="flex" style={{ 
          gap: 'var(--space-3)', 
          padding: 'var(--space-2) var(--space-3)',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--color-border)',
          alignItems: 'center'
        }}>
          <div className="flex-center" style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'var(--color-primary-light)'
          }}>
            {getIcon(activity.type)}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 'var(--font-size-sm)' }}>
              <strong>{activity.friend?.username}</strong> {activity.message}
            </div>
            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
              {new Date(activity.createdAt).toLocaleString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}