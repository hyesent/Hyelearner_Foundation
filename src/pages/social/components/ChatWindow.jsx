// ============================================================
// HYELEARNER: SOCIAL — CHAT WINDOW
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useRef } from 'react'
import { Send, Loader2, ArrowLeft, MessageCircle, X } from 'lucide-react'
import { social } from '../../../services'
import { useAuth } from '../../../hooks'

export function ChatWindow({ friend, onBack }) {
  const { user } = useAuth()
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (friend) {
      loadMessages()
    }
  }, [friend])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const loadMessages = async () => {
    setLoading(true)
    try {
      const result = await social.getMessages(friend.id)
      setMessages(result.data?.messages || [])
    } catch (error) {
      console.error('Failed to load messages:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSend = async () => {
    if (!newMessage.trim() || !friend) return
    setSending(true)
    try {
      const result = await social.sendMessage(friend.id, newMessage)
      setMessages(prev => [...prev, result.data.message])
      setNewMessage('')
    } catch (error) {
      console.error('Failed to send message:', error)
    } finally {
      setSending(false)
    }
  }

  if (!friend) {
    return (
      <div className="flex-center" style={{ flex: 1, color: 'var(--color-text-muted)', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <MessageCircle style={{ width: '48px', height: '48px', opacity: '0.3' }} />
        <div>Select a conversation to start messaging</div>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div className="flex-between" style={{ 
        paddingBottom: 'var(--space-3)', 
        borderBottom: '1px solid var(--color-border)',
        marginBottom: 'var(--space-3)'
      }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <button onClick={onBack} className="btn btn-ghost" style={{ padding: 'var(--space-1)' }}>
            <ArrowLeft style={{ width: '18px', height: '18px' }} />
          </button>
          <div className="flex-center" style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'var(--color-primary-light)',
            fontWeight: '700',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-primary)'
          }}>
            {friend.username?.[0]?.toUpperCase() || '?'}
          </div>
          <span style={{ fontWeight: '600' }}>{friend.username}</span>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginLeft: 'auto' }}>
            {friend.isOnline ? '🟢 Online' : '⚪ Offline'}
          </span>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflow: 'auto', paddingBottom: 'var(--space-3)' }}>
        {loading ? (
          <div className="flex-center" style={{ padding: 'var(--space-6)' }}>
            <Loader2 className="spinner" />
          </div>
        ) : messages.length === 0 ? (
          <div className="flex-center" style={{ padding: 'var(--space-6)', color: 'var(--color-text-muted)' }}>
            No messages yet. Say hello!
          </div>
        ) : (
          messages.map((msg, i) => {
            const isOwn = msg.senderId === user?.id
            return (
              <div key={i} style={{
                maxWidth: '80%',
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius)',
                marginBottom: 'var(--space-2)',
                alignSelf: isOwn ? 'flex-end' : 'flex-start',
                background: isOwn ? 'var(--color-primary)' : 'var(--color-background)',
                color: isOwn ? 'white' : 'var(--color-text)',
                marginLeft: isOwn ? 'auto' : 0,
                marginRight: isOwn ? 0 : 'auto',
                border: isOwn ? 'none' : '1px solid var(--color-border)'
              }}>
                <div style={{ fontSize: 'var(--font-size-sm)', whiteSpace: 'pre-wrap' }}>
                  {msg.message}
                </div>
                <div style={{ fontSize: 'var(--font-size-xxs)', opacity: 0.6, marginTop: '2px' }}>
                  {new Date(msg.createdAt).toLocaleTimeString()}
                </div>
              </div>
            )
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex" style={{ 
        gap: 'var(--space-2)', 
        borderTop: '1px solid var(--color-border)', 
        paddingTop: 'var(--space-3)'
      }}>
        <input
          type="text"
          className="input"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          style={{ flex: 1 }}
        />
        <button 
          className="btn btn-primary" 
          onClick={handleSend}
          disabled={!newMessage.trim() || sending}
        >
          {sending ? <Loader2 className="spinner" style={{ width: '18px', height: '18px' }} /> : <Send style={{ width: '18px', height: '18px' }} />}
        </button>
      </div>
    </div>
  )
}