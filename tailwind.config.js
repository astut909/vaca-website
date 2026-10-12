/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F7F3ED',
          dark: '#EFEBE3',
          paper: '#FDFBF7',
        },
        ink: {
          DEFAULT: '#1A1715',
          secondary: '#57534E',
          muted: '#A8A29E',
          light: '#78716C',
        },
        emerald: {
          DEFAULT: '#166534',
          hover: '#15803D',
          dark: '#14532D',
          light: '#ECFDF5',
          subtle: 'rgba(22, 101, 52, 0.08)',
        },
        terracotta: {
          DEFAULT: '#9A3412',
          light: '#FFF7ED',
        },
        khata: {
          debit: '#166534',
          credit: '#991B1B',
          margin: 'rgba(153, 27, 27, 0.25)',
          rule: 'rgba(0, 0, 0, 0.04)',
        },
        paper: {
          border: '#D6D3CD',
          line: '#E5E0D8',
        }
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        hindi: ['Noto Serif Devanagari', 'serif'],
      },
      maxWidth: {
        container: '1200px',
        content: '680px',
      },
      boxShadow: {
        ledger: '0 4px 24px rgba(26, 23, 21, 0.06)',
        phone: '0 25px 60px rgba(26, 23, 21, 0.18), 0 8px 20px rgba(26, 23, 21, 0.08)',
        subtle: '0 1px 3px rgba(26, 23, 21, 0.05)',
      }
    },
  },
  plugins: [],
}
