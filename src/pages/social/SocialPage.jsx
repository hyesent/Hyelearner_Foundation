// ============================================================
// HYELEARNER: SOCIAL PAGE — Complete Social Hub
// Built by Hyesent.dev
// ============================================================

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Users, 
  MessageCircle, 
  Swords, 
  Shield, 
  Trophy, 
  ArrowLeft,
  Activity,
  Sparkles
} from 'lucide-react'
import { FriendList } from './components/FriendList'
import { ChatWindow } from './components/ChatWindow'
import { DuelInvite } from './components/DuelInvite'
import { GroupsList } from './components/GroupsList'
import { ActivityFeed } from './components/ActivityFeed'
import { ChallengeCard } from './components/ChallengeCard'
import { useAuth } from '../../hooks'

export default function SocialPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('friends')
  const [selectedFriend, setSelectedFriend] = useState(null)

  const tabs = [
    { id: 'friends', label: 'Friends', icon: Users },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'duels', label: 'Duels', icon: Swords },
    { id: 'groups', label: 'Groups', icon: Shield },
    { id: 'activity', label: 'Activity', icon: Activity },
    { id: 'challenges', label: 'Challenges', icon: Trophy },
  ]

  const renderContent = () => {
    if (selectedFriend && activeTab === 'messages') {
      return (
        <ChatWindow 
          friend={selectedFriend} 
          onBack={() => setSelectedFriend(null)} 
        />
      )
    }

    switch (activeTab) {
      case 'friends':
        return <FriendList />
      case 'messages':
        return <div className="card" style={{ padding: 'var(--space-4)', minHeight: '400px' }}>
          <div className="flex-center" style={{ flex: 1, color: 'var(--color-text-muted)', flexDirection: 'column', gap: 'var(--space-3)', padding: 'var(--space-6)' }}>
            <MessageCircle style={{ width: '48px', height: '48px', opacity: '0.3' }} />
            <div>Select a friend from the Friends tab to start messaging</div>
          </div>
        </div>
      case 'duels':
        return <DuelInvite />
      case 'groups':
        return <GroupsList />
      case 'activity':
        return <ActivityFeed />
      case 'challenges':
        return <ChallengeCard />
      default:
        return null
    }
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* Header */}
        <div className="flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
            <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
              <ArrowLeft style={{ width: '20px', height: '20px' }} />
            </button>
            <div>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <Users style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
                <h1 className="h2" style={{ margin: 0 }}>Social Hub</h1>
                <Sparkles style={{ width: '16px', height: '16px', color: 'var(--color-warning)' }} />
              </div>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                Connect, compete, and learn together
              </p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
              Beta
            </span>
            <button className="btn btn-ghost" onClick={() => navigate('/settings')}>
              <Users style={{ width: '18px', height: '18px' }} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex" style={{ 
          gap: 'var(--space-1)', 
          marginBottom: 'var(--space-6)', 
          borderBottom: '1px solid var(--color-border)',
          overflowX: 'auto'
        }}>
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  setSelectedFriend(null)
                }}
                className="flex"
                style={{
                  padding: 'var(--space-2) var(--space-4)',
                  borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                  background: 'transparent',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  cursor: 'pointer',
                  gap: 'var(--space-2)',
                  alignItems: 'center',
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
                  fontWeight: isActive ? '600' : '400',
                  transition: 'all var(--transition)',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon style={{ width: '18px', height: '18px' }} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div>
          {renderContent()}
        </div>
      </div>
    </div>
  )
}