import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        eiko: ['var(--font-eiko)'],
        favorit: ['var(--font-favorit)'],
      },
      colors: {
        customGray: '#7C7C7C',
        hoverGray: '#CCCCCC',

      },
      fontSize: {
        '5xl': '2.5rem', //h1
        '4xl': '2.375rem',//h2
        '3xl': '2rem', //h3
        '2.5xl': '1.7rem', //h4
        '2xl': '1.5rem', //h4
        'xs': '0.65rem',
        'base': '0.75rem',
        'bodycopy': '0.875rem',
      },
      lineHeight: {
        'bodyPara': '1rem',  // Change the line height to your desired value
      },

      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))'
      },

      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
      },

      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
      },

      margin: {
        'home-top': '17rem', // Your custom margin value
        'thumbnail-top' :'0.62rem',
      },


    },
  },
  plugins: [],
}
export default config
