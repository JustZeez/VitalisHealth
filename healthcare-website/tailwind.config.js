// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         health: {
//           50: '#f0f9fa',
//           100: '#d1f0f2',
//           600: '#0d9488', // Teal
//           700: '#0f766e',
//           900: '#134e4a',
//         }
//       },
//       animation: {
//         'subtle-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//       }
//     },
//   },
//   plugins: [],
// }
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         'fade-in': 'fadeIn 0.8s ease-out',
//         'slide-up': 'slideUp 0.6s ease-out',
//         'float': 'float 3s infinite ease-in-out',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         slideUp: {
//           '0%': { opacity: '0', transform: 'translateY(30px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-10px)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f766e",
        secondary: "#14b8a6",
      },

      animation: {
        float: "float 4s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
    },
  },
  plugins: [],
}