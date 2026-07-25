// ============================================================
// HYELEARNER: HYETUTOR — CHAT
// AI chat with suggested questions
// Built by Hyesent.dev
// ============================================================

import { useState, useRef, useEffect } from 'react'
import { Send, MessageSquare, Loader2, Sparkles, Lightbulb } from 'lucide-react'

export function HyeTutorChat({ insights = [], onAsk, loading }) {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [error, setError] = useState(null)
  const chatEndRef = useRef(null)

  const suggestedQuestions = [
    "Why is my Physics score dropping?",
    "Can I still get 320 in JAMB?",
    "Should I revise or take a mock exam today?",
    "What should I focus on this week?"
  ]

  useEffect(() => {
    if (insights && insights.length > 0 && messages.length === 0) {
      setMessages([{
        id: 'insights',
        sender: 'hye',
        content: {
          text: "I've been analyzing your study patterns and noticed a few things:",
          insights: insights.slice(0, 3)
        }
      }])
    }
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [insights])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { id: Date.now(), sender: 'user', content: { text: input } }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)
    setError(null)

    try {
      const response = await onAsk(input)
      const aiMessage = {
        id: Date.now() + 1,
        sender: 'hye',
        content: { text: response }
      }
      setMessages(prev => [...prev, aiMessage])
    } catch (err) {
      setError('Failed to get response. Please try again.')
      // Add error message to chat
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'hye',
        content: { text: "I'm having trouble connecting right now. Please try again in a moment." }
      }])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="card" style={{ padding: 'var(--space-4)' }}>
      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
        <MessageSquare style={{ width: '18px', height: '18px', color: 'var(--color-primary)' }} />
        <span style={{ fontWeight: '600', fontSize: 'var(--font-size-base)' }}>HyeTutor Chat</span>
        <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>
          <Sparkles style={{ width: '12px', height: '12px', display: 'inline' }} /> AI Coach
        </span>
      </div>

      {/* Chat Messages */}
      <div style={{
        maxHeight: '200px',
        overflowY: 'auto',
        marginBottom: 'var(--space-3)',
        paddingRight: 'var(--space-2)'
      }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              marginBottom: 'var(--space-2)',
              display: 'flex',
              justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start'
            }}
          >
            <div style={{
              maxWidth: '85%',
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: msg.sender === 'user' ? 'var(--radius-xl) var(--radius-xl) var(--radius-sm) var(--radius-xl)' : 'var(--radius-xl) var(--radius-xl) var(--radius-xl) var(--radius-sm)',
              background: msg.sender === 'user' ? 'var(--color-primary)' : 'var(--color-background)',
              color: msg.sender === 'user' ? 'white' : 'var(--color-text)',
              border: msg.sender === 'user' ? 'none' : '1px solid var(--color-border)'
            }}>
              {msg.content.insights ? (
  <>
    <div>{msg.content.text}</div>
    <ul>
      {msg.content.insights.map((insight, i) => (
        <li key={i}>
          <Lightbulb /> {typeof insight === 'string' ? insight : insight.message || JSON.stringify(insight)}
        </li>
      ))}
    </ul>
  </>
) : (
  <div>{msg.content.text}</div>
)}
            </div>
          </div>
        ))}
        {isTyping && (
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 'var(--space-2)' }}>
            <div style={{
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--color-background)',
              border: '1px solid var(--color-border)',
              fontSize: 'var(--font-size-sm)'
            }}>
              <Loader2 style={{ width: '16px', height: '16px', animation: 'spin 1s linear infinite' }} />
              {' '}Thinking...
            </div>
          </div>
        )}
        {error && (
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-danger)', marginTop: 'var(--space-1)' }}>
            ⚠️ {error}
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Suggested Questions */}
      <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-3)' }}>
        {suggestedQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => setInput(q)}
            style={{
              padding: 'var(--space-1) var(--space-3)',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-text-secondary)',
              cursor: 'pointer',
              transition: 'all var(--transition)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-primary)'
              e.currentTarget.style.color = 'var(--color-primary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)'
              e.currentTarget.style.color = 'var(--color-text-secondary)'
            }}
          >
            💡 {q}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="flex" style={{ gap: 'var(--space-2)' }}>
        <input
          type="text"
          className="input"
          placeholder="Ask HyeTutor anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          style={{ flex: 1 }}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || loading}
          className="btn btn-primary"
          style={{ padding: 'var(--space-2) var(--space-3)' }}
        >
          <Send style={{ width: '18px', height: '18px' }} />
        </button>
      </div>
    </div>
  )
}