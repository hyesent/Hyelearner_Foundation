// ============================================================
// HYELEARNER: FOUNDATION — DICTIONARY (SHOWCASE / PREVIEW)
// Static replica. Read-only + preview-aware.
// Navigation is local: onNavigate('pageKey') — no router.
// Built by Hyesent.dev
// ============================================================

import { useState } from 'react'
import { ViewOnly } from './ViewOnly'
import {
  ArrowLeft, BookOpen, Search, Volume2, Loader2, AlertCircle,
  Sparkles, Star, ExternalLink, Pause,
} from 'lucide-react'

// ============================================================
// STATIC DATA
// ============================================================
const WORD_OF_THE_DAY = {
  word: 'Ubiquitous',
  definition: 'Present, appearing, or found everywhere.',
  example: 'Smartphones have become ubiquitous in modern life.',
}

const DEMO_LOOKUPS = {
  perseverance: {
    word: 'perseverance',
    phonetic: 'ˌpɜː.səˈvɪə.rəns',
    phonetics: [],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'Continued effort to do or achieve something despite difficulties, failure, or opposition.',
            example: 'Her perseverance paid off when she finally passed the exam.',
            synonyms: ['persistence', 'tenacity', 'determination', 'grit'],
            antonyms: ['laziness', 'apathy'],
          },
          {
            definition: 'The quality of continuing steadfastly on a course of action.',
            example: '',
            synonyms: ['steadfastness'],
            antonyms: [],
          },
        ],
      },
    ],
    sourceUrls: ['https://en.wiktionary.org/wiki/perseverance'],
  },
  ubiquitous: {
    word: 'ubiquitous',
    phonetic: 'juːˈbɪk.wɪ.təs',
    phonetics: [],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Present, appearing, or found everywhere.',
            example: 'Smartphones have become ubiquitous in modern life.',
            synonyms: ['omnipresent', 'pervasive', 'universal'],
            antonyms: ['rare', 'scarce'],
          },
        ],
      },
    ],
    sourceUrls: ['https://en.wiktionary.org/wiki/ubiquitous'],
  },
  resilience: {
    word: 'resilience',
    phonetic: 'rɪˈzɪl.i.əns',
    phonetics: [],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'The capacity to withstand or recover quickly from difficulties.',
            example: 'The resilience of the team impressed everyone.',
            synonyms: ['toughness', 'grit', 'fortitude'],
            antonyms: ['fragility'],
          },
        ],
      },
    ],
    sourceUrls: ['https://en.wiktionary.org/wiki/resilience'],
  },
  synergy: {
    word: 'synergy',
    phonetic: 'ˈsɪn.ə.dʒi',
    phonetics: [],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'The combined power of a group of things when they are working together that is greater than the total power achieved by each working separately.',
            example: 'The synergy between the two teams produced remarkable results.',
            synonyms: ['cooperation', 'collaboration'],
            antonyms: ['antagonism'],
          },
        ],
      },
    ],
    sourceUrls: ['https://en.wiktionary.org/wiki/synergy'],
  },
}

const INITIAL_RECENT = ['perseverance', 'resilience']
const INITIAL_FAVORITES = ['ubiquitous']

// ============================================================
// PAGE
// ============================================================
export function ShowcaseDictionary({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [wordData, setWordData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [recentSearches, setRecentSearches] = useState(INITIAL_RECENT)
  const [favorites, setFavorites] = useState(INITIAL_FAVORITES)
  const [isSpeaking, setIsSpeaking] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    lookupWord(searchQuery.trim().toLowerCase())
  }

  const lookupWord = (word) => {
    setLoading(true)
    setError(null)
    setWordData(null)

    // demo: small artificial delay so the loading state is visible
    setTimeout(() => {
      const data = DEMO_LOOKUPS[word]
      if (!data) {
        setError(`No demo entry for "${word}". Try one of the suggested words below.`)
        setLoading(false)
        return
      }
      setWordData(data)
      setRecentSearches((prev) => [word, ...prev.filter((w) => w !== word)].slice(0, 10))
      setLoading(false)
    }, 400)
  }

  const showWordOfTheDay = () => {
    setError(null)
    setLoading(false)
    setWordData({
      word: WORD_OF_THE_DAY.word,
      phonetic: '',
      phonetics: [],
      meanings: [
        {
          partOfSpeech: '—',
          definitions: [
            {
              definition: WORD_OF_THE_DAY.definition,
              example: WORD_OF_THE_DAY.example,
              synonyms: [],
              antonyms: [],
            },
          ],
        },
      ],
      sourceUrls: [],
      _local: true,
    })
    setSearchQuery(WORD_OF_THE_DAY.word)
  }

  const handleSpeak = () => {
    // no real speechSynthesis in the showcase — just toggle the icon
    setIsSpeaking((v) => !v)
    setTimeout(() => setIsSpeaking(false), 1200)
  }

  const toggleFavorite = (word) => {
    setFavorites((prev) => prev.includes(word) ? prev.filter((w) => w !== word) : [...prev, word])
  }

  const isFavorite = (word) => favorites.includes(word)

  const renderWordDetails = (data) => (
    <div className="card" style={{ padding: 'var(--space-6)' }}>
      <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
        <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
          <h2 className="h2" style={{ margin: 0 }}>{data.word}</h2>
          {data.phonetic && (
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>/{data.phonetic}/</span>
          )}
          {data._local && (
            <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Word of the Day</span>
          )}
        </div>
        <div className="flex" style={{ gap: 'var(--space-2)' }}>
          <ViewOnly tooltip="Sign up to use audio pronunciation">
            <button onClick={handleSpeak} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }} title="Pronounce">
              {isSpeaking ? <Pause size={20} /> : <Volume2 size={20} />}
            </button>
          </ViewOnly>
          <ViewOnly tooltip="Sign up to save favorites">
            <button onClick={() => toggleFavorite(data.word)} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}>
              <Star size={20} style={{
                fill: isFavorite(data.word) ? 'var(--color-warning)' : 'none',
                color: isFavorite(data.word) ? 'var(--color-warning)' : 'var(--color-text-muted)',
              }} />
            </button>
          </ViewOnly>
        </div>
      </div>

      {data.meanings.map((meaning, idx) => (
        <div key={idx} style={{ marginBottom: 'var(--space-4)' }}>
          <div style={{
            display: 'inline-block',
            padding: 'var(--space-1) var(--space-3)',
            borderRadius: 'var(--radius-full)',
            background: 'var(--color-primary-light)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 600,
            color: 'var(--color-primary)',
            marginBottom: 'var(--space-2)',
          }}>
            {meaning.partOfSpeech || '—'}
          </div>

          {(meaning.definitions || []).map((def, i) => (
            <div key={i} style={{
              padding: 'var(--space-2) var(--space-3)',
              borderBottom: i < meaning.definitions.length - 1 ? '1px solid var(--color-border-light)' : 'none',
            }}>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                {i + 1}. {def.definition}
              </div>
              {def.example && (
                <div style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-muted)',
                  fontStyle: 'italic',
                  marginTop: 'var(--space-1)',
                  paddingLeft: 'var(--space-4)',
                }}>"{def.example}"</div>
              )}
              {def.synonyms?.length > 0 && (
                <div style={{ marginTop: 'var(--space-1)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                  <strong>Synonyms:</strong> {def.synonyms.join(', ')}
                </div>
              )}
              {def.antonyms?.length > 0 && (
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                  <strong>Antonyms:</strong> {def.antonyms.join(', ')}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}

      {Array.isArray(data.sourceUrls) && data.sourceUrls.length > 0 && (
        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-3)' }}>
          <a href={data.sourceUrls[0]} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>
            <ExternalLink size={14} style={{ display: 'inline' }} /> Source
          </a>
        </div>
      )}
    </div>
  )

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <BookOpen size={24} style={{ color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Dictionary</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                Explore words, definitions, and pronunciations
              </p>
            </div>
          </div>
          <ViewOnly tooltip="Sign up to go back">
            <button onClick={() => onNavigate?.('dashboard')} className="btn btn-ghost">
              <ArrowLeft size={16} /> Back
            </button>
          </ViewOnly>
        </div>

        <div className="card" style={{
          marginBottom: 'var(--space-4)',
          padding: 'var(--space-4)',
          background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-surface) 100%)',
          border: '2px solid var(--color-primary)',
        }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'flex-start' }}>
            <div className="flex-center" style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'var(--color-primary)', color: 'white',
              fontWeight: 700, fontSize: 'var(--font-size-sm)', flexShrink: 0,
            }}>💡</div>
            <div style={{ flex: 1 }}>
              <div className="flex-between">
                <div>
                  <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, fontSize: 'var(--font-size-lg)' }}>{WORD_OF_THE_DAY.word}</span>
                    <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>
                      <Sparkles size={12} /> Word of the Day
                    </span>
                  </div>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
                    {WORD_OF_THE_DAY.definition}
                  </div>
                  {WORD_OF_THE_DAY.example && (
                    <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', fontStyle: 'italic', marginTop: 'var(--space-1)' }}>
                      "{WORD_OF_THE_DAY.example}"
                    </div>
                  )}
                </div>
                <ViewOnly tooltip="Sign up to look up the word of the day">
                  <button onClick={showWordOfTheDay} className="btn btn-primary" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)', flexShrink: 0 }}>
                    <Search size={14} /> Learn
                  </button>
                </ViewOnly>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
          <form onSubmit={handleSearch} className="flex" style={{ gap: 'var(--space-3)' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <Search size={18} style={{
                position: 'absolute', left: 'var(--space-3)', top: '50%',
                transform: 'translateY(-50%)', color: 'var(--color-text-muted)',
              }} />
              <input
                type="text"
                className="input"
                placeholder="Search for a word..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ paddingLeft: 'var(--space-10)', fontSize: 'var(--font-size-base)' }}
              />
            </div>
            <ViewOnly tooltip="Sign up to search the dictionary">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? <Loader2 size={18} className="animate-spin" /> : <Search size={18} />}
              </button>
            </ViewOnly>
          </form>

          {recentSearches.length > 0 && !wordData && (
            <div style={{ marginTop: 'var(--space-3)' }}>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
                Recent searches:
              </div>
              <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                {recentSearches.map((w) => (
                  <ViewOnly key={w} tooltip="Sign up to search">
                    <button onClick={() => { setSearchQuery(w); lookupWord(w) }} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-2)' }}>
                      {w}
                    </button>
                  </ViewOnly>
                ))}
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <AlertCircle size={20} />
              <span>
                {error}
                {error.includes('busy') && (
                  <span style={{ display: 'block', fontSize: 'var(--font-size-xs)', marginTop: 4 }}>
                    The dictionary service is slow right now. Try again in a moment.
                  </span>
                )}
              </span>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex-center" style={{ padding: 'var(--space-8)' }}>
            <Loader2 size={32} className="animate-spin" />
          </div>
        ) : wordData ? (
          renderWordDetails(wordData)
        ) : (
          <div className="card text-center" style={{ padding: 'var(--space-8)' }}>
            <BookOpen size={48} style={{ margin: '0 auto var(--space-3)', opacity: 0.3, color: 'var(--color-text-muted)' }} />
            <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>Search for a Word</h3>
            <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
              Enter any word to find its definition, pronunciation, and examples
            </p>
            <div className="flex" style={{ gap: 'var(--space-2)', justifyContent: 'center', marginTop: 'var(--space-4)', flexWrap: 'wrap' }}>
              {['perseverance', 'ubiquitous', 'resilience', 'synergy'].map((w) => (
                <ViewOnly key={w} tooltip="Sign up to search">
                  <button onClick={() => { setSearchQuery(w); lookupWord(w) }} className="btn btn-outline" style={{ fontSize: 'var(--font-size-sm)' }}>
                    {w}
                  </button>
                </ViewOnly>
              ))}
            </div>
          </div>
        )}

        {favorites.length > 0 && (
          <div className="card" style={{ marginTop: 'var(--space-4)', padding: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
              <Star size={18} style={{ color: 'var(--color-warning)' }} />
              <span style={{ fontWeight: 600 }}>Favorites</span>
              <span className="badge badge-muted">{favorites.length}</span>
            </div>
            <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              {favorites.map((w) => (
                <ViewOnly key={w} tooltip="Sign up to search">
                  <button onClick={() => { setSearchQuery(w); lookupWord(w) }} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>
                    {w}
                  </button>
                </ViewOnly>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
