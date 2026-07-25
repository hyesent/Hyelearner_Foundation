// ============================================================
// HYELEARNER: SOCIAL — CHALLENGE CARD
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { Trophy, Users, Clock, Loader2, Check, Award } from 'lucide-react'
import { social } from '../../../services'

export function ChallengeCard() {
  const [challenges, setChallenges] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadChallenges()
  }, [])

  const loadChallenges = async () => {
    setLoading(true)
    try {
      const result = await social.getChallenges()
      setChallenges(result.data?.challenges || [])
    } catch (error) {
      console.error('Failed to load challenges:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAccept = async (challengeId) => {
    try {
      await social.acceptChallenge(challengeId)
      loadChallenges()
    } catch (error) {
      console.error('Failed to accept challenge:', error)
    }
  }

  if (loading) {
    return (
      <div className="flex-center" style={{ padding: 'var(--space-4)' }}>
        <Loader2 className="spinner" />
      </div>
    )
  }

  if (challenges.length === 0) {
    return (
      <div className="card text-center" style={{ padding: 'var(--space-4)' }}>
        <Trophy style={{ width: '32px', height: '32px', margin: '0 auto var(--space-2)', opacity: '0.3' }} />
        <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
          No active challenges
        </div>
      </div>
    )
  }

  return (
    <div className="stack" style={{ gap: 'var(--space-2)' }}>
      {challenges.map((challenge) => (
        <div key={challenge.id} className="card" style={{ padding: 'var(--space-3)', border: '1px solid var(--color-border)' }}>
          <div className="flex-between" style={{ alignItems: 'flex-start' }}>
            <div>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <Trophy style={{ width: '18px', height: '18px', color: 'var(--color-warning)' }} />
                <span style={{ fontWeight: '600', fontSize: 'var(--font-size-sm)' }}>
                  {challenge.type === 'streak' ? '🔥 Streak Challenge' : '📊 Accuracy Challenge'}
                </span>
                <span className={`badge ${challenge.status === 'active' ? 'badge-success' : 'badge-muted'}`}>
                  {challenge.status}
                </span>
              </div>
              <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
                <span><Users style={{ width: '12px', height: '12px', display: 'inline' }} /> {challenge.participants?.length || 0}</span>
                <span><Clock style={{ width: '12px', height: '12px', display: 'inline' }} /> {new Date(challenge.endsAt).toLocaleDateString()}</span>
              </div>
            </div>
            {!challenge.isParticipant && challenge.status === 'active' && (
              <button 
                className="btn btn-primary" 
                onClick={() => handleAccept(challenge.id)}
                style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
              >
                <Check style={{ width: '14px', height: '14px' }} /> Join
              </button>
            )}
            {challenge.isParticipant && (
              <span className="badge badge-success" style={{ fontSize: 'var(--font-size-xs)' }}>
                <Award style={{ width: '12px', height: '12px', display: 'inline' }} /> Joined
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}