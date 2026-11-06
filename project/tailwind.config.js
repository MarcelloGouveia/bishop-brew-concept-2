/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cheddar: {
          50: '#FDF6E9',
          100: '#FBEBC9',
          200: '#F6D68F',
          300: '#EFBC55',
          400: '#E7A437',
          500: '#D98E1F',
          600: '#B5731A',
          700: '#8F5A17',
        },
        gold: {
          200: '#F1E3B5',
          300: '#E8CF8A',
          400: '#D9B95C',
          500: '#C9A227',
          600: '#A8841B',
        },
        brie: {
          50: '#FDFBF5',
          100: '#FAF5E9',
          200: '#F3EAD6',
          300: '#E8DCC0',
        },
        onyx: {
          600: '#3D3631',
          700: '#2B2622',
          800: '#1F1B18',
          900: '#15120F',
        },
        espresso: {
          50: '#F7F1EC',
          100: '#E9DCD0',
          300: '#A88B74',
          500: '#6B4A36',
          700: '#3E2A1E',
          800: '#2C1E15',
          900: '#1E140E',
        },
        cream: {
          50: '#FFFDF8',
          100: '#FBF6EC',
          200: '#F4ECDC',
        },
        sage: {
          200: '#D6DDCB',
          400: '#9AAA84',
          500: '#7D8F69',
          600: '#5F7150',
          700: '#4A5A3D',
        },
        oak: {
          300: '#D9B98F',
          400: '#C29A6B',
          500: '#A37A4E',
        },
        terracotta: {
          300: '#E0A184',
          400: '#D2805A',
          500: '#B8643F',
          600: '#9A4F2F',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Lora', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'diagonal-lines':
          'repeating-linear-gradient(45deg, rgba(201,162,39,0.12) 0 1px, transparent 1px 22px)',
        'chess-grid':
          'linear-gradient(45deg, rgba(201,162,39,0.10) 25%, transparent 25%), linear-gradient(-45deg, rgba(201,162,39,0.10) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(201,162,39,0.10) 75%), linear-gradient(-45deg, transparent 75%, rgba(201,162,39,0.10) 75%)',
      },
    },
  },
  plugins: [],
};
