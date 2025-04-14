// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };