// components/Calculator.jsx
import { useState } from 'react'
import { X, Plus, Minus, Divide, Equal, Ruler, Weight, Thermometer, ArrowLeftRight } from 'lucide-react'

export function Calculator({ onClose }) {
  const [display, setDisplay] = useState('0')
  const [equation, setEquation] = useState('')
  const [result, setResult] = useState(null)
  const [mode, setMode] = useState('standard')
  const [converterType, setConverterType] = useState('length')
  const [fromUnit, setFromUnit] = useState('')
  const [toUnit, setToUnit] = useState('')
  const [fromValue, setFromValue] = useState('')
  const [toValue, setToValue] = useState('')

  const unitCategories = {
    length: {
      name: 'Length',
      icon: Ruler,
      units: {
        'mm': 0.001, 'cm': 0.01, 'm': 1, 'km': 1000,
        'in': 0.0254, 'ft': 0.3048, 'yd': 0.9144, 'mi': 1609.344
      }
    },
    weight: {
      name: 'Weight',
      icon: Weight,
      units: {
        'mg': 0.000001, 'g': 0.001, 'kg': 1, 'tonne': 1000,
        'oz': 0.0283495, 'lb': 0.453592, 'stone': 6.35029
      }
    },
    temperature: {
      name: 'Temperature',
      icon: Thermometer,
      units: { '°C': 'celsius', '°F': 'fahrenheit', 'K': 'kelvin' }
    },
    area: {
      name: 'Area',
      icon: ArrowLeftRight,
      units: {
        'mm²': 0.000001, 'cm²': 0.0001, 'm²': 1, 'km²': 1000000,
        'ha': 10000, 'ac': 4046.856, 'ft²': 0.092903, 'yd²': 0.836127, 'mi²': 2589988.11
      }
    },
    volume: {
      name: 'Volume',
      icon: ArrowLeftRight,
      units: {
        'mL': 0.000001, 'L': 0.001, 'm³': 1, 'gal': 0.00378541,
        'qt': 0.000946353, 'pt': 0.000473176, 'cup': 0.000236588,
        'fl oz': 0.0000295735, 'in³': 0.0000163871, 'ft³': 0.0283168
      }
    }
  }

  const getUnits = () => {
    const category = unitCategories[converterType]
    return category ? Object.keys(category.units) : []
  }

  const convertTemperature = (value, from, to) => {
    let celsius
    if (from === '°C') celsius = value
    else if (from === '°F') celsius = (value - 32) * 5/9
    else if (from === 'K') celsius = value - 273.15

    if (to === '°C') return celsius
    else if (to === '°F') return (celsius * 9/5) + 32
    else if (to === 'K') return celsius + 273.15
    return value
  }

  const convertUnit = () => {
    if (!fromValue || !fromUnit || !toUnit) return
    const category = unitCategories[converterType]
    if (!category) return

    if (converterType === 'temperature') {
      const result = convertTemperature(parseFloat(fromValue), fromUnit, toUnit)
      setToValue(result.toFixed(4))
      return
    }

    const fromFactor = category.units[fromUnit]
    const toFactor = category.units[toUnit]
    if (fromFactor && toFactor) {
      const baseValue = parseFloat(fromValue) * fromFactor
      const result = baseValue / toFactor
      setToValue(result.toFixed(4))
    }
  }

  const handleFromValueChange = (value) => {
    setFromValue(value)
    if (value && fromUnit && toUnit) setTimeout(convertUnit, 10)
    else setToValue('')
  }

  const handleFromUnitChange = (unit) => {
    setFromUnit(unit)
    if (fromValue && unit && toUnit) setTimeout(convertUnit, 10)
    else setToValue('')
  }

  const handleToUnitChange = (unit) => {
    setToUnit(unit)
    if (fromValue && fromUnit && unit) setTimeout(convertUnit, 10)
    else setToValue('')
  }

  const handleNumber = (num) => {
    setDisplay(prev => prev === '0' ? String(num) : prev + String(num))
  }

  const handleOperator = (op) => {
    setEquation(prev => prev + display + op)
    setDisplay('0')
  }

  const handleEquals = () => {
    try {
      const finalEquation = equation + display
      const result = new Function(`return (${finalEquation})`)()
      setResult(result)
      setDisplay(String(result))
      setEquation(finalEquation + '=')
    } catch (e) {
      setDisplay('Error')
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setEquation('')
    setResult(null)
  }

  const toggleMode = () => {
    setMode(mode === 'standard' ? 'converter' : 'standard')
    setFromValue('')
    setToValue('')
    setFromUnit('')
    setToUnit('')
  }

  const handleSwapUnits = () => {
    const tempUnit = fromUnit
    setFromUnit(toUnit)
    setToUnit(tempUnit)
    const tempValue = fromValue
    setFromValue(toValue)
    setToValue(tempValue)
  }

  return (
    <div className="modal-overlay" style={{ zIndex: 100 }}>
      <div className="modal" style={{ maxWidth: '380px', padding: 'var(--space-4)', maxHeight: '90vh', overflowY: 'auto' }}>
        {/* Header */}
        <div className="flex-between" style={{ marginBottom: 'var(--space-3)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <span style={{ fontWeight: '700', color: 'var(--color-text)', fontSize: 'var(--font-size-lg)' }}>
              {mode === 'standard' ? 'Calculator' : 'Unit Converter'}
            </span>
            <button
              onClick={toggleMode}
              style={{
                fontSize: 'var(--font-size-xs)',
                background: 'var(--color-primary-light)',
                color: 'var(--color-primary)',
                padding: 'var(--space-1) var(--space-2)',
                borderRadius: 'var(--radius)',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Switch to {mode === 'standard' ? 'Converter' : 'Calculator'}
            </button>
          </div>
          <button onClick={onClose} className="btn btn-ghost" style={{ padding: 'var(--space-1)' }}>
            <X style={{ width: '20px', height: '20px' }} />
          </button>
        </div>

        {mode === 'standard' ? (
          <>
            {/* Display */}
            <div style={{ 
              background: 'var(--color-background)', 
              padding: 'var(--space-4)', 
              borderRadius: 'var(--radius-xl)', 
              marginBottom: 'var(--space-3)',
              textAlign: 'right'
            }}>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', height: '24px' }}>
                {equation}
              </div>
              <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '700', color: 'var(--color-text)' }}>
                {display}
              </div>
            </div>

            {/* Buttons */}
            <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-2)' }}>
              {['C', '±', '%', '÷'].map((btn) => (
                <button
                  key={btn}
                  onClick={() => {
                    if (btn === 'C') handleClear()
                    else if (btn === '±') setDisplay(String(-parseFloat(display)))
                    else if (btn === '%') setDisplay(String(parseFloat(display) / 100))
                    else if (btn === '÷') handleOperator('/')
                  }}
                  className="btn btn-outline"
                  style={{ padding: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}
                >
                  {btn}
                </button>
              ))}
              {[7, 8, 9, '×'].map((btn) => (
                <button
                  key={btn}
                  onClick={() => {
                    if (typeof btn === 'number') handleNumber(btn)
                    else handleOperator('*')
                  }}
                  className="btn btn-outline"
                  style={{ padding: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}
                >
                  {btn}
                </button>
              ))}
              {[4, 5, 6, '−'].map((btn) => (
                <button
                  key={btn}
                  onClick={() => {
                    if (typeof btn === 'number') handleNumber(btn)
                    else handleOperator('-')
                  }}
                  className="btn btn-outline"
                  style={{ padding: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}
                >
                  {btn}
                </button>
              ))}
              {[1, 2, 3, '+'].map((btn) => (
                <button
                  key={btn}
                  onClick={() => {
                    if (typeof btn === 'number') handleNumber(btn)
                    else handleOperator('+')
                  }}
                  className="btn btn-outline"
                  style={{ padding: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}
                >
                  {btn}
                </button>
              ))}
              <button
                onClick={() => handleNumber(0)}
                className="btn btn-outline"
                style={{ padding: 'var(--space-3)', fontSize: 'var(--font-size-sm)', gridColumn: 'span 2' }}
              >
                0
              </button>
              <button
                onClick={() => { if (!display.includes('.')) setDisplay(display + '.') }}
                className="btn btn-outline"
                style={{ padding: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}
              >
                .
              </button>
              <button
                onClick={handleEquals}
                className="btn btn-primary"
                style={{ padding: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}
              >
                =
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Unit Converter */}
            <div className="stack" style={{ gap: 'var(--space-3)' }}>
              {/* Category selector */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--space-1)' }}>
                {Object.entries(unitCategories).map(([key, category]) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setConverterType(key)
                        setFromUnit('')
                        setToUnit('')
                        setFromValue('')
                        setToValue('')
                      }}
                      style={{
                        padding: 'var(--space-2)',
                        fontSize: 'var(--font-size-xs)',
                        borderRadius: 'var(--radius)',
                        border: converterType === key ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                        background: converterType === key ? 'var(--color-primary-light)' : 'var(--color-surface)',
                        color: converterType === key ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 'var(--space-1)'
                      }}
                    >
                      <Icon style={{ width: '16px', height: '16px' }} />
                      <span>{category.name}</span>
                    </button>
                  )
                })}
              </div>

              {/* From */}
              <div style={{ background: 'var(--color-background)', padding: 'var(--space-3)', borderRadius: 'var(--radius-lg)' }}>
                <label style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)', display: 'block' }}>From</label>
                <div className="flex" style={{ gap: 'var(--space-2)' }}>
                  <input
                    type="number"
                    value={fromValue}
                    onChange={(e) => handleFromValueChange(e.target.value)}
                    placeholder="Value"
                    className="input"
                    style={{ flex: 1 }}
                  />
                  <select
                    value={fromUnit}
                    onChange={(e) => handleFromUnitChange(e.target.value)}
                    className="select"
                    style={{ width: 'auto' }}
                  >
                    <option value="">Unit</option>
                    {getUnits().map(unit => (
                      <option key={unit} value={unit}>{unit}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Swap */}
              <div className="flex-center">
                <button
                  onClick={handleSwapUnits}
                  className="btn btn-outline"
                  style={{ padding: 'var(--space-2)', borderRadius: '50%' }}
                  disabled={!fromUnit || !toUnit}
                >
                  <ArrowLeftRight style={{ width: '20px', height: '20px' }} />
                </button>
              </div>

              {/* To */}
              <div style={{ background: 'var(--color-background)', padding: 'var(--space-3)', borderRadius: 'var(--radius-lg)' }}>
                <label style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)', display: 'block' }}>To</label>
                <div className="flex" style={{ gap: 'var(--space-2)' }}>
                  <input
                    type="number"
                    value={toValue}
                    readOnly
                    placeholder="Result"
                    className="input"
                    style={{ flex: 1, background: 'var(--color-border)', fontWeight: '600' }}
                  />
                  <select
                    value={toUnit}
                    onChange={(e) => handleToUnitChange(e.target.value)}
                    className="select"
                    style={{ width: 'auto' }}
                  >
                    <option value="">Unit</option>
                    {getUnits().map(unit => (
                      <option key={unit} value={unit}>{unit}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}