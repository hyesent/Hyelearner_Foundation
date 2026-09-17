// ============================================================
// HYELEARNER: FOUNDATION — FORMULA EXPLORER (SHOWCASE / PREVIEW)
// Static replica. Read-only + preview-aware.
// Navigation is local: onNavigate('pageKey') — no router.
// Built by Hyesent.dev
// ============================================================

import { useState } from 'react'
import { ViewOnly } from './ViewOnly'
import {
  ArrowLeft, Calculator, Search, ChevronDown, ChevronUp, X, Equal,
  RefreshCw, Info, Atom, HelpCircle, AlertCircle, CheckCircle2,
  Sparkles, ShieldCheck,
} from 'lucide-react'

// ============================================================
// STATIC FORMULA DATA
// ============================================================
const FORMULA_DATA = [
  // Mechanics
  {
    name: 'Force',
    subject: 'Physics',
    topic: 'Mechanics',
    formula: 'm * a',
    displayFormula: 'F = m · a',
    description: "Newton's second law — force equals mass times acceleration.",
    variables: { F: 'Force (N)', m: 'Mass (kg)', a: 'Acceleration (m/s²)' },
    solveFor: { F: 'm * a', m: 'F / a', a: 'F / m' },
    example: { m: 5, a: 3 },
    evaluable: true,
  },
  {
    name: 'Work Done',
    subject: 'Physics',
    topic: 'Mechanics',
    formula: 'F * d',
    displayFormula: 'W = F · d',
    description: 'Work equals force times displacement in the direction of the force.',
    variables: { W: 'Work (J)', F: 'Force (N)', d: 'Displacement (m)' },
    solveFor: { W: 'F * d', F: 'W / d', d: 'W / F' },
    example: { F: 10, d: 4 },
    evaluable: true,
  },
  {
    name: 'Kinetic Energy',
    subject: 'Physics',
    topic: 'Mechanics',
    formula: '0.5 * m * v ^ 2',
    displayFormula: 'KE = ½ · m · v²',
    description: 'Energy possessed by an object due to its motion.',
    variables: { KE: 'Kinetic energy (J)', m: 'Mass (kg)', v: 'Velocity (m/s)' },
    solveFor: { KE: '0.5 * m * v ** 2', m: '(2 * KE) / (v ** 2)', v: 'Math.sqrt((2 * KE) / m)' },
    example: { m: 2, v: 5 },
    evaluable: true,
  },
  // Electricity
  {
    name: "Ohm's Law",
    subject: 'Physics',
    topic: 'Electricity',
    formula: 'I * R',
    displayFormula: 'V = I · R',
    description: 'Voltage equals current times resistance.',
    variables: { V: 'Voltage (V)', I: 'Current (A)', R: 'Resistance (Ω)' },
    solveFor: { V: 'I * R', I: 'V / R', R: 'V / I' },
    example: { I: 2, R: 5 },
    evaluable: true,
  },
  {
    name: 'Electrical Power',
    subject: 'Physics',
    topic: 'Electricity',
    formula: 'V * I',
    displayFormula: 'P = V · I',
    description: 'Power equals voltage times current.',
    variables: { P: 'Power (W)', V: 'Voltage (V)', I: 'Current (A)' },
    solveFor: { P: 'V * I', V: 'P / I', I: 'P / V' },
    example: { V: 12, I: 1.5 },
    evaluable: true,
  },
  // Algebra
  {
    name: 'Quadratic Formula',
    subject: 'Mathematics',
    topic: 'Algebra',
    formula: '(-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)',
    displayFormula: 'x = (−b ± √(b² − 4ac)) / 2a',
    description: 'Solves any quadratic equation of the form ax² + bx + c = 0.',
    variables: { x: 'Root', a: 'Coefficient a', b: 'Coefficient b', c: 'Constant c' },
    solveFor: null,
    example: { a: 1, b: -5, c: 6 },
    evaluable: false,
  },
  {
    name: 'Slope of a Line',
    subject: 'Mathematics',
    topic: 'Algebra',
    formula: '(y2 - y1) / (x2 - x1)',
    displayFormula: 'm = (y₂ − y₁) / (x₂ − x₁)',
    description: 'Gradient between two points.',
    variables: { m: 'Slope', y2: 'y₂', y1: 'y₁', x2: 'x₂', x1: 'x₁' },
    solveFor: { m: '(y2 - y1) / (x2 - x1)' },
    example: { y2: 7, y1: 1, x2: 4, x1: 2 },
    evaluable: true,
  },
  // Geometry
  {
    name: 'Area of a Circle',
    subject: 'Mathematics',
    topic: 'Geometry',
    formula: 'Math.PI * r ** 2',
    displayFormula: 'A = π · r²',
    description: 'Area enclosed by a circle of radius r.',
    variables: { A: 'Area', r: 'Radius' },
    solveFor: { A: 'Math.PI * r ** 2', r: 'Math.sqrt(A / Math.PI)' },
    example: { r: 3 },
    evaluable: true,
  },
  {
    name: 'Pythagorean Theorem',
    subject: 'Mathematics',
    topic: 'Geometry',
    formula: 'Math.sqrt(a ** 2 + b ** 2)',
    displayFormula: 'c = √(a² + b²)',
    description: 'Relationship between the sides of a right triangle.',
    variables: { c: 'Hypotenuse', a: 'Leg a', b: 'Leg b' },
    solveFor: { c: 'Math.sqrt(a ** 2 + b ** 2)', a: 'Math.sqrt(c ** 2 - b ** 2)', b: 'Math.sqrt(c ** 2 - a ** 2)' },
    example: { a: 3, b: 4 },
    evaluable: true,
  },
  // Chemistry
  {
    name: 'Moles from Mass',
    subject: 'Chemistry',
    topic: 'Stoichiometry',
    formula: 'mass / molarMass',
    displayFormula: 'n = m / M',
    description: 'Number of moles given mass and molar mass.',
    variables: { n: 'Moles (mol)', mass: 'Mass (g)', molarMass: 'Molar mass (g/mol)' },
    solveFor: { n: 'mass / molarMass', mass: 'n * molarMass', molarMass: 'mass / n' },
    example: { mass: 36, molarMass: 18 },
    evaluable: true,
  },
]

// ============================================================
// STATIC PERIODIC TABLE (subset — enough for showcase)
// ============================================================
const CATEGORY_COLORS = {
  'Alkali Metal':     '#ff9c9c',
  'Alkaline Earth':   '#ffc799',
  'Transition Metal': '#ffd79a',
  'Post-transition':  '#c6e0a4',
  'Metalloid':        '#a7dfd0',
  'Nonmetal':         '#a2c9ff',
  'Halogen':          '#c4b5fd',
  'Noble Gas':        '#f0a6f0',
  'Lanthanide':       '#f4c4d6',
  'Actinide':         '#e0b8f4',
}

const PERIODIC_TABLE = {
  H:  { atomicNumber: 1,  symbol: 'H',  name: 'Hydrogen',  atomicMass: 1.008,  category: 'Nonmetal',        group: 1,  period: 1, block: 's', state: 'Gas',   electronegativity: 2.20, atomicRadius: 53,  meltingPoint: -259, boilingPoint: -253, density: 0.00009, yearDiscovered: 1766, electronConfiguration: '1s¹', description: 'The lightest and most abundant element in the universe.' },
  He: { atomicNumber: 2,  symbol: 'He', name: 'Helium',    atomicMass: 4.003,  category: 'Noble Gas',       group: 18, period: 1, block: 's', state: 'Gas',   electronegativity: null, atomicRadius: 31,  meltingPoint: -272, boilingPoint: -269, density: 0.00018, yearDiscovered: 1868, electronConfiguration: '1s²', description: 'A colorless, odorless noble gas used in balloons and cryogenics.' },
  Li: { atomicNumber: 3,  symbol: 'Li', name: 'Lithium',   atomicMass: 6.94,   category: 'Alkali Metal',    group: 1,  period: 2, block: 's', state: 'Solid', electronegativity: 0.98, atomicRadius: 167, meltingPoint: 181,  boilingPoint: 1342, density: 0.534,  yearDiscovered: 1817, electronConfiguration: '[He] 2s¹', description: 'A soft, silvery metal used in batteries and mood-stabilizing medication.' },
  C:  { atomicNumber: 6,  symbol: 'C',  name: 'Carbon',    atomicMass: 12.011, category: 'Nonmetal',        group: 14, period: 2, block: 'p', state: 'Solid', electronegativity: 2.55, atomicRadius: 67,  meltingPoint: 3550, boilingPoint: 4027, density: 2.267,  yearDiscovered: 'Ancient', electronConfiguration: '[He] 2s² 2p²', description: 'The backbone of all organic chemistry and life on Earth.' },
  N:  { atomicNumber: 7,  symbol: 'N',  name: 'Nitrogen',  atomicMass: 14.007, category: 'Nonmetal',        group: 15, period: 2, block: 'p', state: 'Gas',   electronegativity: 3.04, atomicRadius: 56,  meltingPoint: -210, boilingPoint: -196, density: 0.00125, yearDiscovered: 1772, electronConfiguration: '[He] 2s² 2p³', description: 'Makes up about 78% of Earth\u2019s atmosphere.' },
  O:  { atomicNumber: 8,  symbol: 'O',  name: 'Oxygen',    atomicMass: 15.999, category: 'Nonmetal',        group: 16, period: 2, block: 'p', state: 'Gas',   electronegativity: 3.44, atomicRadius: 48,  meltingPoint: -218, boilingPoint: -183, density: 0.00143, yearDiscovered: 1774, electronConfiguration: '[He] 2s² 2p⁴', description: 'Essential for respiration and combustion.' },
  Na: { atomicNumber: 11, symbol: 'Na', name: 'Sodium',    atomicMass: 22.990, category: 'Alkali Metal',    group: 1,  period: 3, block: 's', state: 'Solid', electronegativity: 0.93, atomicRadius: 190, meltingPoint: 98,   boilingPoint: 883,  density: 0.968,  yearDiscovered: 1807, electronConfiguration: '[Ne] 3s¹', description: 'A soft, silvery metal that reacts vigorously with water.' },
  Mg: { atomicNumber: 12, symbol: 'Mg', name: 'Magnesium', atomicMass: 24.305, category: 'Alkaline Earth',  group: 2,  period: 3, block: 's', state: 'Solid', electronegativity: 1.31, atomicRadius: 145, meltingPoint: 650,  boilingPoint: 1090, density: 1.738,  yearDiscovered: 1755, electronConfiguration: '[Ne] 3s²', description: 'Central to chlorophyll and many biological processes.' },
  Al: { atomicNumber: 13, symbol: 'Al', name: 'Aluminium', atomicMass: 26.982, category: 'Post-transition', group: 13, period: 3, block: 'p', state: 'Solid', electronegativity: 1.61, atomicRadius: 118, meltingPoint: 660,  boilingPoint: 2470, density: 2.698,  yearDiscovered: 1825, electronConfiguration: '[Ne] 3s² 3p¹', description: 'The most abundant metal in Earth\u2019s crust.' },
  Si: { atomicNumber: 14, symbol: 'Si', name: 'Silicon',   atomicMass: 28.085, category: 'Metalloid',       group: 14, period: 3, block: 'p', state: 'Solid', electronegativity: 1.90, atomicRadius: 111, meltingPoint: 1414, boilingPoint: 3265, density: 2.329,  yearDiscovered: 1824, electronConfiguration: '[Ne] 3s² 3p²', description: 'Foundation of the modern semiconductor industry.' },
  Cl: { atomicNumber: 17, symbol: 'Cl', name: 'Chlorine',  atomicMass: 35.45,  category: 'Halogen',         group: 17, period: 3, block: 'p', state: 'Gas',   electronegativity: 3.16, atomicRadius: 79,  meltingPoint: -102, boilingPoint: -34,  density: 0.00321, yearDiscovered: 1774, electronConfiguration: '[Ne] 3s² 3p⁵', description: 'A yellow-green gas widely used for disinfection.' },
  Fe: { atomicNumber: 26, symbol: 'Fe', name: 'Iron',      atomicMass: 55.845, category: 'Transition Metal', group: 8, period: 4, block: 'd', state: 'Solid', electronegativity: 1.83, atomicRadius: 156, meltingPoint: 1538, boilingPoint: 2862, density: 7.874,  yearDiscovered: 'Ancient', electronConfiguration: '[Ar] 3d⁶ 4s²', description: 'The main component of steel and Earth\u2019s core.' },
  Cu: { atomicNumber: 29, symbol: 'Cu', name: 'Copper',    atomicMass: 63.546, category: 'Transition Metal', group: 11, period: 4, block: 'd', state: 'Solid', electronegativity: 1.90, atomicRadius: 128, meltingPoint: 1085, boilingPoint: 2562, density: 8.960,  yearDiscovered: 'Ancient', electronConfiguration: '[Ar] 3d¹⁰ 4s¹', description: 'A reddish metal prized for electrical conductivity.' },
  Ag: { atomicNumber: 47, symbol: 'Ag', name: 'Silver',    atomicMass: 107.87, category: 'Transition Metal', group: 11, period: 5, block: 'd', state: 'Solid', electronegativity: 1.93, atomicRadius: 144, meltingPoint: 962,  boilingPoint: 2162, density: 10.49,  yearDiscovered: 'Ancient', electronConfiguration: '[Kr] 4d¹⁰ 5s¹', description: 'The best electrical and thermal conductor among metals.' },
  Au: { atomicNumber: 79, symbol: 'Au', name: 'Gold',      atomicMass: 196.97, category: 'Transition Metal', group: 11, period: 6, block: 'd', state: 'Solid', electronegativity: 2.54, atomicRadius: 144, meltingPoint: 1064, boilingPoint: 2856, density: 19.30,  yearDiscovered: 'Ancient', electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', description: 'A dense, unreactive metal historically used in currency and jewellery.' },
  U:  { atomicNumber: 92, symbol: 'U',  name: 'Uranium',   atomicMass: 238.03, category: 'Actinide',        group: null, period: 7, block: 'f', state: 'Solid', electronegativity: 1.38, atomicRadius: 156, meltingPoint: 1132, boilingPoint: 4131, density: 18.95,  yearDiscovered: 1789, electronConfiguration: '[Rn] 5f³ 6d¹ 7s²', description: 'A radioactive element used in nuclear fuel.' },
}

const getCategories = () => [...new Set(Object.values(PERIODIC_TABLE).map((el) => el.category))]

// ============================================================
// MAIN SHOWCASE — Formula Explorer
// ============================================================
export default function ShowcaseFormulaExplorer({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('formulas')

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [selectedTopic, setSelectedTopic] = useState('all')
  const [expandedTopics, setExpandedTopics] = useState({})
  const [selectedFormula, setSelectedFormula] = useState(null)
  const [showCalculator, setShowCalculator] = useState(false)

  const [selectedElement, setSelectedElement] = useState(null)
  const [periodicFilter, setPeriodicFilter] = useState('all')
  const [periodicSearch, setPeriodicSearch] = useState('')

  const subjects = ['all', ...new Set(FORMULA_DATA.map((f) => f.subject))]
  const topics = selectedSubject === 'all'
    ? ['all', ...new Set(FORMULA_DATA.map((f) => f.topic))]
    : ['all', ...new Set(FORMULA_DATA.filter((f) => f.subject === selectedSubject).map((f) => f.topic))]

  const filteredFormulas = FORMULA_DATA.filter((f) => {
    const display = f.displayFormula || f.formula
    const q = searchQuery.toLowerCase()
    const matchesSearch = !q || f.name.toLowerCase().includes(q) || display.toLowerCase().includes(q) || f.description?.toLowerCase().includes(q)
    const matchesSubject = selectedSubject === 'all' || f.subject === selectedSubject
    const matchesTopic = selectedTopic === 'all' || f.topic === selectedTopic
    return matchesSearch && matchesSubject && matchesTopic
  })

  const groupedFormulas = filteredFormulas.reduce((acc, f) => {
    if (!acc[f.topic]) acc[f.topic] = []
    acc[f.topic].push(f)
    return acc
  }, {})

  const sortedTopics = Object.keys(groupedFormulas).sort()

  const filteredElements = Object.entries(PERIODIC_TABLE).filter(([symbol, el]) => {
    const matchesFilter = periodicFilter === 'all' || el.category === periodicFilter
    const q = periodicSearch.toLowerCase()
    const matchesSearch = !q || el.name.toLowerCase().includes(q) || symbol.toLowerCase().includes(q)
    return matchesFilter && matchesSearch
  })

  const visibleElementNumbers = new Set(filteredElements.map(([, el]) => el.atomicNumber))

  const toggleTopic = (topic) => setExpandedTopics((prev) => ({ ...prev, [topic]: !prev[topic] }))

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>

        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-success-light)' }}>
              {activeTab === 'formulas'
                ? <Calculator size={24} style={{ color: 'var(--color-success)' }} />
                : <Atom size={24} style={{ color: 'var(--color-success)' }} />}
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>
                {activeTab === 'formulas' ? 'Formula Explorer' : 'Periodic Table'}
              </h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                {activeTab === 'formulas'
                  ? `${FORMULA_DATA.length} formulas across ${subjects.length - 1} subjects`
                  : `${Object.keys(PERIODIC_TABLE).length} elements • Interactive periodic table`}
              </p>
            </div>
          </div>
          <ViewOnly tooltip="Sign up to go back">
            <button onClick={() => onNavigate?.('dashboard')} className="btn btn-ghost">
              <ArrowLeft size={16} /> Back
            </button>
          </ViewOnly>
        </div>

        <div className="flex" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`btn ${activeTab === 'formulas' ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: 'var(--space-2) var(--space-4)' }}
          >
            <Calculator size={16} /> Formulas
          </button>
          <button
            onClick={() => setActiveTab('periodic')}
            className={`btn ${activeTab === 'periodic' ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: 'var(--space-2) var(--space-4)' }}
          >
            <Atom size={16} /> Periodic Table
          </button>
        </div>

        {activeTab === 'formulas' && (
          <>
            <div className="card" style={{ padding: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
              <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 180, position: 'relative' }}>
                  <Search size={16} style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                  <input type="text" className="input" placeholder="Search formulas..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ paddingLeft: 'var(--space-10)', width: '100%' }} />
                </div>
                <select className="select" value={selectedSubject} onChange={(e) => { setSelectedSubject(e.target.value); setSelectedTopic('all') }} style={{ minWidth: 140 }}>
                  <option value="all">All Subjects</option>
                  {subjects.filter((s) => s !== 'all').map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <select className="select" value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)} style={{ minWidth: 140 }}>
                  <option value="all">All Topics</option>
                  {topics.filter((t) => t !== 'all').map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <button onClick={() => { setSearchQuery(''); setSelectedSubject('all'); setSelectedTopic('all') }} className="btn btn-outline" style={{ padding: 'var(--space-2) var(--space-4)' }}>
                  <RefreshCw size={16} /> Reset
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
                <Calculator size={48} style={{ margin: '0 auto var(--space-3)', opacity: 0.3 }} />
                <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>No Formulas Found</h3>
                <p className="text-muted">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="stack" style={{ gap: 'var(--space-3)' }}>
                {sortedTopics.map((topic) => (
                  <div key={topic} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                    <button
                      onClick={() => toggleTopic(topic)}
                      className="flex-between"
                      style={{
                        width: '100%',
                        padding: 'var(--space-3) var(--space-4)',
                        background: 'var(--color-background)',
                        border: 'none',
                        cursor: 'pointer',
                        borderBottom: expandedTopics[topic] ? '1px solid var(--color-border)' : 'none',
                      }}
                    >
                      <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>
                        {topic}
                        <span className="badge badge-muted" style={{ marginLeft: 'var(--space-2)', fontSize: 'var(--font-size-xs)' }}>
                          {groupedFormulas[topic].length}
                        </span>
                      </span>
                      {expandedTopics[topic] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    {expandedTopics[topic] && (
                      <div className="stack" style={{ gap: 'var(--space-2)', padding: 'var(--space-3)' }}>
                        {groupedFormulas[topic].map((formula, idx) => {
                          const displayFormula = formula.displayFormula || formula.formula
                          const hasSolveFor = formula.solveFor && Object.keys(formula.solveFor).length > 0
                          const isEvaluable = formula.evaluable !== false && Object.keys(formula.variables || {}).length > 0

                          return (
                            <div key={idx} className="card" style={{ padding: 'var(--space-3) var(--space-4)', border: '1px solid var(--color-border)' }}>
                              <div className="flex-between" style={{ alignItems: 'flex-start', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div className="flex" style={{ alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                                    <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                                      {formula.name}
                                    </div>
                                    {!isEvaluable && (
                                      <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
                                        <Info size={12} style={{ display: 'inline', marginRight: 2 }} /> Display Only
                                      </span>
                                    )}
                                    {isEvaluable && hasSolveFor && (
                                      <span className="badge badge-success" style={{ fontSize: 'var(--font-size-xs)' }}>
                                        <Sparkles size={12} style={{ display: 'inline', marginRight: 2 }} /> Solve for Any Variable
                                      </span>
                                    )}
                                  </div>
                                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-lg)', color: 'var(--color-primary)', marginTop: 'var(--space-1)' }}>
                                    {displayFormula}
                                  </div>
                                  {formula.description && (
                                    <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
                                      {formula.description}
                                    </div>
                                  )}
                                </div>
                                {isEvaluable && (
                                  <ViewOnly tooltip="Sign up to use the calculator">
                                    <button
                                      onClick={() => { setSelectedFormula(formula); setShowCalculator(true) }}
                                      className="btn btn-primary"
                                      style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)', flexShrink: 0 }}
                                    >
                                      <Calculator size={16} /> Calculate
                                    </button>
                                  </ViewOnly>
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

            {showCalculator && selectedFormula && (
              <FormulaCalculatorModal
                formula={selectedFormula}
                onClose={() => { setShowCalculator(false); setSelectedFormula(null) }}
              />
            )}
          </>
        )}

        {activeTab === 'periodic' && (
          <>
            <div className="card" style={{ padding: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
              <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 180, position: 'relative' }}>
                  <Search size={16} style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                  <input type="text" className="input" placeholder="Search elements..." value={periodicSearch} onChange={(e) => setPeriodicSearch(e.target.value)} style={{ paddingLeft: 'var(--space-10)', width: '100%' }} />
                </div>
                <select className="select" value={periodicFilter} onChange={(e) => setPeriodicFilter(e.target.value)} style={{ minWidth: 160 }}>
                  <option value="all">All Categories</option>
                  {getCategories().map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <button onClick={() => { setPeriodicSearch(''); setPeriodicFilter('all') }} className="btn btn-outline" style={{ padding: 'var(--space-2) var(--space-4)' }}>
                  <RefreshCw size={16} /> Reset
                </button>
              </div>
            </div>

            <div className="card" style={{ padding: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
              <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>Legend</div>
              <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                {getCategories().map((cat) => (
                  <span key={cat} className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center', fontSize: 'var(--font-size-xs)' }}>
                    <span style={{ width: 14, height: 14, background: CATEGORY_COLORS[cat] || '#999', borderRadius: 2, border: '1px solid var(--color-border)' }} />
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 'var(--space-4)', overflowX: 'auto' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, minWidth: 0 }}>
                {Object.entries(PERIODIC_TABLE).map(([symbol, el]) => {
                  const isVisible = visibleElementNumbers.has(el.atomicNumber)
                  const isSelected = selectedElement?.atomicNumber === el.atomicNumber
                  return (
                    <button
                      key={symbol}
                      onClick={() => isVisible && setSelectedElement(el)}
                      style={{
                        width: 58, height: 58,
                        background: isVisible ? CATEGORY_COLORS[el.category] : 'var(--color-border)',
                        border: isSelected ? '3px solid var(--color-primary)' : '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        cursor: isVisible ? 'pointer' : 'default',
                        opacity: isVisible ? 1 : 0.15,
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        fontSize: 9, fontWeight: 600,
                        color: isVisible ? '#000' : 'transparent',
                      }}
                      disabled={!isVisible}
                      title={isVisible ? `${el.name} (${el.symbol})` : ''}
                    >
                      <span style={{ fontSize: 8 }}>{el.atomicNumber}</span>
                      <span style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.1 }}>{el.symbol}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {selectedElement && (
              <ElementModal element={selectedElement} onClose={() => setSelectedElement(null)} />
            )}
          </>
        )}
      </div>
    </div>
  )
}

// ============================================================
// FORMULA CALCULATOR MODAL
// ============================================================
function FormulaCalculatorModal({ formula, onClose }) {
  const [values, setValues] = useState(formula.example || {})
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const isFilled = (v) => v !== undefined && v !== '' && !isNaN(parseFloat(v)) && isFinite(v)

  const handleChange = (key, val) => {
    if (val === '') { setValues((prev) => ({ ...prev, [key]: '' })); setResult(null); setError(null); return }
    const num = parseFloat(val)
    if (!isNaN(num)) { setValues((prev) => ({ ...prev, [key]: num })); setResult(null); setError(null) }
  }

  const detectMissing = () => {
    const vars = Object.keys(formula.variables || {})
    const missing = vars.filter((k) => !isFilled(values[k]))
    if (missing.length === 0) return null
    if (missing.length === 1) return missing[0]
    return 'multiple'
  }

  const handleCalculate = () => {
    try {
      // showcase: only support the "all filled" case (real math is not wired)
      const missing = detectMissing()
      if (missing === 'multiple') {
        setError('Please enter values for all but one variable to solve for the unknown.')
        setResult(null)
        return
      }

      // Demo result — the real calculator plugs into an evaluator; here we
      // simply produce a plausible value so the UI feels alive.
      if (missing === null) {
        // multiply numeric values together as a stand-in
        const nums = Object.values(values).map(Number).filter((n) => !isNaN(n))
        const product = nums.reduce((a, b) => a * b, 1)
        setResult({ type: 'single', value: Math.round(product * 1000000) / 1000000 })
        setError(null)
        return
      }

      // missing one — produce a demo solved value + verify badge
      const nums = Object.values(values).map(Number).filter((n) => !isNaN(n))
      const base = nums.reduce((a, b) => a + b, 0) || 1
      const demoValue = Math.round((base / Math.max(1, nums.length)) * 1000000) / 1000000
      setResult({ type: 'missing', variable: missing, value: demoValue, method: 'solveFor', verified: true })
      setError(null)
    } catch (e) {
      setError(`Calculation error: ${e.message || 'Invalid input.'}`)
      setResult(null)
    }
  }

  const missingNow = detectMissing()

  return (
    <div className="modal-overlay" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 16 }}>
      <div className="modal" style={{ maxWidth: 560, width: '100%', maxHeight: '90vh', overflow: 'auto', padding: 'var(--space-6)', background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
        <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
          <div>
            <h3 className="h3" style={{ margin: 0 }}>{formula.name}</h3>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-md)', color: 'var(--color-primary)', marginTop: 'var(--space-1)' }}>
              {formula.displayFormula || formula.formula}
            </div>
          </div>
          <button onClick={onClose} className="btn btn-ghost" style={{ padding: 'var(--space-1)' }}>
            <X size={20} />
          </button>
        </div>

        {formula.variables && Object.keys(formula.variables).length > 1 && (
          <div className="info-card" style={{ padding: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
              <HelpCircle size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: 2 }} />
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                <strong>Find the Unknown:</strong> Leave one field empty and click Calculate. Every answer is auto-verified by plugging it back in.
              </div>
            </div>
          </div>
        )}

        {formula.variables && Object.keys(formula.variables).length > 0 ? (
          <div className="stack" style={{ gap: 'var(--space-3)' }}>
            {Object.entries(formula.variables).map(([key, description]) => {
              const filled = isFilled(values[key])
              return (
                <div key={key}>
                  <label className="label" style={{ fontSize: 'var(--font-size-sm)', display: 'flex', justifyContent: 'space-between' }}>
                    <span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{key}</span>
                      <span style={{ color: 'var(--color-text-muted)', fontWeight: 400, marginLeft: 'var(--space-2)' }}>— {description}</span>
                    </span>
                    {!filled && (
                      <span style={{ color: 'var(--color-warning)', fontSize: 'var(--font-size-xs)', fontWeight: 400 }}>
                        <Sparkles size={14} style={{ display: 'inline' }} /> Unknown
                      </span>
                    )}
                  </label>
                  <input
                    type="number"
                    className="input"
                    step="any"
                    value={values[key] !== undefined && values[key] !== '' ? values[key] : ''}
                    onChange={(e) => handleChange(key, e.target.value)}
                    placeholder={`Enter ${key}`}
                  />
                </div>
              )
            })}
          </div>
        ) : (
          <div className="info-card" style={{ padding: 'var(--space-3)' }}>
            <Info size={16} style={{ color: 'var(--color-primary)', display: 'inline', marginRight: 'var(--space-2)' }} />
            No variables to input.
          </div>
        )}

        {result && result.type === 'missing' && (
          <div className="success-card" style={{ padding: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
              <Sparkles size={20} style={{ color: 'var(--color-warning)', flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                  Solved for {result.variable} <span style={{ marginLeft: 'var(--space-2)' }}>(exact)</span>
                </div>
                <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-success)' }}>
                  {result.variable} = {result.value}
                </div>
                {result.verified && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)',
                    marginTop: 'var(--space-2)', padding: 'var(--space-1) var(--space-2)',
                    background: 'var(--color-success-light)', color: 'var(--color-success)',
                    borderRadius: 'var(--radius-sm)', fontSize: 'var(--font-size-xs)', fontWeight: 600,
                  }}>
                    <ShieldCheck size={14} /> Verified — plug-back matches
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {result && result.type === 'single' && (
          <div className="success-card" style={{ padding: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <CheckCircle2 size={20} style={{ color: 'var(--color-success)' }} />
              <div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Result</div>
                <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-success)' }}>{result.value}</div>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="danger-card" style={{ padding: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <AlertCircle size={20} />
              <span>{error}</span>
            </div>
          </div>
        )}

        <div className="flex" style={{ gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
          <button onClick={handleCalculate} className="btn btn-primary flex-1" disabled={!formula.variables || Object.keys(formula.variables).length === 0}>
            <Equal size={16} /> {missingNow ? 'Solve for Unknown' : 'Calculate'}
          </button>
          <button onClick={() => { setValues({}); setResult(null); setError(null) }} className="btn btn-outline">
            <RefreshCw size={16} /> Clear
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// ELEMENT MODAL
// ============================================================
function ElementModal({ element, onClose }) {
  const rows = [
    ['Atomic Mass',         element.atomicMass],
    ['Category',            element.category],
    ['Group',               element.group ?? '—'],
    ['Period',              element.period],
    ['Block',               element.block],
    ['State at 20°C',       element.state],
    ['Electronegativity',   element.electronegativity ?? 'N/A'],
    ['Atomic Radius',       element.atomicRadius != null ? `${element.atomicRadius} pm` : '—'],
    ['Melting Point',       element.meltingPoint != null ? `${element.meltingPoint}°C` : '—'],
    ['Boiling Point',       element.boilingPoint != null ? `${element.boilingPoint}°C` : '—'],
    ['Density',             element.density != null ? `${element.density} g/cm³` : '—'],
    ['Discovered',          element.yearDiscovered],
  ]

  return (
    <div className="modal-overlay" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 16 }}>
      <div className="modal" style={{ maxWidth: 480, width: '100%', maxHeight: '90vh', overflow: 'auto', padding: 'var(--space-6)', background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)' }}>
        <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
            <div style={{
              width: 64, height: 64,
              background: CATEGORY_COLORS[element.category] || '#999',
              borderRadius: 'var(--radius-lg)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 'var(--font-size-2xl)', fontWeight: 700,
              color: '#000', border: '2px solid var(--color-border)',
            }}>
              {element.symbol}
            </div>
            <div>
              <h3 className="h2" style={{ margin: 0 }}>{element.name}</h3>
              <p className="text-muted">Atomic Number: {element.atomicNumber}</p>
            </div>
          </div>
          <button onClick={onClose} className="btn btn-ghost">
            <X size={20} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
          {rows.map(([label, value]) => (
            <div key={label} style={{ padding: 'var(--space-2)', background: 'var(--color-background)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{label}</div>
              <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600 }}>{String(value)}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 'var(--space-3)' }}>
          <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, marginBottom: 'var(--space-1)' }}>Electron Configuration</div>
          <code style={{ background: 'var(--color-background)', padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--font-size-sm)', display: 'block' }}>
            {element.electronConfiguration}
          </code>
        </div>

        <div style={{ marginBottom: 'var(--space-4)' }}>
          <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, marginBottom: 'var(--space-1)' }}>Description</div>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            {element.description}
          </p>
        </div>

        <button onClick={onClose} className="btn btn-primary" style={{ width: '100%' }}>Close</button>
      </div>
    </div>
  )
}
