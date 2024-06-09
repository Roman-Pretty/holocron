/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "nativewind-env-d.ts"],
  theme: {
    extend: {
      colors: {
        heading1: '#876f2f',
        heading2: '#09839b',
        heading3: '#831a1f',
        heading4: '#876f2f',
        box: '#2f3d4a',
        boxheading: '#c0bfbe',
        statblockbackground: '#e6a134',
        statblockornate: '#826430',
        statblocktextbackground: '#841b22',
        statblockthresholdbackground: '#826430',
        bulletpoint: '#1fa9e1'
      }
    },
  },
  plugins: [],
}

