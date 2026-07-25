// ============================================================
// HYELEARNER: SOCIAL — FRIEND LIST
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Users, UserMinus, MessageCircle, Swords, Check, X, Bell,
  Loader2, UserPlus, Search
} from 'lucide-react'
import { social } from '../../../services'
import { UserSearch } from './UserSearch'

export function FriendList() {
  const navigate = useNavigate()
  const [friends, setFriends] = useState([])
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    try {
      const [friendsData, requestsData] = await Promise.all([
        social.getFriends(),
        social.getFriendRequests()
      ])
      setFriends(friendsData.data?.friends || [])
      setRequests(requestsData.data?.requests || [])
    } catch (error) {
      console.error('Failed to load friends:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAcceptRequest = async (requestId) => {
    try {
      await social.acceptFriendRequest(requestId)
      loadData()
    } catch (error) {
      console.error('Failed to accept request:', error)
    }
  }

  const handleRejectRequest = async (requestId) => {
    try {
      await social.rejectFriendRequest(requestId)
      loadData()
    } catch (error) {
      console.error('Failed to reject request:', error)
    }
  }

  const handleRemoveFriend = async (friendId) => {
    if (!confirm('Remove this friend?')) return
    try {
      await social.removeFriend(friendId)
      loadData()
    } catch (error) {
      console.error('Failed to remove friend:', error)
    }
  }

  const handleMessage = (friend) => {
    navigate('/social/chat', { state: { friendId: friend.id, friendName: friend.username } })
  }

  const handleInviteDuel = (friend) => {
    navigate('/duel', { state: { opponent: friend.id, opponentName: friend.username } })
  }

  if (loading) {
    return (
      <div className="flex-center" style={{ padding: 'var(--space-6)' }}>
        <Loader2 className="spinner" />
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <Users style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
          <span style={{ fontWeight: '600', fontSize: 'var(--font-size-base)' }}>Friends</span>
          <span className="badge badge-muted">{friends.length}</span>
        </div>
        <button 
          className="btn btn-ghost" 
          onClick={() => setShowSearch(!showSearch)}
          style={{ fontSize: 'var(--font-size-sm)' }}
        >
          {showSearch ? <X style={{ width: '16px', height: '16px' }} /> : <UserPlus style={{ width: '16px', height: '16px' }} />}
          {showSearch ? 'Close' : 'Add Friend'}
        </button>
      </div>

      {/* Search */}
      {showSearch && (
        <div style={{ marginBottom: 'var(--space-4)' }}>
          <UserSearch onFriendAdded={loadData} />
        </div>
      )}

      {/* Friend Requests */}
      {requests.length > 0 && (
        <div className="card" style={{ 
          marginBottom: 'var(--space-4)', 
          padding: 'var(--space-3)',
          background: 'var(--color-primary-light)'
        }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
            <Bell style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: '600', fontSize: 'var(--font-size-sm)' }}>Friend Requests ({requests.length})</span>
          </div>
          {requests.map((req) => (
            <div key={req.id} className="flex-between" style={{
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius)',
              background: 'var(--color-surface)',
              marginBottom: 'var(--space-1)'
            }}>
              <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                <div className="flex-center" style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--color-primary-light)',
                  fontWeight: '700',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-primary)'
                }}>
                  {req.fromUser?.username?.[0]?.toUpperCase() || '?'}
                </div>
                <span style={{ fontSize: 'var(--font-size-sm)' }}>{req.fromUser?.username || 'Unknown'}</span>
              </div>
              <div className="flex" style={{ gap: 'var(--space-2)' }}>
                <button onClick={() => handleAcceptRequest(req.id)} className="btn btn-success" style={{ padding: 'var(--space-1) var(--space-2)' }}>
                  <Check style={{ width: '16px', height: '16px' }} />
                </button>
                <button onClick={() => handleRejectRequest(req.id)} className="btn btn-danger" style={{ padding: 'var(--space-1) var(--space-2)' }}>
                  <X style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Friend List */}
      {friends.length === 0 ? (
        <div className="card text-center" style={{ padding: 'var(--space-6)' }}>
          <Users style={{ width: '40px', height: '40px', margin: '0 auto var(--space-3)', opacity: '0.3' }} />
          <div style={{ fontWeight: '500' }}>No friends yet</div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            Search and add friends to connect
          </div>
        </div>
      ) : (
        <div className="stack" style={{ gap: 'var(--space-2)' }}>
          {friends.map((friend) => (
            <div key={friend.id} className="card" style={{ 
              padding: 'var(--space-3)', 
              border: '1px solid var(--color-border)'
            }}>
              <div className="flex-between" style={{ alignItems: 'center' }}>
                <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                  <div className="flex-center" style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--color-primary-light)',
                    fontWeight: '700',
                    color: 'var(--color-primary)',
                    position: 'relative'
                  }}>
                    {friend.username?.[0]?.toUpperCase() || '?'}
                    {friend.isOnline && (
                      <div style={{
                        position: 'absolute',
                        bottom: '2px',
                        right: '2px',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: 'var(--color-success)',
                        border: '2px solid var(--color-surface)'
                      }} />
                    )}
                  </div>
                  <div>
                    <div style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)' }}>
                      {friend.username}
                      {friend.isOnline && <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-success)', marginLeft: 'var(--space-2)' }}>● Online</span>}
                    </div>
                    <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                      <span>🔥 {friend.streak || 0}d</span>
                      <span>⭐ {friend.xp || 0} XP</span>
                      <span>🏅 Lv.{friend.level || 1}</span>
                      <span>📊 {friend.accuracy || 0}%</span>
                    </div>
                  </div>
                </div>
                <div className="flex" style={{ gap: 'var(--space-2)' }}>
                  <button 
                    onClick={() => handleMessage(friend)}
                    className="btn btn-ghost"
                    style={{ padding: 'var(--space-1) var(--space-2)' }}
                    title="Message"
                  >
                    <MessageCircle style={{ width: '18px', height: '18px', color: 'var(--color-primary)' }} />
                  </button>
                  <button 
                    onClick={() => handleInviteDuel(friend)}
                    className="btn btn-primary"
                    style={{ padding: 'var(--space-1) var(--space-3)', fontSize: 'var(--font-size-xs)' }}
                  >
                    <Swords style={{ width: '14px', height: '14px' }} /> Duel
                  </button>
                  <button 
                    onClick={() => handleRemoveFriend(friend.id)}
                    className="btn btn-ghost"
                    style={{ padding: 'var(--space-1) var(--space-2)', color: 'var(--color-danger)' }}
                  >
                    <UserMinus style={{ width: '16px', height: '16px' }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}