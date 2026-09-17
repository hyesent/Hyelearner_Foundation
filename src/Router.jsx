import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import { LoadingScreen } from './components/LoadingScreen'

// SHOWCASE
import { PreviewProvider } from './pages/showcase/PreviewContext'
import { ShowcaseLayout } from './pages/showcase/ShowcaseLayout'
import { ShowcaseShell } from './pages/showcase/ShowcaseShell'

// ============================================================
// ERROR BOUNDARY
// ============================================================
class ShowcaseErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, info: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    this.setState({ info })
    console.error('SHOWCASE CRASH:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            padding: 24,
            fontFamily: 'monospace',
            background: '#fff',
            color: '#000',
            minHeight: '100vh',
            overflow: 'auto',
          }}
        >
          <h1 style={{ color: 'red', marginBottom: 16 }}>
            Showcase crashed
          </h1>

          <p style={{ marginBottom: 8 }}>
            <strong>Error:</strong>{' '}
            {this.state.error.toString()}
          </p>

          <p style={{ marginTop: 24, marginBottom: 8 }}>
            <strong>Stack:</strong>
          </p>

          <pre
            style={{
              whiteSpace: 'pre-wrap',
              background: '#f5f5f5',
              padding: 12,
              borderRadius: 8,
              fontSize: 12,
              overflow: 'auto',
            }}
          >
            {this.state.error.stack}
          </pre>

          <p style={{ marginTop: 24, marginBottom: 8 }}>
            <strong>Component stack:</strong>
          </p>

          <pre
            style={{
              whiteSpace: 'pre-wrap',
              background: '#f5f5f5',
              padding: 12,
              borderRadius: 8,
              fontSize: 12,
              overflow: 'auto',
            }}
          >
            {this.state.info?.componentStack || 'N/A'}
          </pre>
        </div>
      )
    }

    return this.props.children
  }
}

// ============================================================
// ROUTER
// ============================================================
export default function Router() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>

        {/* LANDING */}
        <Route
          path="/"
          element={<Landing />}
        />

        {/* SHOWCASE */}
        <Route
          path="/showcase"
          element={
            <ShowcaseErrorBoundary>
              <PreviewProvider>
                <ShowcaseLayout pageName="Hyelearner">
                  <ShowcaseShell />
                </ShowcaseLayout>
              </PreviewProvider>
            </ShowcaseErrorBoundary>
          }
        />

      </Routes>
    </Suspense>
  )
            }
