// ============================================================
// HYELEARNER: FOUNDATION — AUTH PAGES
// Login, Register, Forgot Password
// Built by Hyesent.dev
// ============================================================

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks'
import { 
  Mail, 
  Lock, 
  User, 
  UserPlus, 
  LogIn, 
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  School,
  Globe,
  GraduationCap,
  Users,
  Loader2
} from 'lucide-react'

// ============================================================
// LOGIN — WITH CONSOLE LOGS
// ============================================================
export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: '', password: '', remember: false })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('🔵 [LOGIN-1] Form submitted')
    console.log('🔵 [LOGIN-1] Email:', form.email)
    console.log('🔵 [LOGIN-1] Password length:', form.password?.length || 0)
    
    setLoading(true)
    setError('')
    
    try {
      console.log('🔵 [LOGIN-2] Calling login() from AuthContext...')
      const response = await login(form.email, form.password)
      
      console.log('🔵 [LOGIN-3] Login successful! Response:', response)
      console.log('🔵 [LOGIN-3] User:', response?.user)
      console.log('🔵 [LOGIN-3] Token:', response?.token || response?.access_token)
      
      console.log('🔵 [LOGIN-4] Navigating to /dashboard...')
      navigate('/dashboard')
    } catch (err) {
      console.error('🔴 [LOGIN-ERROR] Login failed:', err)
      console.error('🔴 [LOGIN-ERROR] Error message:', err.message)
      console.error('🔴 [LOGIN-ERROR] Error stack:', err.stack)
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
      console.log('🔵 [LOGIN-5] Loading set to false')
    }
  }

  return (
    <div className="flex-center" style={{ minHeight: '100vh', background: 'var(--color-background)', padding: 'var(--space-4)' }}>
      <div className="card" style={{ maxWidth: '440px', width: '100%', padding: 'var(--space-8)' }}>
        {/* Logo */}
        <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex-center" style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-2xl)', background: 'var(--color-primary-light)', margin: '0 auto var(--space-3)' }}>
            <GraduationCap style={{ width: '32px', height: '32px', color: 'var(--color-primary)' }} />
          </div>
          <h1 className="h2" style={{ marginBottom: 'var(--space-1)' }}>Welcome Back</h1>
          <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Sign in to continue learning</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="danger-card" style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
            <AlertCircle style={{ width: '16px', height: '16px', flexShrink: 0, marginTop: '2px' }} />
            <span style={{ fontSize: 'var(--font-size-sm)' }}>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="stack" style={{ gap: 'var(--space-4)' }}>
          {/* Email */}
          <div>
            <label className="label">Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
              <input
                type="email"
                className="input"
                style={{ paddingLeft: 'var(--space-10)' }}
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="label">Password</label>
            <div style={{ position: 'relative' }}>
              <Lock style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
              <input
                type={showPassword ? 'text' : 'password'}
                className="input"
                style={{ paddingLeft: 'var(--space-10)', paddingRight: 'var(--space-10)' }}
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }}
              >
                {showPassword ? <EyeOff style={{ width: '16px', height: '16px' }} /> : <Eye style={{ width: '16px', height: '16px' }} />}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
            <label className="checkbox">
              <input type="checkbox" checked={form.remember} onChange={(e) => setForm({ ...form, remember: e.target.checked }) } />
              <span style={{ color: 'var(--color-text-secondary)' }}>Remember me</span>
            </label>
            <button type="button" onClick={() => navigate('/forgot-password')} className="link" style={{ fontWeight: '500' }}>
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary btn-lg flex-center"
            style={{ width: '100%' }}
          >
            {loading ? (
              <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }}></div> Signing in...</>
            ) : (
              <><LogIn style={{ width: '16px', height: '16px' }} /> Sign In</>
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center" style={{ marginTop: 'var(--space-6)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
          Don't have an account?{' '}
          <button onClick={() => navigate('/register')} className="link" style={{ fontWeight: '500' }}>
            Sign up
          </button>
        </p>
      </div>
    </div>
  )
}

// ============================================================
// REGISTER
// ============================================================
export function Register() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    school: '',
    country: 'Nigeria',
    exam: 'jamb',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('🟢 [REGISTER-1] Form submitted')
    console.log('🟢 [REGISTER-1] Email:', form.email)
    console.log('🟢 [REGISTER-1] Username:', form.username)
    
    setLoading(true)
    setError('')
    
    try {
      console.log('🟢 [REGISTER-2] Calling register() from AuthContext...')
      const response = await register(form)
      console.log('🟢 [REGISTER-3] Registration successful! Response:', response)
      console.log('🟢 [REGISTER-3] User:', response?.user)
      
      console.log('🟢 [REGISTER-4] Navigating to /dashboard...')
      navigate('/dashboard')
    } catch (err) {
      console.error('🔴 [REGISTER-ERROR] Registration failed:', err)
      console.error('🔴 [REGISTER-ERROR] Error message:', err.message)
      setError(err.message || 'Registration failed')
    } finally {
      setLoading(false)
      console.log('🟢 [REGISTER-5] Loading set to false')
    }
  }

  return (
    <div className="flex-center" style={{ minHeight: '100vh', background: 'var(--color-background)', padding: 'var(--space-4)' }}>
      <div className="card" style={{ maxWidth: '440px', width: '100%', padding: 'var(--space-8)' }}>
        {/* Logo */}
        <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex-center" style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-2xl)', background: 'var(--color-success-light)', margin: '0 auto var(--space-3)' }}>
            <UserPlus style={{ width: '32px', height: '32px', color: 'var(--color-success)' }} />
          </div>
          <h1 className="h2" style={{ marginBottom: 'var(--space-1)' }}>Create Account</h1>
          <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Start your learning journey today</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="danger-card" style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
            <AlertCircle style={{ width: '16px', height: '16px', flexShrink: 0, marginTop: '2px' }} />
            <span style={{ fontSize: 'var(--font-size-sm)' }}>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="stack" style={{ gap: 'var(--space-3)' }}>
          {/* Name */}
          <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
            <div>
              <label className="label">First name</label>
              <div style={{ position: 'relative' }}>
                <User style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
                <input
                  className="input"
                  style={{ paddingLeft: 'var(--space-10)' }}
                  placeholder="John"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  required
                />
              </div>
            </div>
            <div>
              <label className="label">Last name</label>
              <input
                className="input"
                placeholder="Doe"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="label">Username</label>
            <div style={{ position: 'relative' }}>
              <Users style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
              <input
                className="input"
                style={{ paddingLeft: 'var(--space-10)' }}
                placeholder="johndoe"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="label">Email</label>
            <div style={{ position: 'relative' }}>
              <Mail style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
              <input
                type="email"
                className="input"
                style={{ paddingLeft: 'var(--space-10)' }}
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="label">Password</label>
            <div style={{ position: 'relative' }}>
              <Lock style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
              <input
                type={showPassword ? 'text' : 'password'}
                className="input"
                style={{ paddingLeft: 'var(--space-10)', paddingRight: 'var(--space-10)' }}
                placeholder="Min 6 characters"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }}
              >
                {showPassword ? <EyeOff style={{ width: '16px', height: '16px' }} /> : <Eye style={{ width: '16px', height: '16px' }} />}
              </button>
            </div>
          </div>

          {/* School */}
          <div>
            <label className="label">School</label>
            <div style={{ position: 'relative' }}>
              <School style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
              <input
                className="input"
                style={{ paddingLeft: 'var(--space-10)' }}
                placeholder="Your school name"
                value={form.school}
                onChange={(e) => setForm({ ...form, school: e.target.value })}
              />
            </div>
          </div>

          {/* Exam & Country */}
          <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
            <div>
              <label className="label">Exam</label>
              <select
                className="select"
                value={form.exam}
                onChange={(e) => setForm({ ...form, exam: e.target.value })}
              >
                <option value="jamb">JAMB</option>
                <option value="waec">WAEC</option>
                <option value="neco">NECO</option>
                <option value="ssce">SSCE</option>
              </select>
            </div>
            <div>
              <label className="label">Country</label>
              <div style={{ position: 'relative' }}>
                <Globe style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
                <select
                  className="select"
                  style={{ paddingLeft: 'var(--space-10)' }}
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                >
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Kenya">Kenya</option>
                  <option value="South Africa">South Africa</option>
                  <option value="UK">UK</option>
                  <option value="US">US</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-success btn-lg flex-center"
            style={{ width: '100%' }}
          >
            {loading ? (
              <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }}></div> Creating account...</>
            ) : (
              <><UserPlus style={{ width: '16px', height: '16px' }} /> Create Account</>
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center" style={{ marginTop: 'var(--space-6)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className="link" style={{ fontWeight: '500' }}>
            Sign in
          </button>
        </p>
      </div>
    </div>
  )
}

// ============================================================
// FORGOT PASSWORD
// ============================================================
export function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const { forgotPassword } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('🟡 [FORGOT-1] Form submitted')
    console.log('🟡 [FORGOT-1] Email:', email)
    
    setLoading(true)
    setError('')
    
    try {
      console.log('🟡 [FORGOT-2] Calling forgotPassword()...')
      await forgotPassword(email)
      console.log('🟡 [FORGOT-3] Reset link sent successfully')
      setSent(true)
    } catch (err) {
      console.error('🔴 [FORGOT-ERROR] Failed:', err)
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
      console.log('🟡 [FORGOT-4] Loading set to false')
    }
  }

  return (
    <div className="flex-center" style={{ minHeight: '100vh', background: 'var(--color-background)', padding: 'var(--space-4)' }}>
      <div className="card" style={{ maxWidth: '440px', width: '100%', padding: 'var(--space-8)' }}>
        {/* Logo */}
        <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex-center" style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-2xl)', background: 'var(--color-warning-light)', margin: '0 auto var(--space-3)' }}>
            <Mail style={{ width: '32px', height: '32px', color: 'var(--color-warning)' }} />
          </div>
          <h1 className="h2" style={{ marginBottom: 'var(--space-1)' }}>Reset Password</h1>
          <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
            We'll send you a link to reset your password
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="danger-card" style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
            <AlertCircle style={{ width: '16px', height: '16px', flexShrink: 0, marginTop: '2px' }} />
            <span style={{ fontSize: 'var(--font-size-sm)' }}>{error}</span>
          </div>
        )}

        {/* Success */}
        {sent ? (
          <div className="success-card text-center" style={{ padding: 'var(--space-4)' }}>
            <CheckCircle2 style={{ width: '32px', height: '32px', margin: '0 auto var(--space-2)', color: 'var(--color-success)' }} />
            <p style={{ fontWeight: '600' }}>Check your email</p>
            <p className="text-sm" style={{ marginTop: 'var(--space-1)' }}>Password reset link sent to {email}</p>
            <button onClick={() => navigate('/login')} className="btn btn-success" style={{ marginTop: 'var(--space-4)' }}>
              Back to Sign In
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="stack" style={{ gap: 'var(--space-4)' }}>
            <div>
              <label className="label">Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
                <input
                  type="email"
                  className="input"
                  style={{ paddingLeft: 'var(--space-10)' }}
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-warning btn-lg flex-center"
              style={{ width: '100%' }}
            >
              {loading ? (
                <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }}></div> Sending...</>
              ) : (
                <><Mail style={{ width: '16px', height: '16px' }} /> Send Reset Link</>
              )}
            </button>
          </form>
        )}

        {/* Footer */}
        <p className="text-center" style={{ marginTop: 'var(--space-6)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
          Remember your password?{' '}
          <button onClick={() => navigate('/login')} className="link" style={{ fontWeight: '500' }}>
            Sign in
          </button>
        </p>
      </div>
    </div>
  )
}