/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-inter)', // The Inter font loaded from Google Fonts
          'Segoe UI',           // Fallback to system font Segoe UI
          'Arial',              // Fallback to Arial
          'sans-serif',         // Generic sans-serif fallback
        ],
      },
      rotate: {
        '255': '225deg',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
