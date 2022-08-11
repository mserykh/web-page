module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'Verdana'],
        'lato-bold': 'Lato Bold',
        'lato-black': 'Lato Black',
      },
      transform: {
        '3d': 'translate3d(100px,0,0)',
      },
      maxWidth: {
        '1/2': '50%',
        '3/4': '75%',
      },
      width: {
        '1/2': '50%',
        '3/4': '75%',
      },
    },
    keyframes: {
      jump: {
        '0%, 40%, 100%': { transform: 'translateY(0)' },
        '20%': { transform: 'translateY(-0.5rem)' },
      },
    },
  },
  plugins: [],
};
