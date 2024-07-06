/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modals/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/types/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        graphik: ['Graphik Trial', 'sans-serif'],
        graphikXCond: ['Graphik XCond Trial', 'sans-serif'],
        graphikXXCond: ['Graphik XXCond Trial', 'sans-serif'],
        graphikXXXCond: ['Graphik XXXCond Trial', 'sans-serif'],
        graphikXXXXCond: ['Graphik XXXXCond Trial', 'sans-serif'],
        graphikCompact: ['Graphik Compact Trial', 'sans-serif'],
        graphikCond: ['Graphik Cond Trial', 'sans-serif'],
        graphikWide: ['Graphik Wide Trial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
