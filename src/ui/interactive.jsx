// ============================================================
// HYELEARNER: FOUNDATION — INTERACTIVE UI COMPONENTS
// Modals, Toasts, Tabs, Dropdowns, Loading, Progress, Skeleton, Tooltip
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useRef, forwardRef } from 'react'
import { createPortal } from 'react-dom'

// ============================================================
// MODALS
// ============================================================

export const Modal = forwardRef(({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  className = '',
  closeOnOutsideClick = true,
  ...props
}, ref) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-full mx-4',
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in"
      onClick={closeOnOutsideClick ? onClose : undefined}
      ref={ref}
      {...props}
    >
      <div
        className={`bg-surface rounded-2xl w-full ${sizes[size] || sizes.md} max-h-[90vh] overflow-y-auto p-6 border border-border shadow-2xl animate-slide-up ${className}`}
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        {title && (
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted/20 rounded-lg transition text-2xl text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>
        )}
        {children}
      </div>
    </div>,
    document.body
  )
})

Modal.displayName = 'Modal'

// ============================================================
// TOASTS
// ============================================================

export const Toast = forwardRef(({
  message,
  type = 'info',
  duration = 3000,
  onDismiss,
  className = '',
  ...props
}, ref) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss?.()
    }, duration)
    return () => clearTimeout(timer)
  }, [duration, onDismiss])

  const types = {
    success: 'bg-success text-white',
    error: 'bg-danger text-white',
    warning: 'bg-warning text-white',
    info: 'bg-primary text-white',
  }

  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️',
  }

  return (
    <div
      ref={ref}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg animate-slide-up ${types[type] || types.info} ${className}`}
      {...props}
    >
      <span className="text-xl">{icons[type] || icons.info}</span>
      <span className="flex-1 text-sm font-medium">{message}</span>
      <button
        onClick={onDismiss}
        className="text-white/80 hover:text-white transition"
      >
        ✕
      </button>
    </div>
  )
})

Toast.displayName = 'Toast'

export const ToastContainer = forwardRef(({
  toasts = [],
  onDismiss,
  position = 'bottom-center',
  className = '',
  ...props
}, ref) => {
  const positions = {
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'top-right': 'top-4 right-4',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-4 right-4',
  }

  return createPortal(
    <div
      ref={ref}
      className={`fixed z-100 flex flex-col gap-2 ${positions[position] || positions['bottom-center']} ${className}`}
      {...props}
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onDismiss={() => onDismiss?.(toast.id)}
        />
      ))}
    </div>,
    document.body
  )
})

ToastContainer.displayName = 'ToastContainer'

// ============================================================
// TABS
// ============================================================

export const Tabs = forwardRef(({
  tabs = [],
  activeTab,
  onChange,
  variant = 'default',
  className = '',
  ...props
}, ref) => {
  const variants = {
    default: 'border-b border-border',
    pill: 'bg-muted/20 rounded-lg p-1',
    underlined: 'border-b-2 border-transparent',
  }

  const tabVariants = {
    default: (isActive) =>
      `px-4 py-2 text-sm font-medium transition-all ${
        isActive
          ? 'border-b-2 border-primary text-primary'
          : 'text-muted-foreground hover:text-foreground border-b-2 border-transparent hover:border-border'
      }`,
    pill: (isActive) =>
      `px-4 py-2 text-sm font-medium rounded-lg transition-all ${
        isActive
          ? 'bg-primary text-white shadow-sm'
          : 'text-muted-foreground hover:text-foreground hover:bg-muted/20'
      }`,
    underlined: (isActive) =>
      `px-4 py-2 text-sm font-medium transition-all ${
        isActive
          ? 'border-b-2 border-primary text-primary'
          : 'text-muted-foreground hover:text-foreground border-b-2 border-transparent'
      }`,
  }

  return (
    <div ref={ref} className={`${variants[variant] || variants.default} ${className}`} {...props}>
      <nav className="flex gap-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onChange?.(tab.id)}
              className={tabVariants[variant]?.(isActive) || tabVariants.default(isActive)}
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              {tab.label}
              {tab.badge && (
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  isActive ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          )
        })}
      </nav>
    </div>
  )
})

Tabs.displayName = 'Tabs'

export const TabPanel = forwardRef(({
  children,
  isActive,
  className = '',
  ...props
}, ref) => {
  if (!isActive) return null
  return (
    <div ref={ref} className={`pt-4 animate-fade-in ${className}`} {...props}>
      {children}
    </div>
  )
})

TabPanel.displayName = 'TabPanel'

// ============================================================
// DROPDOWNS
// ============================================================

export const Dropdown = forwardRef(({
  trigger,
  children,
  align = 'right',
  className = '',
  ...props
}, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const alignClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2',
  }

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`} {...props}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div
          className={`absolute mt-2 min-w-[200px] bg-surface border border-border rounded-lg shadow-lg py-1 z-50 ${alignClasses[align] || alignClasses.right}`}
        >
          {children}
        </div>
      )}
    </div>
  )
})

Dropdown.displayName = 'Dropdown'

export const DropdownItem = forwardRef(({
  children,
  onClick,
  className = '',
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted/20 transition-colors first:rounded-t-lg last:rounded-b-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  )
})

DropdownItem.displayName = 'DropdownItem'

// ============================================================
// LOADING
// ============================================================

export const Spinner = forwardRef(({
  size = 'md',
  color = 'primary',
  className = '',
  ...props
}, ref) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
    xl: 'w-16 h-16 border-4',
  }

  const colors = {
    primary: 'border-primary border-t-transparent',
    secondary: 'border-secondary border-t-transparent',
    white: 'border-white/30 border-t-white',
  }

  return (
    <div
      ref={ref}
      className={`rounded-full animate-spin ${sizes[size] || sizes.md} ${colors[color] || colors.primary} ${className}`}
      {...props}
    />
  )
})

Spinner.displayName = 'Spinner'

export const LoadingOverlay = forwardRef(({
  children,
  isLoading,
  spinnerSize = 'md',
  className = '',
  ...props
}, ref) => {
  if (!isLoading) return children

  return (
    <div ref={ref} className={`relative ${className}`} {...props}>
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center z-10">
        <Spinner size={spinnerSize} />
      </div>
      <div className="opacity-50 pointer-events-none">{children}</div>
    </div>
  )
})

LoadingOverlay.displayName = 'LoadingOverlay'

export const LoadingScreen = forwardRef(({
  message = 'Loading...',
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`min-h-[200px] flex flex-col items-center justify-center ${className}`}
      {...props}
    >
      <Spinner size="lg" />
      <p className="mt-4 text-sm text-muted-foreground">{message}</p>
    </div>
  )
})

LoadingScreen.displayName = 'LoadingScreen'

// ============================================================
// SKELETON
// ============================================================

export const Skeleton = forwardRef(({
  variant = 'text',
  className = '',
  ...props
}, ref) => {
  const variants = {
    text: 'h-4 rounded',
    title: 'h-8 rounded w-3/4',
    avatar: 'h-12 w-12 rounded-full',
    card: 'h-32 rounded-lg',
    button: 'h-10 rounded-lg w-24',
    input: 'h-10 rounded-lg',
    badge: 'h-6 rounded-full w-16',
  }

  return (
    <div
      ref={ref}
      className={`bg-muted/40 animate-pulse ${variants[variant] || variants.text} ${className}`}
      {...props}
    />
  )
})

Skeleton.displayName = 'Skeleton'

export const SkeletonCard = forwardRef(({
  className = '',
  ...props
}, ref) => {
  return (
    <div ref={ref} className={`p-4 border border-border rounded-lg ${className}`} {...props}>
      <Skeleton variant="avatar" className="mb-3" />
      <Skeleton variant="title" className="mb-2" />
      <Skeleton variant="text" className="mb-1" />
      <Skeleton variant="text" className="w-2/3" />
    </div>
  )
})

SkeletonCard.displayName = 'SkeletonCard'

// ============================================================
// PROGRESS
// ============================================================

export const ProgressBar = forwardRef(({
  value = 0,
  max = 100,
  label,
  showLabel = false,
  color = 'primary',
  size = 'md',
  className = '',
  ...props
}, ref) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  const colors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    warning: 'bg-warning',
    danger: 'bg-danger',
  }

  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  }

  return (
    <div ref={ref} className={`w-full ${className}`} {...props}>
      {(label || showLabel) && (
        <div className="flex justify-between text-sm mb-1">
          {label && <span className="text-foreground">{label}</span>}
          {showLabel && <span className="text-muted-foreground">{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className={`w-full bg-muted rounded-full overflow-hidden ${sizes[size] || sizes.md}`}>
        <div
          className={`h-full transition-all duration-500 ease-out ${colors[color] || colors.primary}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
})

ProgressBar.displayName = 'ProgressBar'

export const CircleProgress = forwardRef(({
  value = 0,
  max = 100,
  size = 64,
  strokeWidth = 4,
  color = 'primary',
  className = '',
  label,
  ...props
}, ref) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  const colors = {
    primary: 'stroke-primary',
    secondary: 'stroke-secondary',
    success: 'stroke-success',
    warning: 'stroke-warning',
    danger: 'stroke-danger',
  }

  return (
    <div ref={ref} className={`inline-flex items-center justify-center ${className}`} {...props}>
      <div className="relative">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            className="stroke-muted/30"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            className={`${colors[color] || colors.primary} transition-all duration-500 ease-out`}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
          {label || `${Math.round(percentage)}%`}
        </div>
      </div>
    </div>
  )
})

CircleProgress.displayName = 'CircleProgress'

// ============================================================
// TOOLTIP
// ============================================================

export const Tooltip = forwardRef(({
  content,
  children,
  position = 'top',
  delay = 200,
  className = '',
  ...props
}, ref) => {
  const [isVisible, setIsVisible] = useState(false)
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const tooltipRef = useRef(null)
  const triggerRef = useRef(null)

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  }

  const showTooltip = () => {
    setTimeout(() => {
      setIsVisible(true)
    }, delay)
  }

  const hideTooltip = () => {
    setIsVisible(false)
  }

  return (
    <div
      ref={ref}
      className={`relative inline-block ${className}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      {...props}
    >
      <div ref={triggerRef}>{children}</div>
      {isVisible && content && (
        <div
          ref={tooltipRef}
          className={`absolute z-50 px-3 py-2 bg-foreground text-background text-sm rounded-lg shadow-lg whitespace-nowrap pointer-events-none ${positions[position] || positions.top}`}
        >
          {content}
          <div className={`absolute w-2 h-2 bg-foreground rotate-45 ${
            position === 'top' ? 'bottom-[-4px] left-1/2 -translate-x-1/2' :
            position === 'bottom' ? 'top-[-4px] left-1/2 -translate-x-1/2' :
            position === 'left' ? 'right-[-4px] top-1/2 -translate-y-1/2' :
            'left-[-4px] top-1/2 -translate-y-1/2'
          }`} />
        </div>
      )}
    </div>
  )
})

Tooltip.displayName = 'Tooltip'

// ============================================================
// POPOVER
// ============================================================

export const Popover = forwardRef(({
  trigger,
  content,
  align = 'center',
  className = '',
  ...props
}, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const popoverRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const alignClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2',
  }

  return (
    <div ref={popoverRef} className={`relative inline-block ${className}`} {...props}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div
          className={`absolute mt-2 min-w-[200px] bg-surface border border-border rounded-lg shadow-lg p-4 z-50 ${alignClasses[align] || alignClasses.center}`}
        >
          {content}
        </div>
      )}
    </div>
  )
})

Popover.displayName = 'Popover'

// ============================================================
// CONFIRMATION DIALOG
// ============================================================

export const ConfirmDialog = forwardRef(({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm',
  message = 'Are you sure?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'danger',
  className = '',
  ...props
}, ref) => {
  const variants = {
    danger: 'bg-danger hover:bg-danger/90',
    primary: 'bg-primary hover:bg-primary-dark',
    success: 'bg-success hover:bg-success/90',
    warning: 'bg-warning hover:bg-warning/90',
  }

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
      ref={ref}
      {...props}
    >
      <div
        className={`bg-surface rounded-2xl max-w-md w-full p-6 border border-border shadow-2xl animate-slide-up ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">{message}</p>
        <div className="flex gap-3">
          <button
            onClick={onConfirm}
            className={`flex-1 py-2 text-white rounded-lg font-medium transition ${variants[variant] || variants.primary}`}
          >
            {confirmText}
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2 border border-border rounded-lg font-medium hover:bg-muted/20 transition"
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
})

ConfirmDialog.displayName = 'ConfirmDialog'