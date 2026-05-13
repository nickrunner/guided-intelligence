import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'InterVariable',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      colors: {
        ink: {
          950: '#08090b',
          900: '#0b0d10',
          850: '#101318',
          800: '#15181c',
          700: '#1d2128',
          600: '#2a2f38',
          500: '#3a414c',
          400: '#5a6270',
          300: '#8a92a0',
          200: '#b8bec8',
          100: '#e3e6eb',
          50: '#f4f5f7',
        },
        accent: {
          DEFAULT: '#7cc4ff',
          50: '#eaf5ff',
          100: '#cfe7ff',
          200: '#a4d3ff',
          300: '#7cc4ff',
          400: '#4ba9f5',
          500: '#2a8de0',
          600: '#1b6cba',
          700: '#155393',
        },
        role: {
          planner: '#b794f4',
          builder: '#67e8f9',
          reviewer: '#fbbf24',
          pat: '#86efac',
        },
        sev: {
          1: '#86efac',
          2: '#a7f3d0',
          3: '#fde68a',
          4: '#fb923c',
          5: '#f87171',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124, 196, 255, 0.18), 0 8px 30px -12px rgba(124, 196, 255, 0.35)',
      },
      maxWidth: {
        prose: '72ch',
      },
    },
  },
  plugins: [typography],
};
