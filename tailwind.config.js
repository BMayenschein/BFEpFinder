/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'min': '320px', 'max': '480px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'tablet': {'min': '481px', 'max': '768px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'laptop': {'min': '769px', 'max': '1024px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'desktop': {'min': '1025px', 'max': '1200px'},

      'xl':{'min': '1201'},
    },
    extend: {
      spacing: {
        '128': '32rem',
        'norm': '35rem'
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
    utils: true,
    styled: true,
    base: true,
  }

}

