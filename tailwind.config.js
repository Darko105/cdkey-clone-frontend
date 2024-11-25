// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // This path should cover all HTML and TypeScript files in src
  ],
  theme: {
    extend: {
      boxShadow: {
        'subtle-glow': '0 0 8px 4px rgba(128, 0, 128, 0.5)',
      },
    },
  },
  plugins: [],
}
