// ============================================================
// HYELEARNER: SOCIAL — DUEL INVITE
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Swords, Check, X, Loader2, Clock, Users } from 'lucide-react'
import { social } from '../../../services'

export function DuelInvite() {
  const navigate = useNavigate()
  const [invites, setInvites] = useState([])
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(null)

  useEffect(() => {
    loadInvites()
  }, [])

  const loadInvites = async () => {
    setLoading(true)
    try {
      const result = await social.getDuelInvites()
      setInvites(result.data?.invites || [])
    } catch (error) {
      console.error('Failed to load duel invites:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleRespond = async (inviteId, accept) => {
    setProcessing(inviteId)
    try {
      const result = await social.respondDuelInvite(inviteId, accept)
      if (accept && result.data?.duelId) {
        navigate(`/duel/${result.data.duelId}`)
      } else {
        loadInvites()
      }
    } catch (error) {
      console.error('Failed to respond:', error)
    } finally {
      setProcessing(null)
    }
  }

  if (loading) {
    return (
      <div className="flex-center" style={{ padding: 'var(--space-6)' }}>
        <Loader2 className="spinner" />
      </div>
    )
  }

  if (invites.length === 0) {
    return (
      <div className="card text-center" style={{ padding: 'var(--space-6)' }}>
        <Swords style={{ width: '40px', height: '40px', margin: '0 auto var(--space-3)', opacity: '0.3' }} />
        <div style={{ fontWeight: '500' }}>No duel invites</div>
        <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
          Challenge a friend to a duel!
        </div>
      </div>
    )
  }

  return (
    <div className="stack" style={{ gap: 'var(--space-2)' }}>
      {invites.map((invite) => (
        <div key={invite.id} className="card" style={{ padding: 'var(--space-3)', border: '1px solid var(--color-primary)' }}>
          <div className="flex-between" style={{ alignItems: 'flex-start' }}>
            <div>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <Swords style={{ width: '18px', height: '18px', color: 'var(--color-warning)' }} />
                <span style={{ fontWeight: '600' }}>
                  {invite.fromUser?.username} challenged you!
                </span>
              </div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
                {invite.subject} {invite.topic && `• ${invite.topic}`}
              </div>
              <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
                <span>{invite.questionCount || 10} questions</span>
                <span>⏱️ {invite.timeLimit || 300}s</span>
                <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
                  <Clock style={{ width: '12px', height: '12px' }} />
                  {new Date(invite.invitedAt).toLocaleTimeString()}
                </span>
              </div>
            </div>
            <div className="flex" style={{ gap: 'var(--space-2)' }}>
              <button 
                onClick={() => handleRespond(invite.id, true)}
                disabled={processing === invite.id}
                className="btn btn-success"
                style={{ padding: 'var(--space-1) var(--space-3)', fontSize: 'var(--font-size-sm)' }}
              >
                {processing === invite.id ? <Loader2 className="spinner" style={{ width: '16px', height: '16px' }} /> : <Check style={{ width: '16px', height: '16px' }} />}
                Accept
              </button>
              <button 
                onClick={() => handleRespond(invite.id, false)}
                disabled={processing === invite.id}
                className="btn btn-danger"
                style={{ padding: 'var(--space-1) var(--space-3)', fontSize: 'var(--font-size-sm)' }}
              >
                <X style={{ width: '16px', height: '16px' }} />
              </button>
            </div>
          </div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
            Expires: {new Date(invite.expiresAt).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  )
}