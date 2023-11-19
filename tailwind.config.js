import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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

        transparent: "transparent",
        current: "currentColor",
        primary: {
          50: "#fdf4f3",
          100: "#fde4e3",
          200: "#fbd0cd",
          300: "#f8ada9",
          400: "#f17f78",
          500: "#e85e56",
          600: "#d3382f",
          700: "#b12c24",
          800: "#932721",
          900: "#7a2722",
          950: "#42100d",
          DEFAULT: "#e85e56",
        },
        grayscale: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#494949",
          900: "#3d3d3d",
          950: "#262626",
          DEFAULT: "#494949",
        },
        light: {
          50: "#fbf7f1",
          100: "#f4e9dc",
          200: "#ead5be",
          300: "#dcb795",
          400: "#cd946a",
          500: "#c3794c",
          600: "#b56641",
          700: "#965038",
          800: "#794233",
          900: "#63372b",
          950: "#351b15",
          DEFAULT: "#f4e9dc",
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
  darkMode: "class",
  plugins: [
    require("tailwindcss-animate"),
    nextui({
      themes: {
        light: {
          colors: {
            background: "#f4e9dc",
            foreground: "#4a4a4a",
            primary: {
              50: "#fdf4f3",
              100: "#fde4e3",
              200: "#fbd0cd",
              300: "#f8ada9",
              400: "#f17f78",
              500: "#e85e56",
              600: "#d3382f",
              700: "#b12c24",
              800: "#932721",
              900: "#7a2722",
              950: "#42100d",
              DEFAULT: "#e85e56",
              foreground: "#fbd0cd",
            },

            secondary: {
              50: "#fbf7f1",
              100: "#f4e9dc",
              200: "#ead5be",
              300: "#dcb795",
              400: "#cd946a",
              500: "#c3794c",
              600: "#b56641",
              700: "#965038",
              800: "#794233",
              900: "#63372b",
              950: "#351b15",
              DEFAULT: "#b56641",
              foreground: "#fbf7f1",
            },
          },
        },
      },
    }),
  ],
};
