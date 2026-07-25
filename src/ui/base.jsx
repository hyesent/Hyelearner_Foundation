// ============================================================
// HYELEARNER: FOUNDATION — BASE UI COMPONENTS
// Buttons, Inputs, Cards, Typography, Containers, Badges, Avatar
// Built by Hyesent.dev
// ============================================================

import { forwardRef } from 'react'

// ============================================================
// BUTTONS
// ============================================================

export const Button = forwardRef(({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}, ref) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10 focus:ring-primary',
    ghost: 'hover:bg-muted/20 text-foreground focus:ring-primary',
    danger: 'bg-danger text-white hover:bg-danger/90 focus:ring-danger',
    success: 'bg-success text-white hover:bg-success/90 focus:ring-success',
    warning: 'bg-warning text-white hover:bg-warning/90 focus:ring-warning',
    muted: 'bg-muted text-foreground hover:bg-muted/80 focus:ring-muted',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      ref={ref}
      type={type}
      className={`inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
        variants[variant] || variants.primary
      } ${sizes[size] || sizes.md} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

// ============================================================
// INPUTS
// ============================================================

export const Input = forwardRef(({ 
  type = 'text', 
  className = '', 
  error = false,
  ...props 
}, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed ${
        error ? 'border-danger focus:ring-danger' : 'border-border focus:border-primary'
      } ${className}`}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export const Textarea = forwardRef(({ 
  className = '', 
  rows = 4,
  error = false,
  ...props 
}, ref) => {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed resize-vertical ${
        error ? 'border-danger focus:ring-danger' : 'border-border focus:border-primary'
      } ${className}`}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export const Select = forwardRef(({ 
  options = [], 
  className = '', 
  error = false,
  placeholder = 'Select...',
  ...props 
}, ref) => {
  return (
    <select
      ref={ref}
      className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed appearance-none ${
        error ? 'border-danger focus:ring-danger' : 'border-border focus:border-primary'
      } ${className}`}
      {...props}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label || opt}
        </option>
      ))}
    </select>
  )
})

Select.displayName = 'Select'

export const Checkbox = forwardRef(({ 
  className = '', 
  label,
  error = false,
  ...props 
}, ref) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        ref={ref}
        type="checkbox"
        className={`w-4 h-4 rounded border transition-colors duration-200 accent-primary focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed ${
          error ? 'border-danger' : 'border-border'
        } ${className}`}
        {...props}
      />
      {label && <span className="text-sm text-foreground">{label}</span>}
    </label>
  )
})

Checkbox.displayName = 'Checkbox'

export const Toggle = forwardRef(({ 
  checked = false, 
  onChange, 
  className = '',
  disabled = false,
  label,
  ...props 
}, ref) => {
  return (
    <label className={`flex items-center gap-3 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <div className="relative">
        <input
          ref={ref}
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        <div className={`w-11 h-6 rounded-full transition-colors duration-200 ${
          checked ? 'bg-primary' : 'bg-muted'
        }`}>
          <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 mt-0.5 ${
            checked ? 'translate-x-5' : 'translate-x-0.5'
          }`} />
        </div>
      </div>
      {label && <span className="text-sm text-foreground">{label}</span>}
    </label>
  )
})

Toggle.displayName = 'Toggle'

// ============================================================
// CARDS
// ============================================================

export const Card = forwardRef(({ 
  children, 
  className = '', 
  hoverable = false,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={`bg-surface border border-border rounded-lg p-6 transition-all duration-200 ${
        hoverable ? 'hover:border-primary/50 hover:shadow-md hover:-translate-y-1' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'

export const CardHeader = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <div ref={ref} className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  )
})

CardHeader.displayName = 'CardHeader'

export const CardTitle = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <h3 ref={ref} className={`text-xl font-semibold text-foreground ${className}`} {...props}>
      {children}
    </h3>
  )
})

CardTitle.displayName = 'CardTitle'

export const CardDescription = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <p ref={ref} className={`text-sm text-muted-foreground ${className}`} {...props}>
      {children}
    </p>
  )
})

CardDescription.displayName = 'CardDescription'

export const CardContent = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
})

CardContent.displayName = 'CardContent'

export const CardFooter = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <div ref={ref} className={`mt-4 pt-4 border-t border-border ${className}`} {...props}>
      {children}
    </div>
  )
})

CardFooter.displayName = 'CardFooter'

// ============================================================
// TYPOGRAPHY
// ============================================================

export const Heading = forwardRef(({ 
  level = 1, 
  children, 
  className = '', 
  ...props 
}, ref) => {
  const Tag = `h${level}`
  const sizes = {
    1: 'text-4xl md:text-5xl',
    2: 'text-3xl md:text-4xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg',
  }
  return (
    <Tag ref={ref} className={`font-bold text-foreground ${sizes[level] || sizes[4]} ${className}`} {...props}>
      {children}
    </Tag>
  )
})

Heading.displayName = 'Heading'

export const Text = forwardRef(({ 
  variant = 'base', 
  children, 
  className = '', 
  ...props 
}, ref) => {
  const variants = {
    base: 'text-base',
    sm: 'text-sm',
    lg: 'text-lg',
    muted: 'text-sm text-muted-foreground',
    secondary: 'text-base text-foreground-secondary',
    caption: 'text-xs text-muted-foreground',
  }
  return (
    <p ref={ref} className={`${variants[variant] || variants.base} ${className}`} {...props}>
      {children}
    </p>
  )
})

Text.displayName = 'Text'

export const Label = forwardRef(({ children, className = '', required = false, ...props }, ref) => {
  return (
    <label ref={ref} className={`block text-sm font-medium text-foreground mb-1 ${className}`} {...props}>
      {children}
      {required && <span className="text-danger ml-1">*</span>}
    </label>
  )
})

Label.displayName = 'Label'

// ============================================================
// CONTAINERS
// ============================================================

export const Container = forwardRef(({ children, className = '', maxWidth = '7xl', ...props }, ref) => {
  const widths = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
  }
  return (
    <div ref={ref} className={`mx-auto px-4 sm:px-6 lg:px-8 ${widths[maxWidth] || widths['7xl']} ${className}`} {...props}>
      {children}
    </div>
  )
})

Container.displayName = 'Container'

export const Section = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <section ref={ref} className={`py-8 md:py-12 lg:py-16 ${className}`} {...props}>
      {children}
    </section>
  )
})

Section.displayName = 'Section'

export const Grid = forwardRef(({ 
  children, 
  cols = 2, 
  gap = 4, 
  className = '', 
  ...props 
}, ref) => {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-6',
  }
  const gapClasses = {
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
  }
  return (
    <div ref={ref} className={`grid ${colClasses[cols] || colClasses[2]} ${gapClasses[gap] || gapClasses[4]} ${className}`} {...props}>
      {children}
    </div>
  )
})

Grid.displayName = 'Grid'

export const Flex = forwardRef(({ 
  children, 
  direction = 'row', 
  align = 'center', 
  justify = 'start',
  gap = 4,
  wrap = false,
  className = '',
  ...props 
}, ref) => {
  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'col-reverse': 'flex-col-reverse',
  }
  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  }
  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  }
  return (
    <div
      ref={ref}
      className={`flex ${directionClasses[direction] || directionClasses.row} ${
        alignClasses[align] || alignClasses.center
      } ${justifyClasses[justify] || justifyClasses.start} gap-${gap} ${
        wrap ? 'flex-wrap' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
})

Flex.displayName = 'Flex'

// ============================================================
// BADGES & CHIPS
// ============================================================

export const Badge = forwardRef(({ 
  color = 'primary', 
  children, 
  className = '', 
  ...props 
}, ref) => {
  const colors = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    danger: 'bg-danger/10 text-danger',
    muted: 'bg-muted/20 text-muted-foreground',
    info: 'bg-blue-500/10 text-blue-500',
  }
  return (
    <span ref={ref} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[color] || colors.primary} ${className}`} {...props}>
      {children}
    </span>
  )
})

Badge.displayName = 'Badge'

export const Chip = forwardRef(({ 
  label, 
  onRemove, 
  color = 'primary',
  className = '',
  ...props 
}, ref) => {
  const colors = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-secondary/10 text-secondary border-secondary/20',
    success: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    danger: 'bg-danger/10 text-danger border-danger/20',
    muted: 'bg-muted/20 text-muted-foreground border-border',
  }
  return (
    <span ref={ref} className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${colors[color] || colors.primary} ${className}`} {...props}>
      {label}
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 text-current opacity-60 hover:opacity-100 transition"
        >
          ×
        </button>
      )}
    </span>
  )
})

Chip.displayName = 'Chip'

// ============================================================
// AVATAR
// ============================================================

export const Avatar = forwardRef(({ 
  src, 
  name, 
  size = 'md', 
  className = '', 
  ...props 
}, ref) => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
    '2xl': 'w-24 h-24 text-2xl',
  }
  const initials = name
    ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : 'U'
  return (
    <div
      ref={ref}
      className={`rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center flex-shrink-0 overflow-hidden ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {src ? (
        <img src={src} alt={name || 'Avatar'} className="w-full h-full object-cover" />
      ) : (
        initials
      )}
    </div>
  )
})

Avatar.displayName = 'Avatar'

export const AvatarGroup = forwardRef(({ avatars = [], max = 4, size = 'md', className = '', ...props }, ref) => {
  const displayAvatars = avatars.slice(0, max)
  const remaining = avatars.length - max
  return (
    <div ref={ref} className={`flex -space-x-2 ${className}`} {...props}>
      {displayAvatars.map((avatar, i) => (
        <Avatar key={i} src={avatar.src} name={avatar.name} size={size} className="ring-2 ring-surface" />
      ))}
      {remaining > 0 && (
        <Avatar name={`+${remaining}`} size={size} className="bg-muted text-muted-foreground ring-2 ring-surface" />
      )}
    </div>
  )
})

AvatarGroup.displayName = 'AvatarGroup'

// ============================================================
// DIVIDER
// ============================================================

export const Divider = forwardRef(({ className = '', vertical = false, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`${vertical ? 'h-full w-px' : 'w-full h-px'} bg-border ${className}`}
      {...props}
    />
  )
})

Divider.displayName = 'Divider'