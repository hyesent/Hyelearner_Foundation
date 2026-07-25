// ============================================================
// HYELEARNER: FOUNDATION — FORMULA EXPLORER PAGE
// Interactive formula database with calculator + Periodic Table
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, 
  Calculator,
  Search,
  BookOpen,
  Target,
  Zap,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Filter,
  ChevronDown,
  ChevronUp,
  X,
  Plus,
  Minus,
  Divide,
  Equal,
  RefreshCw,
  Info,
  Lightbulb,
  BookMarked,
  TrendingUp,
  Clock,
  Hash,
  ArrowRight,
  Atom
} from 'lucide-react'
import { LoadingScreen } from '../components/LoadingScreen'
import { FORMULA_DATA } from '../data/formulas'
import { PERIODIC_TABLE, getCategories, getElementsByCategory } from '../data/periodicTable/index'

export function FormulaExplorerPage() {
  const navigate = useNavigate()
  
  // State
  const [activeTab, setActiveTab] = useState('formulas')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [selectedTopic, setSelectedTopic] = useState('all')
  const [selectedFormula, setSelectedFormula] = useState(null)
  const [showCalculator, setShowCalculator] = useState(false)
  const [variableValues, setVariableValues] = useState({})
  const [calculationResult, setCalculationResult] = useState(null)
  const [calculationError, setCalculationError] = useState(null)
  const [expandedTopics, setExpandedTopics] = useState({})
  
  // Periodic Table state
  const [selectedElement, setSelectedElement] = useState(null)
  const [periodicFilter, setPeriodicFilter] = useState('all')
  const [periodicSearch, setPeriodicSearch] = useState('')
  
  // Get all subjects from data
  const subjects = ['all', ...new Set(FORMULA_DATA.map(f => f.subject))]
  
  // Get topics for selected subject
  const topics = selectedSubject === 'all' 
    ? ['all', ...new Set(FORMULA_DATA.map(f => f.topic))]
    : ['all', ...new Set(FORMULA_DATA.filter(f => f.subject === selectedSubject).map(f => f.topic))]
  
  // Filter formulas
  const filteredFormulas = FORMULA_DATA.filter(f => {
    const displayText = f.displayFormula || f.formula
    const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         displayText.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         f.description?.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSubject = selectedSubject === 'all' || f.subject === selectedSubject
    const matchesTopic = selectedTopic === 'all' || f.topic === selectedTopic
    return matchesSearch && matchesSubject && matchesTopic
  })

  // Group formulas by topic
  const groupedFormulas = filteredFormulas.reduce((acc, f) => {
    const key = f.topic
    if (!acc[key]) acc[key] = []
    acc[key].push(f)
    return acc
  }, {})

  const sortedTopics = Object.keys(groupedFormulas).sort()

  // Filter periodic elements
  const filteredElements = Object.entries(PERIODIC_TABLE).filter(([symbol, element]) => {
    const matchesFilter = periodicFilter === 'all' || element.category === periodicFilter
    const matchesSearch = !periodicSearch || 
      element.name.toLowerCase().includes(periodicSearch.toLowerCase()) ||
      symbol.toLowerCase().includes(periodicSearch.toLowerCase()) ||
      String(element.atomicNumber).includes(periodicSearch)
    return matchesFilter && matchesSearch
  })

  const visibleElementNumbers = new Set(filteredElements.map(([_, el]) => el.atomicNumber))

  // ============================================================
  // CALCULATOR
  // ============================================================
  const handleCalculate = (formula) => {
    setSelectedFormula(formula)
    setShowCalculator(true)
    setVariableValues({})
    setCalculationResult(null)
    setCalculationError(null)
    if (formula.example && Object.keys(formula.example).length > 0) {
      setVariableValues(formula.example)
    }
  }

  const handleVariableChange = (key, value) => {
    if (value === '') {
      setVariableValues(prev => ({ ...prev, [key]: '' }))
      setCalculationResult(null)
      setCalculationError(null)
      return
    }
    const numValue = parseFloat(value)
    if (!isNaN(numValue)) {
      setVariableValues(prev => ({ ...prev, [key]: numValue }))
      setCalculationResult(null)
      setCalculationError(null)
    }
  }

  const evaluateFormula = (formulaStr, variables) => {
    let evalStr = formulaStr
    evalStr = evalStr.replace(/π/g, `(${Math.PI})`)
    evalStr = evalStr.replace(/√/g, 'Math.sqrt')
    evalStr = evalStr.replace(/sin\(/g, 'Math.sin(')
    evalStr = evalStr.replace(/cos\(/g, 'Math.cos(')
    evalStr = evalStr.replace(/tan\(/g, 'Math.tan(')
    evalStr = evalStr.replace(/ln\(/g, 'Math.log(')
    evalStr = evalStr.replace(/log\(/g, 'Math.log10(')
    evalStr = evalStr.replace(/e\^/g, 'Math.exp')
    evalStr = evalStr.replace(/\^/g, '**')
    
    Object.keys(variables).forEach(key => {
      const value = variables[key]
      if (value !== undefined && value !== '' && !isNaN(parseFloat(value))) {
        const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const regex = new RegExp(`\\b${escapedKey}\\b`, 'g')
        evalStr = evalStr.replace(regex, `(${parseFloat(value)})`)
      }
    })
    
    return Function(`"use strict"; return (${evalStr})`)()
  }

  const isValidNumber = (val) => {
    return val !== undefined && val !== '' && !isNaN(parseFloat(val)) && isFinite(val)
  }

  const handleCalculateResult = () => {
    if (!selectedFormula) return
    
    try {
      if (selectedFormula.evaluable === false) {
        setCalculationError('This formula cannot be calculated automatically.')
        setCalculationResult(null)
        return
      }
      
      const varKeys = Object.keys(selectedFormula.variables || {})
      const missingVars = varKeys.filter(key => {
        const val = variableValues[key]
        return val === undefined || val === '' || isNaN(parseFloat(val))
      })
      
      if (missingVars.length > 0) {
        setCalculationError(`Please enter values for: ${missingVars.join(', ')}`)
        setCalculationResult(null)
        return
      }
      
      let finalVars = { ...variableValues }
      let preCalcResult = null
      
      if (selectedFormula.preCalculate) {
        preCalcResult = selectedFormula.preCalculate(variableValues)
        Object.keys(preCalcResult).forEach(key => {
          if (preCalcResult[key] !== undefined && variableValues[key] === undefined) {
            setVariableValues(prev => ({ ...prev, [key]: preCalcResult[key] }))
          }
        })
        finalVars = { ...finalVars, ...preCalcResult }
        
        if (preCalcResult.x !== undefined && preCalcResult.y !== undefined) {
          if (isValidNumber(preCalcResult.x) && isValidNumber(preCalcResult.y)) {
            setCalculationResult({
              type: 'multiple',
              values: { x: parseFloat(preCalcResult.x), y: parseFloat(preCalcResult.y) }
            })
            setCalculationError(null)
            return
          } else {
            setCalculationResult({
              type: 'message',
              message: typeof preCalcResult.x === 'string' ? preCalcResult.x : 'No unique solution'
            })
            setCalculationError(null)
            return
          }
        }
        
        const resultKeys = Object.keys(preCalcResult).filter(k => 
          k !== 'det' && k !== 'status' && k !== 'ratio1' && k !== 'ratio2' && k !== 'ratio3'
        )
        if (resultKeys.length > 1 && resultKeys.every(k => isValidNumber(preCalcResult[k]))) {
          const values = {}
          resultKeys.forEach(k => { values[k] = parseFloat(preCalcResult[k]) })
          setCalculationResult({ type: 'multiple', values })
          setCalculationError(null)
          return
        }
      }
      
      const result = evaluateFormula(selectedFormula.formula, finalVars)
      if (isNaN(result) || !isFinite(result)) throw new Error('Invalid calculation')
      
      const roundedResult = Math.round(result * 1000000) / 1000000
      
      if (preCalcResult && preCalcResult.det !== undefined) {
        setCalculationResult({
          type: 'multiple',
          values: { result: roundedResult },
          extras: { determinant: preCalcResult.det, status: preCalcResult.status }
        })
      } else {
        setCalculationResult({ type: 'single', value: roundedResult })
      }
      setCalculationError(null)
    } catch (err) {
      setCalculationError(`Calculation error: ${err.message || 'Invalid input.'}`)
      setCalculationResult(null)
    }
  }

  const toggleTopic = (topic) => {
    setExpandedTopics(prev => ({ ...prev, [topic]: !prev[topic] }))
  }

  useEffect(() => {
    if (filteredFormulas.length > 0 && filteredFormulas.length < 20) {
      const newExpanded = {}
      Object.keys(groupedFormulas).forEach(topic => { newExpanded[topic] = true })
      setExpandedTopics(newExpanded)
    }
  }, [searchQuery, selectedSubject, selectedTopic])

  const renderResult = () => {
    if (!calculationResult) return null

    if (calculationResult.type === 'multiple') {
      const { values, extras } = calculationResult
      const entries = Object.entries(values)
      return (
        <div className="success-card" style={{ padding: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
            <CheckCircle2 style={{ width: '20px', height: '20px', color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} />
            <div style={{ width: '100%' }}>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Result</div>
              <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: '700', color: 'var(--color-success)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', marginTop: 'var(--space-1)' }}>
                {entries.map(([key, val]) => (
                  <span key={key} style={{ background: 'var(--color-success-light)', padding: 'var(--space-1) var(--space-3)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                    <span style={{ fontWeight: '600', fontFamily: 'var(--font-mono)' }}>{key}</span>
                    <span>=</span>
                    <span>{typeof val === 'number' ? Math.round(val * 1000000) / 1000000 : val}</span>
                  </span>
                ))}
              </div>
              {extras && Object.keys(extras).length > 0 && (
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                  {Object.entries(extras).map(([key, val]) => (
                    <span key={key} style={{ background: 'var(--color-background)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)' }}>
                      {key}: {typeof val === 'number' ? Math.round(val * 1000000) / 1000000 : String(val)}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }

    if (calculationResult.type === 'message') {
      return (
        <div className="info-card" style={{ padding: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <Info style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: '500' }}>{calculationResult.message}</span>
          </div>
        </div>
      )
    }

    return (
      <div className="success-card" style={{ padding: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <CheckCircle2 style={{ width: '20px', height: '20px', color: 'var(--color-success)' }} />
          <div style={{ width: '100%' }}>
            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Result</div>
            <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: '700', color: 'var(--color-success)' }}>
              {calculationResult.value}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        
        {/* Header */}
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-success-light)' }}>
              {activeTab === 'formulas' ? (
                <Calculator style={{ width: '24px', height: '24px', color: 'var(--color-success)' }} />
              ) : (
                <Atom style={{ width: '24px', height: '24px', color: 'var(--color-success)' }} />
              )}
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>
                {activeTab === 'formulas' ? 'Formula Explorer' : 'Periodic Table'}
              </h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                {activeTab === 'formulas' 
                  ? `${FORMULA_DATA.length} formulas across ${subjects.length - 1} subjects`
                  : '118 elements • Interactive periodic table'
                }
              </p>
            </div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="btn btn-ghost">
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
        </div>

        {/* Toggle Tabs */}
        <div className="flex" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`btn ${activeTab === 'formulas' ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: 'var(--space-2) var(--space-4)' }}
          >
            <Calculator style={{ width: '16px', height: '16px' }} /> Formulas
          </button>
          <button
            onClick={() => setActiveTab('periodic')}
            className={`btn ${activeTab === 'periodic' ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: 'var(--space-2) var(--space-4)' }}
          >
            <Atom style={{ width: '16px', height: '16px' }} /> Periodic Table
          </button>
        </div>

        {/* ============================================================
            FORMULAS TAB
        ============================================================ */}
        {activeTab === 'formulas' && (
          <>
            {/* Search & Filters */}
            <div className="card" style={{ padding: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
              <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '180px', position: 'relative' }}>
                  <Search style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
                  <input type="text" className="input" placeholder="Search formulas..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ paddingLeft: 'var(--space-10)' }} />
                </div>
                <select className="select" value={selectedSubject} onChange={(e) => { setSelectedSubject(e.target.value); setSelectedTopic('all') }} style={{ minWidth: '140px' }}>
                  <option value="all">All Subjects</option>
                  {subjects.filter(s => s !== 'all').map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <select className="select" value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)} style={{ minWidth: '140px' }}>
                  <option value="all">All Topics</option>
                  {topics.filter(t => t !== 'all').map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <button onClick={() => { setSearchQuery(''); setSelectedSubject('all'); setSelectedTopic('all') }} className="btn btn-outline" style={{ padding: 'var(--space-2) var(--space-4)' }}>
                  <RefreshCw style={{ width: '16px', height: '16px' }} /> Reset
                </button>
              </div>
            </div>

            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)' }}>
              {filteredFormulas.length} formula{filteredFormulas.length !== 1 ? 's' : ''} found
              {selectedSubject !== 'all' && ` in ${selectedSubject}`}
              {selectedTopic !== 'all' && ` • ${selectedTopic}`}
            </div>

            {filteredFormulas.length === 0 ? (
              <div className="card text-center" style={{ padding: 'var(--space-8)' }}>
                <Calculator style={{ width: '48px', height: '48px', margin: '0 auto var(--space-3)', opacity: '0.3' }} />
                <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>No Formulas Found</h3>
                <p className="text-muted">Try adjusting your search or filters</p>
                <button onClick={() => { setSearchQuery(''); setSelectedSubject('all'); setSelectedTopic('all') }} className="btn btn-primary" style={{ marginTop: 'var(--space-3)' }}>
                  <RefreshCw style={{ width: '16px', height: '16px' }} /> Reset Filters
                </button>
              </div>
            ) : (
              <div className="stack" style={{ gap: 'var(--space-3)' }}>
                {sortedTopics.map((topic) => (
                  <div key={topic} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                    <button onClick={() => toggleTopic(topic)} className="flex-between" style={{ width: '100%', padding: 'var(--space-3) var(--space-4)', background: 'var(--color-background)', border: 'none', cursor: 'pointer', borderBottom: expandedTopics[topic] ? '1px solid var(--color-border)' : 'none' }}>
                      <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>
                        {topic}
                        <span className="badge badge-muted" style={{ marginLeft: 'var(--space-2)', fontSize: 'var(--font-size-xs)' }}>{groupedFormulas[topic].length}</span>
                      </span>
                      {expandedTopics[topic] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    {expandedTopics[topic] && (
                      <div className="stack" style={{ gap: 'var(--space-2)', padding: 'var(--space-3)' }}>
                        {groupedFormulas[topic].map((formula, idx) => {
                          const displayFormula = formula.displayFormula || formula.formula
                          const isEvaluable = formula.evaluable !== false && Object.keys(formula.variables || {}).length > 0
                          return (
                            <div key={idx} className="card" style={{ padding: 'var(--space-3) var(--space-4)', border: '1px solid var(--color-border)' }}>
                              <div className="flex-between" style={{ alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div className="flex" style={{ alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                                    <div style={{ fontWeight: '600', fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>{formula.name}</div>
                                    {!isEvaluable && <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}><Info style={{ width: '12px', height: '12px', display: 'inline', marginRight: '2px' }} />Display Only</span>}
                                  </div>
                                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-lg)', color: 'var(--color-primary)', marginTop: 'var(--space-1)', wordBreak: 'break-all' }}>{displayFormula}</div>
                                  {formula.description && <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>{formula.description}</div>}
                                </div>
                                {isEvaluable && (
                                  <button onClick={() => handleCalculate(formula)} className="btn btn-primary" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)', flexShrink: 0 }}>
                                    <Calculator style={{ width: '16px', height: '16px' }} /> Calculate
                                  </button>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Calculator Modal */}
            {showCalculator && selectedFormula && (
              <div className="modal-overlay" style={{ zIndex: 100, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
                <div className="modal" style={{ maxWidth: '560px', width: '100%', maxHeight: '90vh', overflow: 'auto', padding: 'var(--space-6)', background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
                  <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
                    <div>
                      <h3 className="h3" style={{ margin: 0 }}>{selectedFormula.name}</h3>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-md)', color: 'var(--color-primary)', marginTop: 'var(--space-1)' }}>
                        {selectedFormula.displayFormula || selectedFormula.formula}
                      </div>
                    </div>
                    <button onClick={() => { setShowCalculator(false); setSelectedFormula(null) }} className="btn btn-ghost" style={{ padding: 'var(--space-1)' }}>
                      <X style={{ width: '20px', height: '20px' }} />
                    </button>
                  </div>

                  {selectedFormula.variables && Object.keys(selectedFormula.variables).length > 0 ? (
                    <div className="stack" style={{ gap: 'var(--space-3)' }}>
                      {Object.entries(selectedFormula.variables).map(([key, description]) => (
                        <div key={key}>
                          <label className="label" style={{ fontSize: 'var(--font-size-sm)', display: 'flex', justifyContent: 'space-between' }}>
                            <span><span style={{ fontFamily: 'var(--font-mono)', fontWeight: '600' }}>{key}</span> — {description}</span>
                          </label>
                          <input type="number" className="input" step="any" value={variableValues[key] !== undefined && variableValues[key] !== '' ? variableValues[key] : ''} onChange={(e) => handleVariableChange(key, e.target.value)} placeholder={`Enter ${key}`} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="info-card" style={{ padding: 'var(--space-3)' }}>
                      <Info style={{ width: '16px', height: '16px', color: 'var(--color-primary)', display: 'inline', marginRight: 'var(--space-2)' }} />
                      No variables to input.
                    </div>
                  )}

                  {calculationResult && renderResult()}
                  {calculationError && (
                    <div className="danger-card" style={{ padding: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
                      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                        <AlertCircle style={{ width: '20px', height: '20px' }} />
                        <span>{calculationError}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex" style={{ gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
                    <button onClick={handleCalculateResult} className="btn btn-primary flex-1" disabled={Object.keys(selectedFormula.variables || {}).length === 0 || selectedFormula.evaluable === false}>
                      <Equal style={{ width: '16px', height: '16px' }} /> Calculate
                    </button>
                    <button onClick={() => { setVariableValues(selectedFormula.example || {}); setCalculationResult(null); setCalculationError(null) }} className="btn btn-outline">
                      <RefreshCw style={{ width: '16px', height: '16px' }} /> Reset
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* ============================================================
            PERIODIC TABLE TAB
        ============================================================ */}
        {activeTab === 'periodic' && (
          <>
            {/* Periodic Controls */}
            <div className="card" style={{ padding: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
              <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '180px', position: 'relative' }}>
                  <Search style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
                  <input type="text" className="input" placeholder="Search elements..." value={periodicSearch} onChange={(e) => setPeriodicSearch(e.target.value)} style={{ paddingLeft: 'var(--space-10)' }} />
                </div>
                <select className="select" value={periodicFilter} onChange={(e) => setPeriodicFilter(e.target.value)} style={{ minWidth: '160px' }}>
                  <option value="all">All Categories</option>
                  {getCategories().map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <button onClick={() => { setPeriodicSearch(''); setPeriodicFilter('all') }} className="btn btn-outline" style={{ padding: 'var(--space-2) var(--space-4)' }}>
                  <RefreshCw style={{ width: '16px', height: '16px' }} /> Reset
                </button>
              </div>
            </div>

            {/* Legend */}
            <div className="card" style={{ padding: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
              <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', marginBottom: 'var(--space-2)' }}>Legend</div>
              <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                {getCategories().map(cat => {
                  const sample = getElementsByCategory(cat)[0]
                  return (
                    <span key={cat} className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center', fontSize: 'var(--font-size-xs)' }}>
                      <span style={{ width: '14px', height: '14px', background: sample?.color || '#999', borderRadius: '2px', border: '1px solid var(--color-border)' }} />
                      {cat}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Periodic Table Grid */}
            <div className="card" style={{ padding: 'var(--space-4)', overflowX: 'auto' }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(18, 1fr)', 
                gap: '3px',
                minWidth: '950px'
              }}>
                {/* Row labels */}
                {Array.from({ length: 7 }, (_, i) => (
                  <div key={`row-${i}`} style={{ 
                    gridColumn: 1, 
                    gridRow: i + 1, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-text-muted)',
                    fontWeight: '600'
                  }}>
                    {i + 1}
                  </div>
                ))}
                
                {Array.from({ length: 118 }, (_, i) => i + 1).map(num => {
                  const element = Object.values(PERIODIC_TABLE).find(el => el.atomicNumber === num)
                  if (!element) return <div key={num} />
                  
                  const isVisible = visibleElementNumbers.has(num)
                  const isSelected = selectedElement?.atomicNumber === num
                  
                  let gridColumn = element.group
                  let gridRow = element.period
                  
                  // Lanthanides
                  if (num >= 57 && num <= 71) {
                    gridRow = 8
                    gridColumn = num - 54
                  }
                  // Actinides
                  if (num >= 89 && num <= 103) {
                    gridRow = 9
                    gridColumn = num - 86
                  }
                  
                  return (
                    <button
                      key={num}
                      onClick={() => isVisible && setSelectedElement(element)}
                      style={{
                        gridColumn,
                        gridRow,
                        padding: '3px',
                        minWidth: '48px',
                        minHeight: '48px',
                        background: isVisible ? (element.color || '#333') : 'var(--color-border)',
                        border: isSelected ? '3px solid var(--color-primary)' : '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        cursor: isVisible ? 'pointer' : 'default',
                        opacity: isVisible ? 1 : 0.15,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '9px',
                        fontWeight: '600',
                        transition: 'all 0.15s',
                        color: isVisible ? '#000' : 'transparent'
                      }}
                      disabled={!isVisible}
                      title={isVisible ? `${element.name} (${element.symbol})` : ''}
                    >
                      <span style={{ fontSize: '7px' }}>{element.atomicNumber}</span>
                      <span style={{ fontSize: '13px', fontWeight: '700', lineHeight: 1.1 }}>{element.symbol}</span>
                    </button>
                  )
                })}
                
                {/* Lanthanide/Actinide labels */}
                <div style={{ gridColumn: 1, gridRow: 8, fontSize: '8px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center' }}>La</div>
                <div style={{ gridColumn: 1, gridRow: 9, fontSize: '8px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center' }}>Ac</div>
              </div>
            </div>

            {/* Element Detail Modal */}
            {selectedElement && (
              <div className="modal-overlay" style={{ zIndex: 100 }}>
                <div className="modal" style={{ maxWidth: '480px', padding: 'var(--space-6)' }}>
                  <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
                    <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                      <div style={{ 
                        width: '64px', height: '64px', 
                        background: selectedElement.color || '#333',
                        borderRadius: 'var(--radius-lg)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 'var(--font-size-2xl)', fontWeight: '700',
                        color: '#000', border: '2px solid var(--color-border)'
                      }}>
                        {selectedElement.symbol}
                      </div>
                      <div>
                        <h3 className="h2" style={{ margin: 0 }}>{selectedElement.name}</h3>
                        <p className="text-muted">Atomic Number: {selectedElement.atomicNumber}</p>
                      </div>
                    </div>
                    <button onClick={() => setSelectedElement(null)} className="btn btn-ghost">
                      <X style={{ width: '20px', height: '20px' }} />
                    </button>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                    {[
                      ['Atomic Mass', selectedElement.atomicMass],
                      ['Category', selectedElement.category],
                      ['Group', selectedElement.group],
                      ['Period', selectedElement.period],
                      ['Block', selectedElement.block],
                      ['State at 20°C', selectedElement.state],
                      ['Electronegativity', selectedElement.electronegativity ?? 'N/A'],
                      ['Atomic Radius', `${selectedElement.atomicRadius} pm`],
                      ['Melting Point', `${selectedElement.meltingPoint}°C`],
                      ['Boiling Point', `${selectedElement.boilingPoint}°C`],
                      ['Density', `${selectedElement.density} g/cm³`],
                      ['Discovered', selectedElement.yearDiscovered],
                    ].map(([label, value]) => (
                      <div key={label} style={{ padding: 'var(--space-2)', background: 'var(--color-background)', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{label}</div>
                        <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600' }}>{value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div style={{ marginBottom: 'var(--space-3)' }}>
                    <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', marginBottom: 'var(--space-1)' }}>Electron Configuration</div>
                    <code style={{ background: 'var(--color-background)', padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--font-size-sm)', display: 'block' }}>
                      {selectedElement.electronConfiguration}
                    </code>
                  </div>
                  
                  <div style={{ marginBottom: 'var(--space-4)' }}>
                    <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', marginBottom: 'var(--space-1)' }}>Description</div>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {selectedElement.description}
                    </p>
                  </div>
                  
                  <button onClick={() => setSelectedElement(null)} className="btn btn-primary" style={{ width: '100%' }}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}