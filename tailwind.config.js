/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-min': 'repeat(auto-fit, minmax(min-content, 1fr))',
      }, //control grid extra space
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // Extending the default sans font family
      },
      colors: {
        primary: '#00969F',
        secondary: '#333',
        tertiary: '#CCC',
        textBlack: '#444',
        textOne: "#383838",
        textTwo: "#5E5E5E",
        textThree: "#6E6E6E",
        textFour: "#979797",
        strokeOne: "#D3D3D3",
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
      screens: {
        sm: '575.98px', // Custom small breakpoint
        lg: '991.98px', // Custom large breakpoint
      },
      lineHeight: {
        'mob-15': '4.68vw',
        'mob-16': '5vw',
        'mob-17': '5.31vw',
        'mob-18': '5.62vw',
        'mob-19': '5.93vw',
        'mob-22': '6.875vw',
        'mob-24': '7.5vw',

        'sm-15': '1.95vw',
        'sm-16': '2.08vw',
        'sm-17': '2.21vw',
        'sm-18': '2.34vw',
        'sm-19': '2.47vw',
        'sm-21': '2.73vw',
        'sm-22': '2.86vw',
        'sm-24': '3.125vw',

        'lg-17': '0.99vw',
        'lg-18': '1.05vw',
        'lg-19': '1.11vw',
        'lg-20': '1.17vw',
        'lg-22': '1.288vw',
        'lg-24': '1.405vw',
      },
      fontSize: {
        // 320px mob
        // value / art board size * 100
        'mob-8': ['2.5vw'],
        'mob-9': ['2.81vw'],
        'mob-10': ['3.125vw'],
        'mob-11': ['3.43vw'],
        'mob-12': ['3.75vw'],
        'mob-13': ['4.06vw'],
        'mob-14': ['4.37vw'],
        'mob-15': ['4.68vw'],
        'mob-16': ['5vw'],
        'mob-17': ['5.32vw'],
        'mob-18': ['5.62vw'],
        'mob-19': ['5.93vw'],
        'mob-20': ['6.25vw'],

        // 768px tab
        'sm-8': ['1.04vw'],
        'sm-9': ['1.17vw'],
        'sm-10': ['1.30vw'],
        'sm-11': ['1.45vw'],
        'sm-12': ['1.56vw'],
        'sm-13': ['1.69vw'],
        'sm-14': ['1.82vw'],
        'sm-15': ['1.95vw'],
        'sm-16': ['2.08vw'],
        'sm-17': ['2.21vw'],
        'sm-18': ['2.34vw'],
        'sm-19': ['2.47vw'],
        'sm-20': ['2.60vw'],
        'sm-21': ['2.73vw'],

        // 1708px web
        'lg-8': ['0.46vw'],
        'lg-9': ['0.52vw'],
        'lg-10': ['0.58vw'],
        'lg-11': ['0.64vw'],
        'lg-12': ['0.70vw'],
        'lg-13': ['0.76vw'],
        'lg-14': ['0.81vw'],
        'lg-15': ['0.87vw'],
        'lg-16': ['0.93vw'],
        'lg-17': ['0.99vw'],
        'lg-18': ['1.05vw'],
        'lg-19': ['1.11vw'],
        'lg-20': ['1.17vw'],
        'lg-21': ['1.22vw'],
        'lg-22': ['1.28vw'],
        'lg-23': ['1.34vw'],
        'lg-24': ['1.40vw'],
      },
    },
  },
  plugins: [],
};




// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }