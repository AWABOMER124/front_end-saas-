/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        surface: 'hsl(var(--surface))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        primaryLight: 'hsl(var(--primary-light))',
        success: 'hsl(var(--success))',
        'success-foreground': 'hsl(var(--success-foreground))',
        premium: 'hsl(var(--premium))',
        'premium-foreground': 'hsl(var(--premium-foreground))',
        textPrimary: 'hsl(var(--text-primary))',
        textSecondary: 'hsl(var(--text-secondary))',
        border: 'hsl(var(--border))',
        accent: 'hsl(var(--accent))',
        ring: 'hsl(var(--ring))',
      },
      fontFamily: {
        ibm: ['var(--font-ibm)'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        card: '0 10px 30px rgba(15, 23, 42, 0.05)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
