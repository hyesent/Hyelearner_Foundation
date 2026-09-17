// ============================================================
// HYELEARNER: FOUNDATION — HELP PAGE (v1)
// Lightweight help hub. Details to come later.
// Built by Hyesent.dev
// ============================================================

import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  GraduationCap,
  Sparkles,
  CreditCard,
  Users,
  Cpu,
  HelpCircle,
  Mail,
  MessageSquare,
  BookOpen,
  ClipboardCheck,
  Calendar,
  Swords,
  Search,
  Calculator,
} from 'lucide-react'
import Footer from '../../Footer'

// ============================================================
// QUICK HELP CARDS
// ============================================================
const HELP_SECTIONS = [
  {
    id: 'getting-started',
    icon: GraduationCap,
    color: 'var(--color-primary)',
    bg: 'var(--color-primary-light)',
    title: 'Getting Started',
    desc: 'Create your account, set your exam, and take your first step.',
  },
  {
    id: 'features',
    icon: Sparkles,
    color: 'var(--color-secondary)',
    bg: 'var(--color-secondary-light)',
    title: 'Features',
    desc: 'What each part of Hyelearner does — and how to use it.',
  },
  {
    id: 'subscription',
    icon: CreditCard,
    color: 'var(--color-success)',
    bg: 'var(--color-success-light)',
    title: 'Subscription',
    desc: 'What is free, what is paid, and how to subscribe.',
  },
  {
    id: 'parents',
    icon: Users,
    color: 'var(--color-warning)',
    bg: 'var(--color-warning-light)',
    title: 'Parent Linking',
    desc: 'How a student shares their progress with a parent.',
  },
  {
    id: 'ai-usage',
    icon: Cpu,
    color: 'var(--color-info)',
    bg: 'var(--color-info-light)',
    title: 'AI Usage',
    desc: 'How the daily AI limit works and when it resets.',
  },
  {
    id: 'faq',
    icon: HelpCircle,
    color: 'var(--color-pink)',
    bg: 'var(--color-pink-light)',
    title: 'FAQ',
    desc: 'Common questions, quick answers.',
  },
]

// ============================================================
// FEATURE LIST (for the Features section)
// ============================================================
const FEATURES = [
  { icon: ClipboardCheck, name: 'CBT Practice', desc: 'Practice with 30,000+ questions in a real exam interface.' },
  { icon: BookOpen, name: 'Lessons', desc: 'Structured lessons that explain each topic.' },
  { icon: Sparkles, name: 'Daily Tutor', desc: 'One personalized lesson and quiz per day.' },
  { icon: Calendar, name: 'Study Plan', desc: 'AI-generated week-by-week plan toward your exam date.' },
  { icon: Swords, name: 'Duels', desc: 'Challenge friends to timed practice battles.' },
  { icon: Search, name: 'Course Finder', desc: 'Check your real chance for a university and course.' },
  { icon: Calculator, name: 'Formula Solver', desc: '100+ formulas with solve-for-any-variable calculator.' },
  { icon: Users, name: 'Social', desc: 'Friends, messages, and study groups.' },
]

// ============================================================
// MAIN
// ============================================================
export default function Help() {
  const navigate = useNavigate()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div style={s.page}>
      <div style={s.container}>
        {/* Header */}
        <div style={s.header}>
          <button
            onClick={() => navigate('/')}
            style={s.backBtn}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>
        </div>

        {/* Title */}
        <div style={s.titleBlock}>
          <h1 style={s.title}>Help Center</h1>
          <p style={s.subtitle}>
            Quick answers to the questions we get most. Still stuck? We&apos;re
            a scroll away.
          </p>
        </div>

        {/* Quick cards */}
        <div style={s.cardGrid}>
          {HELP_SECTIONS.map((sec) => {
            const Icon = sec.icon
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                style={s.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                  e.currentTarget.style.borderColor = sec.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                }}
              >
                <div style={{ ...s.cardIcon, background: sec.bg, color: sec.color }}>
                  <Icon size={22} strokeWidth={1.9} />
                </div>
                <div style={s.cardTitle}>{sec.title}</div>
                <div style={s.cardDesc}>{sec.desc}</div>
              </button>
            )
          })}
        </div>

        {/* Sections */}
        <div style={s.sections}>
          {/* GETTING STARTED */}
          <section id="getting-started" style={s.section}>
            <h2 style={s.sectionTitle}>Getting Started</h2>
            <ol style={s.ol}>
              <li style={s.li}>
                <strong>Create an account.</strong> Tap <em>I&apos;m a Student</em>{' '}
                on the home page and sign up with your email.
              </li>
              <li style={s.li}>
                <strong>Set your exam and subjects.</strong> Pick the exam you
                are preparing for (JAMB, WAEC, NECO, or another) and add the
                subjects you are taking.
              </li>
              <li style={s.li}>
                <strong>Generate a Study Plan.</strong> Enter your exam date
                and study hours — Hyelearner builds your week-by-week plan.
              </li>
              <li style={s.li}>
                <strong>Start practicing.</strong> Take a CBT session,
                complete your Daily Tutor lesson, or challenge a friend.
              </li>
            </ol>
          </section>

          {/* FEATURES */}
          <section id="features" style={s.section}>
            <h2 style={s.sectionTitle}>Features</h2>
            <div style={s.featureList}>
              {FEATURES.map((f) => {
                const Icon = f.icon
                return (
                  <div key={f.name} style={s.featureRow}>
                    <div style={s.featureIcon}>
                      <Icon size={18} color="var(--color-primary)" />
                    </div>
                    <div>
                      <div style={s.featureName}>{f.name}</div>
                      <div style={s.featureDesc}>{f.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* SUBSCRIPTION */}
          <section id="subscription" style={s.section}>
            <h2 style={s.sectionTitle}>Subscription</h2>
            <p style={s.p}>
              Hyelearner has a free tier and a paid <strong>Foundation</strong>{' '}
              tier. Free users get CBT practice, lessons, and revision
              planning. Foundation unlocks AI coaching, Study Plan generation,
              the Weakness Finder, and more.
            </p>
            <p style={s.p}>
              To subscribe, open the app and go to <strong>Settings</strong> →{' '}
              <strong>Subscription</strong>. You&apos;ll be taken to HyeSpace
              to complete payment. Once your HyeSpace ID is linked, your
              subscription activates automatically.
            </p>
            <div style={s.infoBox}>
              <CreditCard size={16} color="var(--color-success)" />
              <span>
                Cancellations are handled through HyeSpace. Your access stays
                active until the end of the billing period.
              </span>
            </div>
          </section>

          {/* PARENT LINKING */}
          <section id="parents" style={s.section}>
            <h2 style={s.sectionTitle}>Parent Linking</h2>
            <p style={s.p}>
              A parent can view their child&apos;s progress on Hyelearner in
              read-only mode — no personal data, no interference.
            </p>
            <ol style={s.ol}>
              <li style={s.li}>
                <strong>Student:</strong> open <strong>Settings</strong> →{' '}
                <strong>Parent Link</strong>. A 6-character code is generated
                automatically.
              </li>
              <li style={s.li}>
                <strong>Student:</strong> share the code with your parent.
              </li>
              <li style={s.li}>
                <strong>Parent:</strong> go to the Hyelearner home page, tap{' '}
                <em>I&apos;m a Parent</em>, and enter the code.
              </li>
              <li style={s.li}>
                <strong>Parent:</strong> the dashboard opens — subject
                readiness, recent activity, study time, and where the child
                needs help.
              </li>
            </ol>
            <div style={s.infoBox}>
              <Users size={16} color="var(--color-warning)" />
              <span>
                The code never expires. A student can regenerate or unlink at
                any time from Settings.
              </span>
            </div>
          </section>

          {/* AI USAGE */}
          <section id="ai-usage" style={s.section}>
            <h2 style={s.sectionTitle}>AI Usage</h2>
            <p style={s.p}>
              Hyelearner limits AI-powered features to <strong>10 calls per
              day</strong>. Each call counts when you:
            </p>
            <ul style={s.ul}>
              <li style={s.li}>Generate a Study Plan</li>
              <li style={s.li}>Run a Weakness Analysis</li>
              <li style={s.li}>Generate a Daily Tutor lesson or quiz</li>
              <li style={s.li}>Ask HyeTutor a question</li>
            </ul>
            <p style={s.p}>
              The counter resets at midnight (your local time). If you hit the
              limit, you&apos;ll see a message — AI features unlock again the
              next day.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" style={s.section}>
            <h2 style={s.sectionTitle}>FAQ</h2>

            <div style={s.faqList}>
              <FaqItem
                q="Is Hyelearner free?"
                a="Yes — CBT practice, lessons, and revision planning are free forever. The Foundation tier unlocks AI features and Study Plan generation."
              />
              <FaqItem
                q="Does it work offline?"
                a="Practice and lessons are cached locally after first load. AI features require a connection."
              />
              <FaqItem
                q="Does it work on mobile?"
                a="Yes. Hyelearner is designed mobile-first. Every feature works on phone, tablet, and desktop."
              />
              <FaqItem
                q="How do I reset my password?"
                a="On the login page, tap 'Forgot password'. You will get a reset link by email."
              />
              <FaqItem
                q="Can I change my exam type?"
                a="Yes. Go to Settings → Profile → Exam and select a new one. Your Study Plan will adapt on regeneration."
              />
              <FaqItem
                q="How do I cancel my subscription?"
                a="Cancellations are handled on HyeSpace. Your access stays active until the end of the current billing period."
              />
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" style={s.section}>
            <h2 style={s.sectionTitle}>Still need help?</h2>
            <p style={s.p}>
              Reach out and we&apos;ll get back to you.
            </p>
            <div style={s.contactRow}>
              <a href="mailto:support@hyesent.dev" style={s.contactBtn}>
                <Mail size={16} />
                <span>Email support</span>
              </a>
              <button
                onClick={() => {}}
                disabled
                style={{ ...s.contactBtn, opacity: 0.55, cursor: 'not-allowed' }}
              >
                <MessageSquare size={16} />
                <span>Live chat — coming soon</span>
              </button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

// ============================================================
// FAQ Item
// ============================================================
function FaqItem({ q, a }) {
  return (
    <div style={s.faqItem}>
      <div style={s.faqQ}>{q}</div>
      <div style={s.faqA}>{a}</div>
    </div>
  )
}

// ============================================================
// STYLES
// ============================================================
const s = {
  page: {
    background: 'var(--color-background)',
    minHeight: '100vh',
    paddingBottom: 'var(--space-8)',
  },

  container: {
    maxWidth: '860px',
    margin: '0 auto',
    padding: 'var(--space-8) var(--space-5)',
  },

  header: {
    marginBottom: 'var(--space-6)',
  },

  backBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '8px 12px',
    background: 'transparent',
    border: 'none',
    borderRadius: 'var(--radius-full)',
    color: 'var(--color-text-muted)',
    fontFamily: 'inherit',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'color var(--transition)',
  },

  titleBlock: {
    textAlign: 'center',
    marginBottom: 'var(--space-10)',
  },

  title: {
    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
    fontWeight: 800,
    letterSpacing: '-0.03em',
    color: 'var(--color-text)',
    margin: 0,
  },

  subtitle: {
    fontSize: 'var(--font-size-base)',
    color: 'var(--color-text-secondary)',
    marginTop: 'var(--space-3)',
    maxWidth: 520,
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.6,
  },

  // Cards
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 'var(--space-4)',
    marginBottom: 'var(--space-16)',
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    padding: 'var(--space-5)',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-2xl)',
    boxShadow: 'var(--shadow-sm)',
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'all 220ms cubic-bezier(0.34, 1.3, 0.64, 1)',
  },

  cardIcon: {
    width: 44,
    height: 44,
    borderRadius: 'var(--radius-lg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 'var(--space-3)',
  },

  cardTitle: {
    fontSize: 'var(--font-size-base)',
    fontWeight: 700,
    color: 'var(--color-text)',
  },

  cardDesc: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-muted)',
    marginTop: 'var(--space-1)',
    lineHeight: 1.5,
  },

  // Sections
  sections: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-12)',
  },

  section: {
    scrollMarginTop: 'var(--space-8)',
  },

  sectionTitle: {
    fontSize: 'var(--font-size-2xl)',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: 'var(--color-text)',
    marginBottom: 'var(--space-4)',
    paddingBottom: 'var(--space-2)',
    borderBottom: '1px solid var(--color-border)',
  },

  p: {
    fontSize: 'var(--font-size-base)',
    color: 'var(--color-text-secondary)',
    lineHeight: 1.7,
    marginBottom: 'var(--space-3)',
  },

  ol: {
    paddingLeft: 'var(--space-5)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)',
  },

  ul: {
    paddingLeft: 'var(--space-5)',
    listStyle: 'disc',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-2)',
  },

  li: {
    fontSize: 'var(--font-size-base)',
    color: 'var(--color-text-secondary)',
    lineHeight: 1.7,
  },

  infoBox: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'var(--space-2)',
    padding: 'var(--space-3) var(--space-4)',
    background: 'var(--color-primary-light)',
    borderRadius: 'var(--radius-xl)',
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
    marginTop: 'var(--space-4)',
    lineHeight: 1.6,
  },

  // Features
  featureList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)',
  },

  featureRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'var(--space-3)',
    padding: 'var(--space-3) var(--space-4)',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-xl)',
  },

  featureIcon: {
    width: 36,
    height: 36,
    borderRadius: 'var(--radius-lg)',
    background: 'var(--color-primary-light)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  featureName: {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 700,
    color: 'var(--color-text)',
  },

  featureDesc: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-muted)',
    marginTop: 2,
    lineHeight: 1.5,
  },

  // FAQ
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)',
  },

  faqItem: {
    padding: 'var(--space-4)',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-xl)',
  },

  faqQ: {
    fontSize: 'var(--font-size-base)',
    fontWeight: 700,
    color: 'var(--color-text)',
    marginBottom: 'var(--space-2)',
  },

  faqA: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
    lineHeight: 1.7,
  },

  // Contact
  contactRow: {
    display: 'flex',
    gap: 'var(--space-3)',
    flexWrap: 'wrap',
    marginTop: 'var(--space-3)',
  },

  contactBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '12px 18px',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-xl)',
    color: 'var(--color-text)',
    fontFamily: 'inherit',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all var(--transition)',
  },
}
