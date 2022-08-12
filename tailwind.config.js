module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1A1A1A',
      },
      fontFamily: {
        lato: ['Lato', 'Verdana'],
        'lato-bold': 'Lato Bold',
        'lato-black': 'Lato Black',
      },
      fontSize: {
        sm: ['14px', '1.5'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        '3xl': ['1.875rem', '1.5'],
        '5xl': ['3rem', '1.5'],
        '7xl': ['4.5rem', '1.5'],
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
      height: {
        hero: 'calc(100vh - 106px)',
      },
      keyframes: {
        jump: {
          '0%, 40%, 100%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-0.5rem)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
