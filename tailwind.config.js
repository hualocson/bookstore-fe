/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          50: "#f6f5f5",
          100: "#e8e7e5",
          200: "#d3d0ce",
          300: "#b3aead",
          400: "#948e8b",
          500: "#726c68",
          600: "#615d59",
          700: "#524e4c",
          800: "#474543",
          900: "#3e3d3b",
          950: "#272525",
        },

        grayscale: {
          50: "#f7f7f8",
          100: "#eeeef0",
          200: "#dadadd",
          300: "#b9bac0",
          400: "#93949d",
          500: "#767781",
          600: "#606169",
          700: "#4e4e56",
          800: "#434349",
          900: "#3b3c3f",
          950: "#303034",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
