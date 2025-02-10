
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
      extend: {
          fontFamily: {
            serif: ['Oswald Serif', 'serif'], 
          },
          background: {
              'global-gradient': "linear-gradient(90deg, rgba(5,5,5,1) 0%, rgb(41, 53, 55) 62%, rgba(7,19,22,1) 100%)",
          },
          height: {
              '128': '32rem',
              '192': '48rem',
          },
          width: {
              '128': '32rem',
              '192': '48rem',
          },
      },
  },
  plugins: [],
};

