// ============================================================
// HYELEARNER: SOCIAL — USER SEARCH
// Built by Hyesent.dev
// ============================================================

import { useState } from 'react'
import { Search, UserPlus, UserCheck, X, Loader2 } from 'lucide-react'
import { social } from '../../../services'

export function UserSearch({ onFriendAdded }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async () => {
    if (!query.trim()) return
    setLoading(true)
    setError(null)
    try {
      const result = await social.searchUsers(query)
      setResults(result.data?.users || [])
    } catch (err) {
      setError(err.message || 'Search failed')
    } finally {
      setLoading(false)
    }
  }

  const handleSendRequest = async (userId) => {
    try {
      await social.sendFriendRequest(userId)
      setResults(prev => prev.map(u => 
        u.id === userId ? { ...u, friendRequestSent: true } : u
      ))
      if (onFriendAdded) onFriendAdded()
    } catch (err) {
      console.error('Failed to send request:', err)
    }
  }

  return (
    <div>
      <div className="flex" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
        <input
          type="text"
          className="input"
          placeholder="Search by username, name, or school..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          style={{ flex: 1 }}
        />
        <button className="btn btn-primary" onClick={handleSearch} disabled={loading}>
          {loading ? <Loader2 className="spinner" style={{ width: '18px', height: '18px' }} /> : <Search style={{ width: '18px', height: '18px' }} />}
        </button>
      </div>

      {error && (
        <div className="danger-card" style={{ marginBottom: 'var(--space-2)' }}>
          <span>{error}</span>
        </div>
      )}

      {results.length > 0 && (
        <div className="card" style={{ padding: 'var(--space-3)' }}>
          <div style={{ fontWeight: '600', marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-sm)' }}>
            Results ({results.length})
          </div>
          {results.map((user) => (
            <div key={user.id} className="flex-between" style={{
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--color-border)',
              marginBottom: 'var(--space-1)'
            }}>
              <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                <div className="flex-center" style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--color-primary-light)',
                  fontWeight: '700',
                  color: 'var(--color-primary)'
                }}>
                  {user.username?.[0]?.toUpperCase() || '?'}
                </div>
                <div>
                  <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500' }}>{user.username}</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    {user.school || 'No school'} • {user.exam || 'JAMB'}
                    {user.isOnline && <span style={{ color: 'var(--color-success)', marginLeft: 'var(--space-2)' }}>● Online</span>}
                  </div>
                </div>
              </div>
              {user.isFriend ? (
                <span className="badge badge-success" style={{ fontSize: 'var(--font-size-xs)' }}>
                  <UserCheck style={{ width: '12px', height: '12px', display: 'inline' }} /> Friends
                </span>
              ) : user.friendRequestSent ? (
                <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Pending</span>
              ) : (
                <button 
                  onClick={() => handleSendRequest(user.id)}
                  className="btn btn-primary"
                  style={{ padding: 'var(--space-1) var(--space-3)', fontSize: 'var(--font-size-xs)' }}
                >
                  <UserPlus style={{ width: '14px', height: '14px' }} /> Add
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}