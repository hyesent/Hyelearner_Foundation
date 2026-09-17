// ============================================================
// HYELEARNER: SOCIAL HUB (SHOWCASE / PREVIEW)
// Single-file replica. Friends, Messages, Duels, Groups,
// Activity, Challenges — all inlined with static mock data.
// Built by Hyesent.dev
// ============================================================

import { useState, useRef, useEffect } from 'react'
import { ViewOnly } from './ViewOnly'
import {
  Users, MessageCircle, Swords, Shield, Trophy, ArrowLeft, Activity,
  Sparkles, UserMinus, Check, X, Bell, Loader2, UserPlus, Search,
  UserCheck, Plus, Send, Clock, Award, Star, Flame, MessageSquare,
} from 'lucide-react'

// ============================================================
// STATIC DATA
// ============================================================
const ME = { id: 'me', username: 'adaobi' }

const FRIENDS = [
  { id: 'f1', username: 'tunde',   isOnline: true,  streak: 15, xp: 12450, level: 9, accuracy: 82 },
  { id: 'f2', username: 'chinaza', isOnline: true,  streak: 8,  xp: 9870,  level: 7, accuracy: 76 },
  { id: 'f3', username: 'bola',    isOnline: false, streak: 3,  xp: 6210,  level: 5, accuracy: 68 },
  { id: 'f4', username: 'fatima',  isOnline: true,  streak: 22, xp: 18230, level: 11, accuracy: 89 },
  { id: 'f5', username: 'emeka',   isOnline: false, streak: 5,  xp: 8120,  level: 6, accuracy: 74 },
]

const FRIEND_REQUESTS = [
  { id: 'r1', fromUser: { username: 'zainab' } },
  { id: 'r2', fromUser: { username: 'ifeanyi' } },
]

const SEARCH_RESULTS = [
  { id: 's1', username: 'kemi',    school: 'FGC Lagos',      exam: 'JAMB', isOnline: true,  isFriend: false, friendRequestSent: false },
  { id: 's2', username: 'segun',   school: 'King\'s College', exam: 'JAMB', isOnline: false, isFriend: false, friendRequestSent: false },
  { id: 's3', username: 'chiamaka', school: 'FGGC Onitsha',   exam: 'WAEC', isOnline: true,  isFriend: true,  friendRequestSent: false },
  { id: 's4', username: 'hamza',   school: 'Loyola Jesuit',  exam: 'JAMB', isOnline: false, isFriend: false, friendRequestSent: true },
]

const MESSAGES = {
  f1: [
    { id: 'm1', senderId: 'f1', message: 'Yo, did you finish the Physics practice?', createdAt: '2026-04-30T09:15:00Z' },
    { id: 'm2', senderId: 'me', message: 'Almost — 2 more questions to go. You?',   createdAt: '2026-04-30T09:16:30Z' },
    { id: 'm3', senderId: 'f1', message: "Yeah, scored 82% 😅 Newton's Laws are brutal", createdAt: '2026-04-30T09:17:45Z' },
    { id: 'm4', senderId: 'me', message: 'Nice. Want to duel on Trigonometry later?', createdAt: '2026-04-30T09:19:00Z' },
    { id: 'm5', senderId: 'f1', message: 'Bet, after 6pm',                          createdAt: '2026-04-30T09:19:30Z' },
  ],
  f2: [
    { id: 'n1', senderId: 'me',     message: 'Did you see the new mock exam format?', createdAt: '2026-04-29T18:00:00Z' },
    { id: 'n2', senderId: 'chinaza', message: 'Yes! Much better with passages',      createdAt: '2026-04-29T18:02:00Z' },
  ],
}

const DUEL_INVITES = [
  { id: 'd1', fromUser: { username: 'tunde' },   subject: 'Mathematics', topic: 'Trigonometry', questionCount: 10, timeLimit: 300, invitedAt: '2026-04-30T09:00:00Z', expiresAt: '2026-04-30T12:00:00Z' },
  { id: 'd2', fromUser: { username: 'fatima' },  subject: 'Physics',     topic: 'Mechanics',    questionCount: 5,  timeLimit: 180, invitedAt: '2026-04-30T08:30:00Z', expiresAt: '2026-04-30T11:30:00Z' },
]

const GROUPS = [
  { id: 'g1', name: 'Physics Warriors',    description: 'Daily Physics practice group',        memberCount: 42, subject: 'Physics',     isMember: true  },
  { id: 'g2', name: 'Chemistry Champs',    description: 'JAMB Chemistry grind',                memberCount: 28, subject: 'Chemistry',   isMember: false },
  { id: 'g3', name: 'Math Wizards',        description: 'Algebra & Calculus',                  memberCount: 65, subject: 'Mathematics', isMember: true  },
  { id: 'g4', name: 'English Essay Club',  description: 'Weekly essay practice',               memberCount: 19, subject: 'English',     isMember: false },
]

const ACTIVITIES = [
  { id: 'a1', type: 'session',  friend: { username: 'tunde' },   message: 'completed a Physics session (82%)',  createdAt: '2026-04-30T09:20:00Z' },
  { id: 'a2', type: 'streak',   friend: { username: 'fatima' },  message: 'reached a 22-day streak 🔥',          createdAt: '2026-04-30T08:00:00Z' },
  { id: 'a3', type: 'level_up', friend: { username: 'chinaza' }, message: 'reached Level 7 🎉',                  createdAt: '2026-04-29T21:30:00Z' },
  { id: 'a4', type: 'badge',    friend: { username: 'bola' },    message: 'earned "Night Owl" badge 🌙',         createdAt: '2026-04-29T19:00:00Z' },
  { id: 'a5', type: 'session',  friend: { username: 'emeka' },   message: 'completed a Chemistry quiz (68%)',    createdAt: '2026-04-29T16:45:00Z' },
]

const CHALLENGES = [
  { id: 'c1', type: 'streak',   status: 'active', participants: ['me', 'tunde', 'fatima', 'chinaza'], endsAt: '2026-05-07T00:00:00Z', isParticipant: true  },
  { id: 'c2', type: 'accuracy', status: 'active', participants: ['bola', 'emeka'],                    endsAt: '2026-05-03T00:00:00Z', isParticipant: false },
]

// ============================================================
// MAIN
// ============================================================
export default function ShowcaseSocial({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('friends')
  const [selectedFriend, setSelectedFriend] = useState(null)

  const tabs = [
    { id: 'friends',    label: 'Friends',    icon: Users },
    { id: 'messages',   label: 'Messages',   icon: MessageCircle },
    { id: 'duels',      label: 'Duels',      icon: Swords },
    { id: 'groups',     label: 'Groups',     icon: Shield },
    { id: 'activity',   label: 'Activity',   icon: Activity },
    { id: 'challenges', label: 'Challenges', icon: Trophy },
  ]

  const renderContent = () => {
    if (selectedFriend && activeTab === 'messages') {
      return <ChatWindow friend={selectedFriend} onBack={() => setSelectedFriend(null)} />
    }

    switch (activeTab) {
      case 'friends':    return <FriendList onSelectFriend={(f) => { setSelectedFriend(f); setActiveTab('messages') }} />
      case 'messages':   return <MessagesEmpty />
      case 'duels':      return <DuelInvite onNavigate={onNavigate} />
      case 'groups':     return <GroupsList onNavigate={onNavigate} />
      case 'activity':   return <ActivityFeed />
      case 'challenges': return <ChallengeCard />
      default:           return null
    }
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* Header */}
        <div className="flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
            <ViewOnly tooltip="Sign up to go back">
              <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')}>
                <ArrowLeft size={20} />
              </button>
            </ViewOnly>
            <div>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <Users size={24} style={{ color: 'var(--color-primary)' }} />
                <h1 className="h2" style={{ margin: 0 }}>Social Hub</h1>
                <Sparkles size={16} style={{ color: 'var(--color-warning)' }} />
              </div>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                Connect, compete, and learn together
              </p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Beta</span>
            <ViewOnly tooltip="Sign up to open settings">
              <button className="btn btn-ghost" onClick={() => onNavigate?.('settings')}>
                <Users size={18} />
              </button>
            </ViewOnly>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex" style={{
          gap: 'var(--space-1)',
          marginBottom: 'var(--space-6)',
          borderBottom: '1px solid var(--color-border)',
          overflowX: 'auto',
        }}>
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSelectedFriend(null) }}
                className="flex"
                style={{
                  padding: 'var(--space-2) var(--space-4)',
                  borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                  background: 'transparent',
                  borderTop: 'none', borderLeft: 'none', borderRight: 'none',
                  cursor: 'pointer', gap: 'var(--space-2)', alignItems: 'center',
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
                  fontWeight: isActive ? 600 : 400,
                  transition: 'all var(--transition)',
                  whiteSpace: 'nowrap',
                }}
              >
                <Icon size={18} /> {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div>{renderContent()}</div>
      </div>
    </div>
  )
}

// ============================================================
// FRIEND LIST
// ============================================================
function FriendList({ onSelectFriend }) {
  const [friends, setFriends] = useState(FRIENDS)
  const [requests, setRequests] = useState(FRIEND_REQUESTS)
  const [showSearch, setShowSearch] = useState(false)

  const acceptRequest = (id) => setRequests((prev) => prev.filter((r) => r.id !== id))
  const rejectRequest = (id) => setRequests((prev) => prev.filter((r) => r.id !== id))
  const removeFriend = (id) => setFriends((prev) => prev.filter((f) => f.id !== id))

  return (
    <div>
      {/* Header */}
      <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <Users size={20} style={{ color: 'var(--color-primary)' }} />
          <span style={{ fontWeight: 600, fontSize: 'var(--font-size-base)' }}>Friends</span>
          <span className="badge badge-muted">{friends.length}</span>
        </div>
        <ViewOnly tooltip="Sign up to add friends">
          <button className="btn btn-ghost" onClick={() => setShowSearch((v) => !v)} style={{ fontSize: 'var(--font-size-sm)' }}>
            {showSearch ? <X size={16} /> : <UserPlus size={16} />}
            {showSearch ? 'Close' : 'Add Friend'}
          </button>
        </ViewOnly>
      </div>

      {showSearch && <UserSearch onFriendAdded={() => {}} />}

      {/* Friend Requests */}
      {requests.length > 0 && (
        <div className="card" style={{ marginBottom: 'var(--space-4)', padding: 'var(--space-3)', background: 'var(--color-primary-light)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
            <Bell size={16} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)' }}>Friend Requests ({requests.length})</span>
          </div>
          {requests.map((req) => (
            <div key={req.id} className="flex-between" style={{ padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius)', background: 'var(--color-surface)', marginBottom: 'var(--space-1)' }}>
              <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                <div className="flex-center" style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--color-primary-light)', fontWeight: 700, fontSize: 'var(--font-size-sm)', color: 'var(--color-primary)' }}>
                  {req.fromUser.username[0].toUpperCase()}
                </div>
                <span style={{ fontSize: 'var(--font-size-sm)' }}>{req.fromUser.username}</span>
              </div>
              <div className="flex" style={{ gap: 'var(--space-2)' }}>
                <ViewOnly tooltip="Sign up to accept">
                  <button onClick={() => acceptRequest(req.id)} className="btn btn-success" style={{ padding: 'var(--space-1) var(--space-2)' }}>
                    <Check size={16} />
                  </button>
                </ViewOnly>
                <ViewOnly tooltip="Sign up to reject">
                  <button onClick={() => rejectRequest(req.id)} className="btn btn-danger" style={{ padding: 'var(--space-1) var(--space-2)' }}>
                    <X size={16} />
                  </button>
                </ViewOnly>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Friend List */}
      {friends.length === 0 ? (
        <div className="card text-center" style={{ padding: 'var(--space-6)' }}>
          <Users size={40} style={{ margin: '0 auto var(--space-3)', opacity: 0.3 }} />
          <div style={{ fontWeight: 500 }}>No friends yet</div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            Search and add friends to connect
          </div>
        </div>
      ) : (
        <div className="stack" style={{ gap: 'var(--space-2)' }}>
          {friends.map((friend) => (
            <div key={friend.id} className="card" style={{ padding: 'var(--space-3)', border: '1px solid var(--color-border)' }}>
              <div className="flex-between" style={{ alignItems: 'center' }}>
                <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                  <div className="flex-center" style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--color-primary-light)', fontWeight: 700, color: 'var(--color-primary)', position: 'relative' }}>
                    {friend.username[0].toUpperCase()}
                    {friend.isOnline && (
                      <div style={{ position: 'absolute', bottom: 2, right: 2, width: 10, height: 10, borderRadius: '50%', background: 'var(--color-success)', border: '2px solid var(--color-surface)' }} />
                    )}
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: 'var(--font-size-sm)' }}>
                      {friend.username}
                      {friend.isOnline && <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-success)', marginLeft: 'var(--space-2)' }}>● Online</span>}
                    </div>
                    <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                      <span>🔥 {friend.streak}d</span>
                      <span>⭐ {friend.xp} XP</span>
                      <span>🏅 Lv.{friend.level}</span>
                      <span>📊 {friend.accuracy}%</span>
                    </div>
                  </div>
                </div>
                <div className="flex" style={{ gap: 'var(--space-2)' }}>
                  <ViewOnly tooltip="Sign up to message">
                    <button onClick={() => onSelectFriend(friend)} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }} title="Message">
                      <MessageCircle size={18} style={{ color: 'var(--color-primary)' }} />
                    </button>
                  </ViewOnly>
                  <ViewOnly tooltip="Sign up to invite to duel">
                    <button className="btn btn-primary" style={{ padding: 'var(--space-1) var(--space-3)', fontSize: 'var(--font-size-xs)' }}>
                      <Swords size={14} /> Duel
                    </button>
                  </ViewOnly>
                  <ViewOnly tooltip="Sign up to remove friend">
                    <button onClick={() => removeFriend(friend.id)} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)', color: 'var(--color-danger)' }}>
                      <UserMinus size={16} />
                    </button>
                  </ViewOnly>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ============================================================
// USER SEARCH
// ============================================================
function UserSearch({ onFriendAdded }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [searched, setSearched] = useState(false)

  const handleSearch = () => {
    if (!query.trim()) return
    setResults(SEARCH_RESULTS)
    setSearched(true)
    onFriendAdded?.()
  }

  const handleSendRequest = (id) => {
    setResults((prev) => prev.map((u) => u.id === id ? { ...u, friendRequestSent: true } : u))
  }

  return (
    <div style={{ marginBottom: 'var(--space-4)' }}>
      <div className="flex" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
        <input
          type="text" className="input" placeholder="Search by username, name, or school..."
          value={query} onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          style={{ flex: 1 }}
        />
        <ViewOnly tooltip="Sign up to search users">
          <button className="btn btn-primary" onClick={handleSearch}>
            <Search size={18} />
          </button>
        </ViewOnly>
      </div>

      {searched && results.length > 0 && (
        <div className="card" style={{ padding: 'var(--space-3)' }}>
          <div style={{ fontWeight: 600, marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-sm)' }}>
            Results ({results.length})
          </div>
          {results.map((user) => (
            <div key={user.id} className="flex-between" style={{ padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius)', border: '1px solid var(--color-border)', marginBottom: 'var(--space-1)' }}>
              <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                <div className="flex-center" style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--color-primary-light)', fontWeight: 700, color: 'var(--color-primary)' }}>
                  {user.username[0].toUpperCase()}
                </div>
                <div>
                  <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500 }}>{user.username}</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    {user.school} • {user.exam}
                    {user.isOnline && <span style={{ color: 'var(--color-success)', marginLeft: 'var(--space-2)' }}>● Online</span>}
                  </div>
                </div>
              </div>
              {user.isFriend ? (
                <span className="badge badge-success" style={{ fontSize: 'var(--font-size-xs)' }}>
                  <UserCheck size={12} style={{ display: 'inline' }} /> Friends
                </span>
              ) : user.friendRequestSent ? (
                <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Pending</span>
              ) : (
                <ViewOnly tooltip="Sign up to add friend">
                  <button onClick={() => handleSendRequest(user.id)} className="btn btn-primary" style={{ padding: 'var(--space-1) var(--space-3)', fontSize: 'var(--font-size-xs)' }}>
                    <UserPlus size={14} /> Add
                  </button>
                </ViewOnly>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ============================================================
// MESSAGES EMPTY STATE
// ============================================================
function MessagesEmpty() {
  return (
    <div className="card" style={{ padding: 'var(--space-4)', minHeight: 400 }}>
      <div className="flex-center" style={{ flexDirection: 'column', gap: 'var(--space-3)', padding: 'var(--space-6)', color: 'var(--color-text-muted)' }}>
        <MessageCircle size={48} style={{ opacity: 0.3 }} />
        <div>Select a friend from the Friends tab to start messaging</div>
      </div>
    </div>
  )
}

// ============================================================
// CHAT WINDOW
// ============================================================
function ChatWindow({ friend, onBack }) {
  const [messages, setMessages] = useState(MESSAGES[friend.id] || [])
  const [newMessage, setNewMessage] = useState('')
  const [sending, setSending] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    if (!newMessage.trim() || !friend) return
    setSending(true)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: `m_${Date.now()}`, senderId: 'me', message: newMessage, createdAt: new Date().toISOString() },
      ])
      setNewMessage('')
      setSending(false)
    }, 300)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 260px)', minHeight: 400 }}>
      {/* Header */}
      <div className="flex-between" style={{ paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--color-border)', marginBottom: 'var(--space-3)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <button onClick={onBack} className="btn btn-ghost" style={{ padding: 'var(--space-1)' }}>
            <ArrowLeft size={18} />
          </button>
          <div className="flex-center" style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--color-primary-light)', fontWeight: 700, fontSize: 'var(--font-size-sm)', color: 'var(--color-primary)' }}>
            {friend.username[0].toUpperCase()}
          </div>
          <span style={{ fontWeight: 600 }}>{friend.username}</span>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginLeft: 'auto' }}>
            {friend.isOnline ? '🟢 Online' : '⚪ Offline'}
          </span>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflow: 'auto', paddingBottom: 'var(--space-3)' }}>
        {messages.length === 0 ? (
          <div className="flex-center" style={{ padding: 'var(--space-6)', color: 'var(--color-text-muted)' }}>
            No messages yet. Say hello!
          </div>
        ) : (
          messages.map((msg, i) => {
            const isOwn = msg.senderId === 'me'
            return (
              <div
                key={i}
                style={{
                  maxWidth: '80%',
                  padding: 'var(--space-2) var(--space-3)',
                  borderRadius: 'var(--radius)',
                  marginBottom: 'var(--space-2)',
                  background: isOwn ? 'var(--color-primary)' : 'var(--color-background)',
                  color: isOwn ? 'white' : 'var(--color-text)',
                  marginLeft: isOwn ? 'auto' : 0,
                  marginRight: isOwn ? 0 : 'auto',
                  border: isOwn ? 'none' : '1px solid var(--color-border)',
                }}
              >
                <div style={{ fontSize: 'var(--font-size-sm)', whiteSpace: 'pre-wrap' }}>{msg.message}</div>
                <div style={{ fontSize: 'var(--font-size-xs)', opacity: 0.6, marginTop: 2 }}>
                  {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            )
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex" style={{ gap: 'var(--space-2)', borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-3)' }}>
        <input
          type="text" className="input" placeholder="Type a message..."
          value={newMessage} onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          style={{ flex: 1 }}
        />
        <ViewOnly tooltip="Sign up to send messages">
          <button className="btn btn-primary" onClick={handleSend} disabled={!newMessage.trim() || sending}>
            {sending ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
          </button>
        </ViewOnly>
      </div>
    </div>
  )
}

// ============================================================
// DUEL INVITE
// ============================================================
function DuelInvite() {
  const [invites, setInvites] = useState(DUEL_INVITES)
  const [processing, setProcessing] = useState(null)

  const handleRespond = (inviteId, accept) => {
    setProcessing(inviteId)
    setTimeout(() => {
      if (accept) setInvites((prev) => prev.filter((i) => i.id !== inviteId))
      else setInvites((prev) => prev.filter((i) => i.id !== inviteId))
      setProcessing(null)
    }, 400)
  }

  if (invites.length === 0) {
    return (
      <div className="card text-center" style={{ padding: 'var(--space-6)' }}>
        <Swords size={40} style={{ margin: '0 auto var(--space-3)', opacity: 0.3 }} />
        <div style={{ fontWeight: 500 }}>No duel invites</div>
        <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Challenge a friend to a duel!</div>
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
                <Swords size={18} style={{ color: 'var(--color-warning)' }} />
                <span style={{ fontWeight: 600 }}>{invite.fromUser.username} challenged you!</span>
              </div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
                {invite.subject} • {invite.topic}
              </div>
              <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
                <span>{invite.questionCount} questions</span>
                <span>⏱️ {invite.timeLimit}s</span>
                <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
                  <Clock size={12} />
                  {new Date(invite.invitedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
            <div className="flex" style={{ gap: 'var(--space-2)' }}>
              <ViewOnly tooltip="Sign up to accept duel">
                <button onClick={() => handleRespond(invite.id, true)} disabled={processing === invite.id} className="btn btn-success" style={{ padding: 'var(--space-1) var(--space-3)', fontSize: 'var(--font-size-sm)' }}>
                  {processing === invite.id ? <Loader2 className="animate-spin" size={16} /> : <Check size={16} />}
                  Accept
                </button>
              </ViewOnly>
              <ViewOnly tooltip="Sign up to decline duel">
                <button onClick={() => handleRespond(invite.id, false)} disabled={processing === invite.id} className="btn btn-danger" style={{ padding: 'var(--space-1) var(--space-3)', fontSize: 'var(--font-size-sm)' }}>
                  <X size={16} />
                </button>
              </ViewOnly>
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

// ============================================================
// GROUPS LIST
// ============================================================
function GroupsList() {
  const [groups, setGroups] = useState(GROUPS)
  const [showCreate, setShowCreate] = useState(false)
  const [formData, setFormData] = useState({ name: '', description: '', subject: 'All' })
  const [creating, setCreating] = useState(false)

  const handleCreate = () => {
    if (!formData.name.trim()) return
    setCreating(true)
    setTimeout(() => {
      setGroups((prev) => [
        { id: `g_${Date.now()}`, name: formData.name, description: formData.description || 'Study group', memberCount: 1, subject: formData.subject || 'All', isMember: true },
        ...prev,
      ])
      setShowCreate(false)
      setFormData({ name: '', description: '', subject: 'All' })
      setCreating(false)
    }, 400)
  }

  const handleJoin = (id) => {
    setGroups((prev) => prev.map((g) => g.id === id ? { ...g, isMember: true, memberCount: g.memberCount + 1 } : g))
  }

  return (
    <div>
      <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <Shield size={20} style={{ color: 'var(--color-primary)' }} />
          <span style={{ fontWeight: 600, fontSize: 'var(--font-size-base)' }}>Study Groups</span>
          <span className="badge badge-muted">{groups.length}</span>
        </div>
        <ViewOnly tooltip="Sign up to create a group">
          <button className="btn btn-primary" onClick={() => setShowCreate(true)} style={{ fontSize: 'var(--font-size-sm)' }}>
            <Plus size={16} /> Create
          </button>
        </ViewOnly>
      </div>

      {groups.length === 0 ? (
        <div className="card text-center" style={{ padding: 'var(--space-6)' }}>
          <Shield size={40} style={{ margin: '0 auto var(--space-3)', opacity: 0.3 }} />
          <div style={{ fontWeight: 500 }}>No groups yet</div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Create a group or join an existing one</div>
        </div>
      ) : (
        <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
          {groups.map((group) => (
            <div key={group.id} className="card" style={{ padding: 'var(--space-4)' }}>
              <div className="flex-between" style={{ alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontWeight: 600 }}>{group.name}</div>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{group.description}</div>
                  <div className="flex" style={{ gap: 'var(--space-2)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
                    <span><Users size={12} style={{ display: 'inline' }} /> {group.memberCount}</span>
                    <span>📚 {group.subject}</span>
                  </div>
                </div>
                {group.isMember ? (
                  <ViewOnly tooltip="Sign up to view group">
                    <button className="btn btn-outline" style={{ fontSize: 'var(--font-size-sm)' }}>View</button>
                  </ViewOnly>
                ) : (
                  <ViewOnly tooltip="Sign up to join group">
                    <button onClick={() => handleJoin(group.id)} className="btn btn-primary" style={{ fontSize: 'var(--font-size-sm)' }}>Join</button>
                  </ViewOnly>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Modal */}
      {showCreate && (
        <div className="modal-overlay" style={{ zIndex: 100 }}>
          <div className="modal" style={{ maxWidth: 420, padding: 'var(--space-6)' }}>
            <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
              <span style={{ fontWeight: 700 }}>Create Study Group</span>
              <button onClick={() => setShowCreate(false)} className="btn btn-ghost"><X size={20} /></button>
            </div>
            <div className="stack" style={{ gap: 'var(--space-3)' }}>
              <input type="text" className="input" placeholder="Group Name *" value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} />
              <input type="text" className="input" placeholder="Description (optional)" value={formData.description} onChange={(e) => setFormData((p) => ({ ...p, description: e.target.value }))} />
              <input type="text" className="input" placeholder="Subject (optional)" value={formData.subject} onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))} />
              <ViewOnly tooltip="Sign up to create groups">
                <button className="btn btn-primary" onClick={handleCreate} disabled={!formData.name.trim() || creating} style={{ width: '100%' }}>
                  {creating ? <Loader2 className="animate-spin" size={18} /> : <Check size={18} />}
                  {creating ? 'Creating...' : 'Create Group'}
                </button>
              </ViewOnly>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================================
// ACTIVITY FEED
// ============================================================
function ActivityFeed() {
  const getIcon = (type) => {
    switch (type) {
      case 'session':  return <Activity size={14} style={{ color: 'var(--color-primary)' }} />
      case 'streak':   return <Flame    size={14} style={{ color: 'var(--color-warning)' }} />
      case 'level_up': return <Trophy   size={14} style={{ color: 'var(--color-success)' }} />
      case 'badge':    return <Star     size={14} style={{ color: 'var(--color-warning)' }} />
      default:         return <Users    size={14} style={{ color: 'var(--color-text-muted)' }} />
    }
  }

  if (ACTIVITIES.length === 0) {
    return (
      <div className="card text-center" style={{ padding: 'var(--space-4)' }}>
        <Activity size={32} style={{ margin: '0 auto var(--space-2)', opacity: 0.3 }} />
        <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>No activity from friends yet</div>
      </div>
    )
  }

  return (
    <div className="stack" style={{ gap: 'var(--space-2)' }}>
      {ACTIVITIES.map((activity) => (
        <div key={activity.id} className="flex" style={{ gap: 'var(--space-3)', padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius)', border: '1px solid var(--color-border)', alignItems: 'center' }}>
          <div className="flex-center" style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--color-primary-light)' }}>
            {getIcon(activity.type)}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 'var(--font-size-sm)' }}>
              <strong>{activity.friend.username}</strong> {activity.message}
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

// ============================================================
// CHALLENGE CARD
// ============================================================
function ChallengeCard() {
  const [challenges, setChallenges] = useState(CHALLENGES)

  const handleAccept = (id) => {
    setChallenges((prev) => prev.map((c) => c.id === id ? { ...c, isParticipant: true, participants: [...c.participants, 'me'] } : c))
  }

  if (challenges.length === 0) {
    return (
      <div className="card text-center" style={{ padding: 'var(--space-4)' }}>
        <Trophy size={32} style={{ margin: '0 auto var(--space-2)', opacity: 0.3 }} />
        <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>No active challenges</div>
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
                <Trophy size={18} style={{ color: 'var(--color-warning)' }} />
                <span style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)' }}>
                  {challenge.type === 'streak' ? '🔥 Streak Challenge' : '📊 Accuracy Challenge'}
                </span>
                <span className={`badge ${challenge.status === 'active' ? 'badge-success' : 'badge-muted'}`}>
                  {challenge.status}
                </span>
              </div>
              <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
                <span><Users size={12} style={{ display: 'inline' }} /> {challenge.participants.length}</span>
                <span><Clock size={12} style={{ display: 'inline' }} /> {new Date(challenge.endsAt).toLocaleDateString()}</span>
              </div>
            </div>
            {!challenge.isParticipant && challenge.status === 'active' && (
              <ViewOnly tooltip="Sign up to join challenges">
                <button className="btn btn-primary" onClick={() => handleAccept(challenge.id)} style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>
                  <Check size={14} /> Join
                </button>
              </ViewOnly>
            )}
            {challenge.isParticipant && (
              <span className="badge badge-success" style={{ fontSize: 'var(--font-size-xs)' }}>
                <Award size={12} style={{ display: 'inline' }} /> Joined
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
