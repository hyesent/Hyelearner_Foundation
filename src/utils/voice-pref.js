// ============================================================
// HYELEARNER: FOUNDATION — VOICE PREFERENCE
// Shared voice preference + voice list cache
// Backed by localStorage. No backend sync.
// Built by Hyesent.dev
// ============================================================

import { voice } from '../services'

const VOICE_KEY = 'hyelearner_voice_preference'
const VOICE_TYPE = 'fair'

// Default voice — "Guy" (US). If it isn't in the loaded list,
// the Settings page falls back to the first available voice.
export const DEFAULT_VOICE = 'en-US-GuyNeural'

// Preview text for Settings page
export const VOICE_PREVIEW_TEXT =
  "Hi, I'm your Hyelearner voice assistant. I'll read your lessons out loud."

// ============================================================
// CACHE
// ============================================================
let _voiceCache = null
let _voicePromise = null

// ============================================================
// PREFERENCE — read / write
// ============================================================
export function getVoicePreference() {
  try {
    const saved = localStorage.getItem(VOICE_KEY)
    return saved && saved.length > 0 ? saved : DEFAULT_VOICE
  } catch {
    return DEFAULT_VOICE
  }
}

export function setVoicePreference(name) {
  try {
    if (name) {
      localStorage.setItem(VOICE_KEY, name)
    } else {
      localStorage.removeItem(VOICE_KEY)
    }
    // Notify any open component (lesson viewer, daily tutor, etc.)
    window.dispatchEvent(new Event('voice-preference-changed'))
  } catch {
    // ignore
  }
}

// ============================================================
// VOICE LIST — cached fetch
// ============================================================
export async function loadVoices() {
  if (_voiceCache) return _voiceCache
  if (_voicePromise) return _voicePromise

  _voicePromise = voice
    .getVoices(VOICE_TYPE)
    .then((list) => {
      _voiceCache = Array.isArray(list) ? list : []
      return _voiceCache
    })
    .catch((err) => {
      console.warn('[voice-pref] Failed to load voices:', err)
      _voiceCache = []
      return []
    })
    .finally(() => {
      _voicePromise = null
    })

  return _voicePromise
}

export function getCachedVoices() {
  return _voiceCache || []
}

export function getVoiceLabel(name) {
  if (!_voiceCache) return name
  const found = _voiceCache.find((v) => v.name === name)
  return found?.label || name
}

// Resolve a voice name that definitely exists in the loaded list.
// If the preferred one isn't available, falls back to the first.
export function resolveVoiceName(preferred) {
  const target = preferred || getVoicePreference()
  if (!_voiceCache || _voiceCache.length === 0) return target
  const exists = _voiceCache.some((v) => v.name === target)
  if (exists) return target
  return _voiceCache[0].name
}

// ============================================================
// URL HELPER — voice.synthesize may return relative URLs
// ============================================================
export const VOICE_BASE_URL = 'https://hyezen.onrender.com'

export function toAbsoluteVoiceUrl(url) {
  if (!url) return ''
  return url.startsWith('http') ? url : `${VOICE_BASE_URL}${url}`
}
