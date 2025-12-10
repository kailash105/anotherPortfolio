/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Core palette
        paper: "#f8f4ec",         // vintage cream background
        ink: "#1a1a1a",           // classic black ink
        accent: "#5e4ae3",        // Gen Z electric violet
        faded: "#bfb8aa",         // subtle border tone
        rose: "#ff6b6b",          // secondary warm accent (optional)
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],   // retro display
        mono: ['"IBM Plex Mono"', "monospace"],   // tech-modern feel
      },
      boxShadow: {
        'stamp': '0 3px 0 #2d1fb0',               // vintage ink-like depth
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)', // elegant page lift
      },
      backgroundImage: {
        'paper-texture': "url('/textures/paper.png')", // optional subtle texture
      },
    },
  },
  plugins: [],
};
