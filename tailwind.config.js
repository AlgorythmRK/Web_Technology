/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* gray-200 */
        input: "var(--color-input)", /* white */
        ring: "var(--color-ring)", /* blue-600 */
        background: "var(--color-background)", /* gray-50 */
        foreground: "var(--color-foreground)", /* gray-900 */
        primary: {
          DEFAULT: "var(--color-primary)", /* blue-600 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* blue-700 */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-500 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gray-100 */
          foreground: "var(--color-muted-foreground)", /* gray-500 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* emerald-600 */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* gray-900 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white */
          foreground: "var(--color-card-foreground)", /* gray-900 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* emerald-500 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber-500 */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-500 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        // Campus-specific brand colors
        'campus-blue': "var(--color-campus-blue)", /* custom blue */
        'campus-gold': "var(--color-campus-gold)", /* amber-500 */
        'sustainability-green': "var(--color-sustainability-green)", /* emerald-400 */
        'trust-gray': "var(--color-trust-gray)", /* gray-500 */
        'action-red': "var(--color-action-red)", /* red-600 */
      },
      borderRadius: {
        lg: "var(--radius-lg)", /* 12px */
        md: "var(--radius-base)", /* 8px */
        sm: "var(--radius-sm)", /* 6px */
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Courier New", "monospace"],
      },
      spacing: {
        'xs': 'var(--spacing-xs)', /* 8px */
        'sm': 'var(--spacing-sm)', /* 12px */
        'base': 'var(--spacing-base)', /* 16px */
        'lg': 'var(--spacing-lg)', /* 24px */
        'xl': 'var(--spacing-xl)', /* 32px */
        '2xl': 'var(--spacing-2xl)', /* 48px */
        '3xl': 'var(--spacing-3xl)', /* 64px */
      },
      boxShadow: {
        'campus-sm': 'var(--shadow-sm)',
        'campus': 'var(--shadow-base)',
        'campus-md': 'var(--shadow-md)',
        'campus-lg': 'var(--shadow-lg)',
        'campus-xl': 'var(--shadow-xl)',
        'campus-2xl': 'var(--shadow-2xl)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "campus-pulse": "campusPulse 2s infinite",
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "ripple": "ripple 0.6s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "campusPulse": {
          "0%, 100%": {
            opacity: "0.6",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.02)",
          },
        },
        "fadeIn": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slideUp": {
          from: { 
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: { 
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slideDown": {
          from: { 
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: { 
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scaleIn": {
          from: { 
            opacity: "0",
            transform: "scale(0.95)",
          },
          to: { 
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "ripple": {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
      transitionTimingFunction: {
        'campus': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)', /* 200ms */
        'base': 'var(--transition-base)', /* 300ms */
        'slow': 'var(--transition-slow)', /* 500ms */
      },
      gridTemplateColumns: {
        'masonry': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
      aspectRatio: {
        'card': '4/3',
        'photo': '1/1',
        'banner': '16/9',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}