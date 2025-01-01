/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... other config
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  // ... rest of config
} 