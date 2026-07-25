// ============================================================
// HYELEARNER SLIDES — COMPLETE VISUAL IMPLEMENTATION
// Premium product showcase with animated SVG + Lucide icons
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useRef } from 'react'
import { 
  Brain, Sparkles, BookOpen, ClipboardCheck, TrendingUp, Target,
  Clock3, CheckCircle2, BarChart3, Flame, Trophy, Swords, Award,
  Zap, Crown, Calendar, Search, AlertTriangle, ChevronRight,
  GraduationCap, Users, MessageCircle, Gift, Crown as CrownIcon,
  ChevronLeft, ChevronRight as ChevronRightIcon, X, Circle,
  Activity, PieChart, LineChart, Loader2, Medal, Star, Rocket,
  ArrowUp, ArrowDown, Plus, Minus, Play, Pause, Volume2, Square,
  Menu, Home, Settings, User, Bell, LogOut, Eye, Edit, Trash2,
  RefreshCw, Download, Upload, Share2, Link, Copy, Check,
  AlertCircle, Info, HelpCircle, Lightbulb, Heart, ThumbsUp,
  ThumbsDown, Cloud, Wifi, WifiOff, Database, Server, Cpu,
  Monitor, Smartphone, Tablet, Laptop, Watch, Headphones, Mic,
  Camera, Video, Image, Music, Film, Radio, Tv, Speaker,
  Printer, Phone, Mail, MapPin, Compass, Navigation
} from 'lucide-react'

// ============================================================
// ANIMATED SVG PRIMITIVES
// ============================================================

const AnimatedCircle = ({ progress = 0, size = 120, strokeWidth = 8, color = 'var(--color-primary)' }) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--color-border)"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 1.5s ease-in-out' }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fill="var(--color-text)"
        fontSize="var(--font-size-xl)"
        fontWeight="700"
      >
        {progress}%
      </text>
    </svg>
  )
}

const ProgressRing = ({ value = 0, label = '', size = 100 }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
      <AnimatedCircle progress={value} size={size} />
      {label && <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{label}</span>}
    </div>
  )
}

const AnimatedBar = ({ value = 0, label = '', color = 'var(--color-primary)', maxWidth = 200 }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', width: '100%' }}>
      <span style={{ fontSize: 'var(--font-size-xs)', width: '80px', textAlign: 'right', color: 'var(--color-text-muted)' }}>
        {label}
      </span>
      <div style={{ flex: 1, height: '20px', background: 'var(--color-border)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
        <div
          style={{
            width: `${Math.min(value, 100)}%`,
            height: '100%',
            background: color,
            borderRadius: 'var(--radius)',
            transition: 'width 1.2s ease-in-out'
          }}
        />
      </div>
      <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: '600', minWidth: '40px', color: 'var(--color-text)' }}>
        {value}%
      </span>
    </div>
  )
}

const HeatmapGrid = ({ data = [] }) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const colors = ['var(--color-border)', 'var(--color-primary-light)', 'var(--color-primary)', 'var(--color-primary-dark)']

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', width: '100%', maxWidth: '300px' }}>
      {days.map((day, i) => (
        <div key={day} style={{ textAlign: 'center', fontSize: 'var(--font-size-xxs)', color: 'var(--color-text-muted)', paddingBottom: '4px' }}>
          {day}
        </div>
      ))}
      {data.map((value, i) => {
        const intensity = Math.min(Math.floor(value / 25), 3)
        return (
          <div
            key={i}
            style={{
              aspectRatio: '1',
              borderRadius: 'var(--radius-sm)',
              background: colors[intensity] || colors[0],
              transition: 'background 0.3s ease-in-out'
            }}
          />
        )
      })}
    </div>
  )
}

const ConnectionLine = ({ from, to, animated = true }) => {
  const pathRef = useRef(null)

  useEffect(() => {
    if (pathRef.current && animated) {
      const length = pathRef.current.getTotalLength()
      pathRef.current.style.strokeDasharray = length
      pathRef.current.style.strokeDashoffset = length
      requestAnimationFrame(() => {
        pathRef.current.style.transition = 'stroke-dashoffset 1s ease-in-out'
        pathRef.current.style.strokeDashoffset = 0
      })
    }
  }, [animated])

  return (
    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <path
        ref={pathRef}
        d={from}
        stroke="var(--color-primary)"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
    </svg>
  )
}

const Sparkle = ({ size = 20, color = 'var(--color-warning)', delay = 0 }) => {
  return (
    <div
      style={{
        animation: `pulse 2s ease-in-out ${delay}s infinite`,
        display: 'inline-block'
      }}
    >
      <Sparkles style={{ width: size, height: size, color }} />
    </div>
  )
}

// ============================================================
// SLIDE 1 — ECOSYSTEM VISUAL
// ============================================================

const EcosystemVisual = () => {
  const [showCards, setShowCards] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowCards(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const items = [
    { icon: <Brain size={28} />, label: 'AI', color: 'var(--color-primary)', delay: 0 },
    { icon: <ClipboardCheck size={28} />, label: 'CBT', color: 'var(--color-success)', delay: 0.3 },
    { icon: <BookOpen size={28} />, label: 'Lessons', color: 'var(--color-secondary)', delay: 0.6 },
    { icon: <TrendingUp size={28} />, label: 'Progress', color: 'var(--color-info)', delay: 0.9 },
  ]

  return (
    <div style={{ position: 'relative', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Connection lines */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="var(--color-primary)" strokeWidth="2" opacity="0.3" />
        <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="var(--color-primary)" strokeWidth="2" opacity="0.3" />
        <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="var(--color-primary)" strokeWidth="2" opacity="0.3" />
        <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="var(--color-primary)" strokeWidth="2" opacity="0.3" />
      </svg>

      {/* Center hub */}
      <div
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'var(--color-primary)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          zIndex: 2,
          animation: 'pulse 3s ease-in-out infinite',
          boxShadow: '0 0 60px rgba(79, 70, 229, 0.3)'
        }}
      >
        <GraduationCap size={36} />
        <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '700', marginTop: '4px' }}>HYELEARNER</span>
        <Sparkle size={16} color="white" delay={0} />
      </div>

      {/* Feature cards */}
      {items.map((item, index) => {
        const positions = [
          { top: '5%', left: '50%', transform: 'translateX(-50%)' },
          { top: '50%', left: '5%', transform: 'translateY(-50%)' },
          { top: '50%', right: '5%', transform: 'translateY(-50%)' },
          { bottom: '5%', left: '50%', transform: 'translateX(-50%)' },
        ]

        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              ...positions[index],
              opacity: showCards ? 1 : 0,
              transform: showCards ? `${positions[index].transform || ''} scale(1)` : `${positions[index].transform || ''} scale(0.8)`,
              transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${item.delay}s`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--space-1)',
              background: 'var(--color-surface)',
              padding: 'var(--space-3)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)',
              minWidth: '80px'
            }}
          >
            <div style={{ color: item.color }}>{item.icon}</div>
            <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: '600', color: 'var(--color-text)' }}>{item.label}</span>
            {index === 0 && <Sparkle size={12} delay={1} />}
          </div>
        )
      })}
    </div>
  )
}

// ============================================================
// SLIDE 2 — CBT INTERFACE VISUAL
// ============================================================

const CBTVisual = () => {
  const [progress, setProgress] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showCheck, setShowCheck] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(48), 500)
    return () => clearTimeout(timer)
  }, [])

  const options = ['x = 2', 'x = 4', 'x = 6', 'x = 8']

  const handleSelect = (index) => {
    setSelected(index)
    setShowCheck(true)
  }

  return (
    <div style={{ 
      maxWidth: '480px', 
      margin: '0 auto',
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-2xl)',
      padding: 'var(--space-6)',
      border: '1px solid var(--color-border)',
      boxShadow: 'var(--shadow-lg)'
    }}>
      {/* Header */}
      <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <ClipboardCheck size={20} color="var(--color-primary)" />
          <span style={{ fontWeight: '600', fontSize: 'var(--font-size-sm)' }}>Mathematics</span>
        </div>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <Clock3 size={16} color="var(--color-text-muted)" />
          <span style={{ fontSize: 'var(--font-size-sm)', fontFamily: 'var(--font-mono)' }}>12:45</span>
        </div>
      </div>

      {/* Progress */}
      <div className="flex-between" style={{ marginBottom: 'var(--space-2)' }}>
        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Question 24 of 50</span>
        <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-primary)' }}>{progress}%</span>
      </div>
      <div className="progress" style={{ marginBottom: 'var(--space-4)', height: '6px' }}>
        <div className="progress-fill progress-fill-primary" style={{ width: `${progress}%` }} />
      </div>

      {/* Question */}
      <div style={{ 
        padding: 'var(--space-4)',
        background: 'var(--color-background)',
        borderRadius: 'var(--radius-xl)',
        marginBottom: 'var(--space-4)'
      }}>
        <HelpCircle size={16} color="var(--color-text-muted)" style={{ marginBottom: 'var(--space-2)' }} />
        <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500', color: 'var(--color-text)' }}>
          If f(x) = 2x² + 3x - 5, what is f(2)?
        </p>
      </div>

      {/* Options */}
      <div className="stack" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
        {options.map((opt, i) => {
          const isSelected = selected === i
          const isCorrect = isSelected && i === 1
          const isWrong = isSelected && i !== 1
          
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius)',
                border: `2px solid ${isSelected ? 'var(--color-primary)' : 'var(--color-border)'}`,
                background: isCorrect ? 'var(--color-success-light)' : isWrong ? 'var(--color-danger-light)' : 'var(--color-surface)',
                cursor: 'pointer',
                width: '100%',
                transition: 'all var(--transition)',
                fontFamily: 'inherit',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text)'
              }}
            >
              <span style={{ 
                width: '28px', 
                height: '28px', 
                borderRadius: '50%', 
                background: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                color: isSelected ? 'white' : 'var(--color-text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: 'var(--font-size-xs)'
              }}>
                {String.fromCharCode(65 + i)}
              </span>
              <span>{opt}</span>
              {isCorrect && <CheckCircle2 size={16} color="var(--color-success)" style={{ marginLeft: 'auto' }} />}
              {isWrong && <X size={16} color="var(--color-danger)" style={{ marginLeft: 'auto' }} />}
            </button>
          )
        })}
      </div>

      {/* Navigation */}
      <div className="flex-between">
        <button className="btn btn-outline" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>
          <ChevronLeft size={16} /> Previous
        </button>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>24 / 50</span>
        <button className="btn btn-primary" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>
          Next <ChevronRightIcon size={16} />
        </button>
      </div>
    </div>
  )
}

// ============================================================
// SLIDE 3 — ANALYTICS VISUAL
// ============================================================

const AnalyticsVisual = () => {
  const [showBars, setShowBars] = useState(false)
  const [donutProgress, setDonutProgress] = useState(0)

  useEffect(() => {
    setTimeout(() => setShowBars(true), 300)
    setTimeout(() => setDonutProgress(74), 600)
  }, [])

  const subjects = [
    { name: 'Mathematics', value: 78, color: 'var(--color-primary)' },
    { name: 'English', value: 85, color: 'var(--color-success)' },
    { name: 'Physics', value: 45, color: 'var(--color-danger)' },
    { name: 'Chemistry', value: 62, color: 'var(--color-warning)' },
  ]

  const weakTopics = ['Algebra', 'Organic Chemistry', 'Trigonometry']

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', maxWidth: '600px', margin: '0 auto' }}>
      {/* Donut Chart */}
      <div style={{ 
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-4)',
        border: '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
          <PieChart size={16} color="var(--color-primary)" />
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: '600', color: 'var(--color-text)' }}>Overall Mastery</span>
        </div>
        <AnimatedCircle progress={donutProgress} size={100} />
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>74% Mastery</span>
      </div>

      {/* Subject Bars */}
      <div style={{ 
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-4)',
        border: '1px solid var(--color-border)'
      }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
          <BarChart3 size={16} color="var(--color-primary)" />
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: '600', color: 'var(--color-text)' }}>Subject Performance</span>
        </div>
        <div className="stack" style={{ gap: 'var(--space-2)' }}>
          {subjects.map((subject, i) => (
            <div key={i} style={{ opacity: showBars ? 1 : 0, transform: showBars ? 'translateX(0)' : 'translateX(-10px)', transition: `all 0.4s ease ${i * 0.1}s` }}>
              <AnimatedBar value={subject.value} label={subject.name} color={subject.color} />
            </div>
          ))}
        </div>
      </div>

      {/* Weak Topics */}
      <div style={{ 
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-4)',
        border: '1px solid var(--color-border)',
        gridColumn: '1 / -1'
      }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
          <AlertTriangle size={16} color="var(--color-danger)" />
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: '600', color: 'var(--color-text)' }}>Weak Topics</span>
        </div>
        <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          {weakTopics.map((topic, i) => (
            <div
              key={i}
              style={{
                padding: 'var(--space-1) var(--space-3)',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-danger-light)',
                color: 'var(--color-danger)',
                fontSize: 'var(--font-size-xs)',
                fontWeight: '500',
                border: '1px solid var(--color-danger)',
                opacity: showBars ? 1 : 0,
                transform: showBars ? 'scale(1)' : 'scale(0.8)',
                transition: `all 0.3s ease ${i * 0.15 + 0.5}s`
              }}
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================================
// SLIDE 4 — GAMIFICATION VISUAL
// ============================================================

const GamificationVisual = () => {
  const [xp, setXp] = useState(0)
  const [showBadge, setShowBadge] = useState(false)

  useEffect(() => {
    setTimeout(() => setXp(2450), 400)
    setTimeout(() => setShowBadge(true), 800)
  }, [])

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto' }}>
      {/* Player Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 'var(--space-4)', alignItems: 'center' }}>
        {/* Player A */}
        <div style={{ 
          background: 'var(--color-surface)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-4)',
          border: '2px solid var(--color-primary)',
          textAlign: 'center'
        }}>
          <div style={{ 
            width: '56px', 
            height: '56px', 
            borderRadius: '50%', 
            background: 'var(--color-primary-light)',
            margin: '0 auto var(--space-2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'var(--font-size-xl)',
            fontWeight: '700',
            color: 'var(--color-primary)'
          }}>
            A
          </div>
          <div style={{ fontWeight: '600', fontSize: 'var(--font-size-sm)' }}>Player A</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Level 12</div>
          <div className="progress" style={{ height: '4px', marginTop: 'var(--space-1)' }}>
            <div className="progress-fill progress-fill-primary" style={{ width: '78%' }} />
          </div>
          <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: '700', color: 'var(--color-primary)', marginTop: '2px' }}>1,850 XP</div>
        </div>

        {/* VS */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'var(--color-warning)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'var(--font-size-lg)',
            fontWeight: '900',
            color: 'white',
            animation: 'pulse 2s ease-in-out infinite'
          }}>
            VS
          </div>
        </div>

        {/* Player B */}
        <div style={{ 
          background: 'var(--color-surface)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-4)',
          border: '2px solid var(--color-border)',
          textAlign: 'center'
        }}>
          <div style={{ 
            width: '56px', 
            height: '56px', 
            borderRadius: '50%', 
            background: 'var(--color-secondary-light)',
            margin: '0 auto var(--space-2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'var(--font-size-xl)',
            fontWeight: '700',
            color: 'var(--color-secondary)'
          }}>
            B
          </div>
          <div style={{ fontWeight: '600', fontSize: 'var(--font-size-sm)' }}>Player B</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Level 10</div>
          <div className="progress" style={{ height: '4px', marginTop: 'var(--space-1)' }}>
            <div className="progress-fill" style={{ width: '65%', background: 'var(--color-secondary)' }} />
          </div>
          <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: '700', color: 'var(--color-secondary)', marginTop: '2px' }}>1,420 XP</div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ 
        marginTop: 'var(--space-4)',
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-4)',
        border: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
            <Flame size={20} color="var(--color-warning)" />
            <span style={{ fontWeight: '700', color: 'var(--color-warning)' }}>7</span>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>day streak</span>
          </div>
          <div style={{ width: '1px', height: '24px', background: 'var(--color-border)' }} />
          <div className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
            <Zap size={20} color="var(--color-primary)" />
            <span style={{ fontWeight: '700', color: 'var(--color-primary)' }}>{xp.toLocaleString()}</span>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>XP</span>
          </div>
        </div>
        
        {/* Badge */}
        {showBadge && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            padding: 'var(--space-1) var(--space-3)',
            borderRadius: 'var(--radius-full)',
            background: 'var(--color-success-light)',
            border: '1px solid var(--color-success)',
            animation: 'slideUp 0.5s ease-out'
          }}>
            <Award size={16} color="var(--color-success)" />
            <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: '600', color: 'var(--color-success)' }}>Scholar</span>
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================================
// SLIDE 5 — PLANNER VISUAL
// ============================================================

const PlannerVisual = () => {
  const [showTasks, setShowTasks] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowTasks(true), 300)
  }, [])

  const tasks = [
    { label: 'Revise Physics', completed: true, delay: 0 },
    { label: 'Practice Algebra', completed: false, delay: 0.2 },
    { label: 'Review Mistakes', completed: false, delay: 0.4 },
    { label: 'Complete Mock Exam', completed: false, delay: 0.6 },
  ]

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      {/* AI Brain */}
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-3)',
        marginBottom: 'var(--space-4)'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--color-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'pulse 2.5s ease-in-out infinite'
        }}>
          <Brain size={28} color="white" />
        </div>
        <div>
          <div style={{ fontWeight: '700', fontSize: 'var(--font-size-base)' }}>AI Study Planner</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Personalized for you</div>
        </div>
        <Sparkle size={16} delay={0.5} />
      </div>

      {/* Tasks */}
      <div style={{ 
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-4)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-md)'
      }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
          <Calendar size={16} color="var(--color-primary)" />
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: '600', color: 'var(--color-text)' }}>Today's Plan</span>
        </div>

        {tasks.map((task, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius)',
              marginBottom: 'var(--space-1)',
              background: task.completed ? 'var(--color-success-light)' : 'var(--color-background)',
              opacity: showTasks ? 1 : 0,
              transform: showTasks ? 'translateX(0)' : 'translateX(-10px)',
              transition: `all 0.4s ease ${task.delay}s`
            }}
          >
            <div style={{ 
              width: '20px', 
              height: '20px', 
              borderRadius: '50%', 
              border: `2px solid ${task.completed ? 'var(--color-success)' : 'var(--color-border)'}`,
              background: task.completed ? 'var(--color-success)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              {task.completed && <CheckCircle2 size={14} color="white" />}
            </div>
            <span style={{
              fontSize: 'var(--font-size-sm)',
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? 'var(--color-text-muted)' : 'var(--color-text)'
            }}>
              {task.label}
            </span>
            {task.completed && <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-success)', marginLeft: 'auto' }}>Done ✓</span>}
          </div>
        ))}
      </div>

      {/* Next Action */}
      <div style={{
        marginTop: 'var(--space-3)',
        padding: 'var(--space-3) var(--space-4)',
        borderRadius: 'var(--radius-xl)',
        background: 'var(--color-primary-light)',
        border: '2px solid var(--color-primary)',
        textAlign: 'center',
        animation: showTasks ? 'pulse 3s ease-in-out infinite' : 'none'
      }}>
        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>🎯 Next Action</div>
        <div style={{ fontWeight: '700', fontSize: 'var(--font-size-sm)', color: 'var(--color-primary)' }}>Practice Algebra</div>
      </div>
    </div>
  )
}

// ============================================================
// MAIN SLIDES EXPORT
// ============================================================

export const slides = [
  {
    id: 'ecosystem',
    title: 'The Complete Learning Ecosystem',
    subtitle: 'Everything connected. Everything personalized.',
    description: 'Hyelearner brings together AI coaching, CBT practice, lessons, and progress tracking in one unified platform.',
    visual: EcosystemVisual,
    stats: [
      { label: 'Subjects', value: '47+' },
      { label: 'Lessons', value: '328+' },
      { label: 'Questions', value: '30,000+' },
      { label: 'Students', value: '2,847+' },
    ]
  },
  {
    id: 'cbt',
    title: 'Real Exam Experience',
    subtitle: 'Practice exactly how you\'ll test.',
    description: 'Full CBT simulation with timed practice, question palettes, calculators, and instant feedback on every answer.',
    visual: CBTVisual,
    stats: [
      { label: 'Questions', value: '30,000+' },
      { label: 'Subjects', value: '47+' },
      { label: 'Practice Modes', value: '3' },
      { label: 'Difficulty Levels', value: '5' },
    ]
  },
  {
    id: 'analytics',
    title: 'Know Your Weakness',
    subtitle: 'AI-powered performance tracking.',
    description: 'Visual dashboards show your mastery, weak topics, and daily progress. Know exactly what to improve.',
    visual: AnalyticsVisual,
    stats: [
      { label: 'Mastery Score', value: '74%' },
      { label: 'Weak Topics', value: '3' },
      { label: 'Streak', value: '7 days' },
      { label: 'Accuracy', value: '78%' },
    ]
  },
  {
    id: 'gamification',
    title: 'Learn & Compete',
    subtitle: 'Stay motivated with rewards.',
    description: 'Earn XP, level up, collect badges, and challenge friends in Duo Battles. Learning becomes a game.',
    visual: GamificationVisual,
    stats: [
      { label: 'Badges', value: '12' },
      { label: 'Level', value: '12' },
      { label: 'XP Earned', value: '2,450' },
      { label: 'Duels Won', value: '8' },
    ]
  },
  {
    id: 'planner',
    title: 'Your Personal AI Planner',
    subtitle: 'Hyelearner tells you what to study next.',
    description: 'AI-powered study plans adapt to your progress. Never wonder what to study again.',
    visual: PlannerVisual,
    stats: [
      { label: 'Smart', value: 'AI-powered' },
      { label: 'Adaptive', value: 'Real-time' },
      { label: 'Personalized', value: '100%' },
      { label: 'Effective', value: 'Proven' },
    ]
  }
]

// ============================================================
// SLIDE NAVIGATION COMPONENT — WITH EXIT LOGIC
// ============================================================

export function Slideshow({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('forward')
  const [isExiting, setIsExiting] = useState(false)
  const totalSlides = slides.length

  const currentSlide = slides[currentIndex]
  const VisualComponent = currentSlide.visual

  // Handle completion with animation
  const handleComplete = () => {
    setIsExiting(true)
    setTimeout(() => {
      if (onComplete) {
        onComplete()
      }
    }, 400) // Match animation duration
  }

  const goToSlide = (index) => {
    if (isExiting) return
    if (index < 0) index = totalSlides - 1
    if (index >= totalSlides) index = 0
    setDirection(index > currentIndex ? 'forward' : 'backward')
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    if (isExiting) return
    if (currentIndex === totalSlides - 1) {
      // Last slide → complete
      handleComplete()
    } else {
      goToSlide(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (isExiting) return
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        nextSlide()
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        prevSlide()
      }
      if (e.key === 'Escape') {
        e.preventDefault()
        handleComplete()
      }
      if (e.key === 'Enter' && currentIndex === totalSlides - 1) {
        e.preventDefault()
        handleComplete()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, isExiting])

  // Auto-advance (optional - uncomment to enable)
  // useEffect(() => {
  //   if (isExiting) return
  //   const timer = setTimeout(() => {
  //     nextSlide()
  //   }, 6000)
  //   return () => clearTimeout(timer)
  // }, [currentIndex])

  const isLastSlide = currentIndex === totalSlides - 1

  return (
    <div style={{ 
      background: 'var(--color-background)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      position: 'relative'
    }}>
      <div style={{ 
        maxWidth: '900px', 
        width: '100%',
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-8)',
        boxShadow: 'var(--shadow-xl)',
        border: '1px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden',
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'scale(0.95)' : 'scale(1)',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}>
        {/* Slide Counter */}
        <div style={{
          position: 'absolute',
          top: 'var(--space-4)',
          right: 'var(--space-4)',
          fontSize: 'var(--font-size-xs)',
          color: 'var(--color-text-muted)',
          background: 'var(--color-background)',
          padding: 'var(--space-1) var(--space-3)',
          borderRadius: 'var(--radius-full)'
        }}>
          {currentIndex + 1} / {totalSlides}
        </div>

        {/* Skip button */}
        <button 
          onClick={handleComplete}
          className="btn btn-ghost"
          style={{ 
            position: 'absolute',
            top: 'var(--space-4)',
            left: 'var(--space-4)',
            fontSize: 'var(--font-size-sm)',
            padding: 'var(--space-1) var(--space-3)',
            color: 'var(--color-text-muted)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            transition: 'all var(--transition)'
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--color-text)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
        >
          Skip
        </button>

        {/* Slide Content */}
        <div style={{ animation: `fadeIn 0.5s ease-out` }}>
          {/* Header */}
          <div style={{ marginBottom: 'var(--space-6)', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: 'var(--space-1) var(--space-3)', borderRadius: 'var(--radius-full)', background: 'var(--color-primary-light)', marginBottom: 'var(--space-3)' }}>
              <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: '600', color: 'var(--color-primary)' }}>HYELEARNER</span>
            </div>
            <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '700', margin: 0, color: 'var(--color-text)' }}>
              {currentSlide.title}
            </h2>
            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
              {currentSlide.subtitle}
            </p>
          </div>

          {/* Visual */}
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <VisualComponent />
          </div>

          {/* Description */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              {currentSlide.description}
            </p>
          </div>

          {/* Stats */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: `repeat(${currentSlide.stats.length}, 1fr)`,
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-6)',
            borderTop: '1px solid var(--color-border)',
            paddingTop: 'var(--space-4)'
          }}>
            {currentSlide.stats.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: '700', color: 'var(--color-primary)' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex" style={{ gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={prevSlide}
              className="btn btn-outline"
              style={{ 
                padding: 'var(--space-2) var(--space-4)',
                opacity: currentIndex === 0 ? 0.5 : 1,
                cursor: currentIndex === 0 ? 'not-allowed' : 'pointer'
              }}
              disabled={currentIndex === 0 || isExiting}
            >
              <ChevronLeft size={18} /> Previous
            </button>
            
            <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  style={{
                    width: i === currentIndex ? '12px' : '8px',
                    height: i === currentIndex ? '12px' : '8px',
                    borderRadius: '50%',
                    background: i === currentIndex ? 'var(--color-primary)' : 'var(--color-border)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all var(--transition)',
                    padding: 0
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className={`btn ${isLastSlide ? 'btn-success' : 'btn-primary'}`}
              style={{ 
                padding: 'var(--space-2) var(--space-4)',
                background: isLastSlide ? 'var(--color-success)' : 'var(--color-primary)',
                color: 'white'
              }}
              disabled={isExiting}
            >
              {isLastSlide ? (
                <>Get Started <Rocket size={18} /></>
              ) : (
                <>Next <ChevronRightIcon size={18} /></>
              )}
            </button>
          </div>

          {/* Progress indicator */}
          <div style={{
            marginTop: 'var(--space-4)',
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-1)'
          }}>
            {slides.map((_, i) => (
              <div
                key={i}
                style={{
                  width: `${100 / totalSlides}%`,
                  maxWidth: '60px',
                  height: '3px',
                  borderRadius: 'var(--radius-full)',
                  background: i <= currentIndex ? 'var(--color-primary)' : 'var(--color-border)',
                  transition: 'all var(--transition)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Slideshow
