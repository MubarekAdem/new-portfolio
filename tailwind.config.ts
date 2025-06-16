/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "slide-down": "slide-down 0.6s ease-out forwards",
        "slide-left": "slide-left 0.6s ease-out forwards",
        "slide-right": "slide-right 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "slide-in-bottom": "slide-in-bottom 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in-scale": "fade-in-scale 0.5s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "rotate-slow": "rotate-slow 10s linear infinite",
        twinkle: "twinkle 2s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-down": {
          from: {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-left": {
          from: {
            opacity: "0",
            transform: "translateX(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-right": {
          from: {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-left": {
          from: {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-right": {
          from: {
            opacity: "0",
            transform: "translateX(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-bottom": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(15px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-scale": {
          from: {
            opacity: "0",
            transform: "scale(0.8)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "bounce-subtle": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-5px)",
          },
        },
        "spin-slow": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        "rotate-slow": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        twinkle: {
          "0%, 100%": {
            opacity: "0.3",
          },
          "50%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    // Grid positioning classes
    "col-start-1",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
    "col-start-8",
    "col-start-9",
    "col-start-10",
    "col-start-11",
    "col-start-12",
    "col-end-1",
    "col-end-2",
    "col-end-3",
    "col-end-4",
    "col-end-5",
    "col-end-6",
    "col-end-7",
    "col-end-8",
    "col-end-9",
    "col-end-10",
    "col-end-11",
    "col-end-12",
    "col-end-13",
    "row-start-1",
    "row-start-2",
    "row-start-3",
    "row-start-4",
    "row-start-5",
    "row-start-6",
    "row-start-7",
    "row-start-8",
    "row-end-1",
    "row-end-2",
    "row-end-3",
    "row-end-4",
    "row-end-5",
    "row-end-6",
    "row-end-7",
    "row-end-8",
    // Grid template classes
    "grid-cols-12",
    "grid-rows-7",
    "grid-rows-8",
    // Animation classes
    "animate-fade-in",
    "animate-slide-up",
    "animate-slide-down",
    "animate-slide-left",
    "animate-slide-right",
    "animate-slide-in-left",
    "animate-slide-in-right",
    "animate-slide-in-bottom",
    "animate-fade-in-up",
    "animate-fade-in-scale",
    "animate-float",
    "animate-bounce-subtle",
    "animate-spin-slow",
    "animate-rotate-slow",
    "animate-twinkle",
    // Delay classes
    "delay-100",
    "delay-200",
    "delay-300",
    "delay-500",
    "delay-700",
    "delay-1000",
  ],
};
