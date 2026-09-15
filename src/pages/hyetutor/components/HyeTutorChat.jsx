// ============================================================
// HYELEARNER: HYETUTOR — CHAT PAGE (FULL SCREEN)
// Opens from Home card / HyeTutor page modal
// Reads location.state.initialMessage and auto-sends it
// Built by Hyesent.dev
// ============================================================

import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ArrowLeft, Send, Loader2, Sparkles, Brain } from 'lucide-react'
import { useHyeTutor } from './hooks/useHyeTutor'

export default function HyeTutorChatPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { askQuestion } = useHyeTutor()

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [error, setError] = useState(null)
  const chatEndRef = useRef(null)
  const didInitRef = useRef(false)

  const suggestedQuestions = [
    'Why is my Physics score dropping?',
    'Can I still get 320 in JAMB?',
    'Should I revise or take a mock exam today?',
    'What should I focus on this week?',
  ]

  // Scroll on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Send helper
  const sendMessage = async (text) => {
    const trimmed = text.trim()
    if (!trimmed || isTyping) return

    const userMsg = {
      id: `u_${Date.now()}`,
      sender: 'user',
      text: trimmed,
    }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)
    setError(null)

    try {
      const response = await askQuestion(trimmed)
      const aiText =
        typeof response === 'string'
          ? response
          : response?.answer || response?.text || response?.message || ''

      setMessages((prev) => [
        ...prev,
        {
          id: `h_${Date.now()}`,
          sender: 'hye',
          text:
            aiText ||
            "I couldn't generate a response. Please try asking differently.",
        },
      ])
    } catch (err) {
      console.error('HyeTutor chat error:', err)
      setError('Failed to get response. Please try again.')
      setMessages((prev) => [
        ...prev,
        {
          id: `h_${Date.now()}`,
          sender: 'hye',
          text: "I'm having trouble connecting right now. Please try again in a moment.",
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  // Auto-send initialMessage from navigation state
  useEffect(() => {
    if (didInitRef.current) return
    didInitRef.current = true

    const initial = location.state?.initialMessage
    if (initial && typeof initial === 'string' && initial.trim()) {
      // Clear state so refresh doesn't re-send
      navigate(location.pathname, { replace: true, state: {} })
      sendMessage(initial)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSend = () => sendMessage(input)

  return (
    <div
      style={{
        background: 'var(--color-background)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ===== HEADER ===== */}
      <header
        className="flex-between"
        style={{
          padding: 'var(--space-4)',
          borderBottom: '1px solid var(--color-border)',
          background: 'var(--color-surface)',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <button
          onClick={() => navigate(-1)}
          className="btn btn-ghost"
          style={{ padding: 'var(--space-2)' }}
          aria-label="Back"
        >
          <ArrowLeft size={20} />
        </button>

        <div
          className="flex"
          style={{ gap: 'var(--space-2)', alignItems: 'center' }}
        >
          <Brain size={18} style={{ color: 'var(--color-primary)' }} />
          <span
            style={{
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'var(--font-size-base)',
              color: 'var(--color-text)',
            }}
          >
            HyeTutor
          </span>
          <span
            style={{
              fontWeight: 600,
              fontSize: 'var(--font-size-base)',
              color: 'var(--color-text)',
            }}
          >
            Chat
          </span>
          <Sparkles size={14} style={{ color: 'var(--color-warning)' }} />
        </div>

        <div style={{ width: 40 }} />
      </header>

      {/* ===== MESSAGES ===== */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: 'var(--space-4)',
          maxWidth: '48rem',
          width: '100%',
          margin: '0 auto',
        }}
      >
        {messages.length === 0 && !isTyping && (
          <div
            className="card text-center"
            style={{ padding: 'var(--space-8)' }}
          >
            <div
              className="flex-center"
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'var(--color-primary-light)',
                margin: '0 auto var(--space-4)',
              }}
            >
              <Brain
                size={32}
                style={{ color: 'var(--color-primary)' }}
              />
            </div>
            <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>
              Ask HyeTutor anything
            </h3>
            <p
              className="text-muted"
              style={{ fontSize: 'var(--font-size-sm)' }}
            >
              Your personal AI coach for exam prep, study tips, and strategy.
            </p>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: 'var(--space-3)',
            }}
          >
            <div
              style={{
                maxWidth: '85%',
                padding: 'var(--space-3) var(--space-4)',
                borderRadius:
                  msg.sender === 'user'
                    ? 'var(--radius-xl) var(--radius-xl) var(--radius-sm) var(--radius-xl)'
                    : 'var(--radius-xl) var(--radius-xl) var(--radius-xl) var(--radius-sm)',
                background:
                  msg.sender === 'user'
                    ? 'var(--color-primary)'
                    : 'var(--color-surface)',
                color:
                  msg.sender === 'user' ? 'white' : 'var(--color-text)',
                border:
                  msg.sender === 'user'
                    ? 'none'
                    : '1px solid var(--color-border)',
                fontSize: 'var(--font-size-sm)',
                lineHeight: 1.6,
                whiteSpace: 'pre-wrap',
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              marginBottom: 'var(--space-3)',
            }}
          >
            <div
              style={{
                padding: 'var(--space-3) var(--space-4)',
                borderRadius: 'var(--radius-xl)',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
              }}
            >
              <Loader2
                size={16}
                style={{ animation: 'spin 1s linear infinite' }}
              />
              Thinking...
            </div>
          </div>
        )}

        {error && (
          <div
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-danger)',
              marginTop: 'var(--space-1)',
            }}
          >
            ⚠️ {error}
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* ===== SUGGESTIONS ===== */}
      {messages.length === 0 && (
        <div
          style={{
            padding: '0 var(--space-4) var(--space-3)',
            maxWidth: '48rem',
            width: '100%',
            margin: '0 auto',
          }}
        >
          <div
            className="flex"
            style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}
          >
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => sendMessage(q)}
                style={{
                  padding: 'var(--space-1) var(--space-3)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  transition: 'all var(--transition)',
                }}
              >
                💡 {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ===== INPUT ===== */}
      <div
        style={{
          position: 'sticky',
          bottom: 0,
          padding: 'var(--space-3) var(--space-4)',
          background: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div
          className="flex"
          style={{
            gap: 'var(--space-2)',
            maxWidth: '48rem',
            margin: '0 auto',
          }}
        >
          <input
            type="text"
            className="input"
            placeholder="Ask HyeTutor anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
            style={{ flex: 1 }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="btn btn-primary"
            style={{ padding: 'var(--space-2) var(--space-3)' }}
            aria-label="Send"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
