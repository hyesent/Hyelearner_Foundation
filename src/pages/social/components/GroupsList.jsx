// ============================================================
// HYELEARNER: SOCIAL — GROUPS LIST
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield, Plus, Users, X, Loader2, Check } from 'lucide-react'
import { social } from '../../../services'

export function GroupsList() {
  const navigate = useNavigate()
  const [groups, setGroups] = useState([])
  const [loading, setLoading] = useState(true)
  const [showCreate, setShowCreate] = useState(false)
  const [formData, setFormData] = useState({ name: '', description: '', subject: 'All' })
  const [creating, setCreating] = useState(false)

  useEffect(() => {
    loadGroups()
  }, [])

  const loadGroups = async () => {
    setLoading(true)
    try {
      const result = await social.getGroups()
      setGroups(result.data?.groups || [])
    } catch (error) {
      console.error('Failed to load groups:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = async () => {
    if (!formData.name.trim()) return
    setCreating(true)
    try {
      await social.createGroup(formData.name, formData.description, formData.subject)
      setShowCreate(false)
      setFormData({ name: '', description: '', subject: 'All' })
      loadGroups()
    } catch (error) {
      console.error('Failed to create group:', error)
    } finally {
      setCreating(false)
    }
  }

  const handleJoin = async (groupId) => {
    try {
      await social.joinGroup(groupId)
      loadGroups()
    } catch (error) {
      console.error('Failed to join group:', error)
    }
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
      <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <Shield style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
          <span style={{ fontWeight: '600', fontSize: 'var(--font-size-base)' }}>Study Groups</span>
          <span className="badge badge-muted">{groups.length}</span>
        </div>
        <button 
          className="btn btn-primary" 
          onClick={() => setShowCreate(true)}
          style={{ fontSize: 'var(--font-size-sm)' }}
        >
          <Plus style={{ width: '16px', height: '16px' }} /> Create
        </button>
      </div>

      {groups.length === 0 ? (
        <div className="card text-center" style={{ padding: 'var(--space-6)' }}>
          <Shield style={{ width: '40px', height: '40px', margin: '0 auto var(--space-3)', opacity: '0.3' }} />
          <div style={{ fontWeight: '500' }}>No groups yet</div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            Create a group or join an existing one
          </div>
        </div>
      ) : (
        <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
          {groups.map((group) => (
            <div key={group.id} className="card" style={{ padding: 'var(--space-4)' }}>
              <div className="flex-between" style={{ alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontWeight: '600' }}>{group.name}</div>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                    {group.description || 'Study group'}
                  </div>
                  <div className="flex" style={{ gap: 'var(--space-2)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
                    <span><Users style={{ width: '12px', height: '12px', display: 'inline' }} /> {group.memberCount || 0}</span>
                    <span>📚 {group.subject || 'All subjects'}</span>
                  </div>
                </div>
                {group.isMember ? (
                  <button 
                    className="btn btn-outline" 
                    onClick={() => navigate(`/groups/${group.id}`)}
                    style={{ fontSize: 'var(--font-size-sm)' }}
                  >
                    View
                  </button>
                ) : (
                  <button 
                    className="btn btn-primary" 
                    onClick={() => handleJoin(group.id)}
                    style={{ fontSize: 'var(--font-size-sm)' }}
                  >
                    Join
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Modal */}
      {showCreate && (
        <div className="modal-overlay" style={{ zIndex: 100 }}>
          <div className="modal" style={{ maxWidth: '420px', padding: 'var(--space-6)' }}>
            <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
              <span style={{ fontWeight: '700' }}>Create Study Group</span>
              <button onClick={() => setShowCreate(false)} className="btn btn-ghost">
                <X style={{ width: '20px', height: '20px' }} />
              </button>
            </div>
            <div className="stack" style={{ gap: 'var(--space-3)' }}>
              <input
                type="text"
                className="input"
                placeholder="Group Name *"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
              <input
                type="text"
                className="input"
                placeholder="Description (optional)"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              />
              <input
                type="text"
                className="input"
                placeholder="Subject (optional)"
                value={formData.subject}
                onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
              />
              <button 
                className="btn btn-primary" 
                onClick={handleCreate}
                disabled={!formData.name.trim() || creating}
              >
                {creating ? <Loader2 className="spinner" style={{ width: '18px', height: '18px' }} /> : <Check style={{ width: '18px', height: '18px' }} />}
                {creating ? 'Creating...' : 'Create Group'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}