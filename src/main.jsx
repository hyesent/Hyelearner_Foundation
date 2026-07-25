// ============================================================
// HYELEARNER: FOUNDATION — ENTRY POINT
// Built by Hyesent.dev
// ============================================================

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('SW registered'))
    .catch((err) => console.error('SW failed:', err))
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)