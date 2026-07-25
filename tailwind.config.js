/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        'primary-dark': '#4338CA',
        secondary: '#7C3AED',
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
        background: '#F8FAFC',
        surface: '#FFFFFF',
        border: '#E2E8F0',
        muted: '#94A3B8',
        foreground: '#0F172A',
      },
    },
  },
  plugins: [],
}