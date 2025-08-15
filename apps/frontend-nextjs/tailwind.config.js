/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Extensões personalizadas do tema
      colors: {
        primary: '#3b82f6',
      },
    },
  },
  plugins: [
    // Plugins adicionais
    require('@tailwindcss/forms'),
  ],
}