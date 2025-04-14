// tailwind.config.js
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", // se estiver usando app dir
      "./pages/**/*.{js,ts,jsx,tsx}", // se estiver usando pages dir
      "./components/**/*.{js,ts,jsx,tsx}", // se tiver componentes separados
    ],
    theme: {
      extend: {
        keyframes: {
          slideDown: {
            '0%': { transform: 'translateY(-50px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
        animation: {
          slideDown: 'slideDown 0.6s ease-out forwards',
        },
      },
    },
    plugins: [],
  }
  