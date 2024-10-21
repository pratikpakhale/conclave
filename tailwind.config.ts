import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      "4px": "var(--spacing--4px)",
      "8px": "var(--spacing--8px)",
      "12px": "var(--spacing--12px)",
      "16px": "var(--spacing--16px)",
      "20px": "var(--spacing--20px)",
      "24px": "var(--spacing--24px)",
      "28px": "var(--spacing--28px)",
      "48px": "var(--spacing--48px)",
      "120px": "var(--spacing--120px)",
      "160px": "var(--spacing--160px)",
      "b-16px": "var(--border--16px)",
    },
    extend: {
      fontSize: {
        h1: "var(--font--h1)",
        h2: "var(--font--h2)",
        h3: "var(--font--h3)",
        h4: "var(--font--h4)",
        h5: "var(--font--h5)",
        "24px": "var(--size--24px)",
        "48px": "var(--size--48px)",
        "4px": "var(--spacing--4px)",
        "8px": "var(--spacing--8px)",
        "12px": "var(--spacing--12px)",
        "16px": "var(--spacing--16px)",
        "20px": "var(--spacing--20px)",
        "24px--p": "var(--spacing--24px)",
        "28px": "var(--spacing--28px)",
        "48px--p": "var(--spacing--48px)",
        "120px": "var(--spacing--120px)",
        "160px": "var(--spacing--160px)",
        benefits: "var(--font-benefits)",
        label: "var(--font--label)",
      },
      gap: {
        "4px": "var(--spacing--4px)",
        "8px": "var(--spacing--8px)",
        "12px": "var(--spacing--12px)",
        "16px": "var(--spacing--16px)",
        "20px": "var(--spacing--20px)",
        "24px": "var(--spacing--24px)",
        "28px": "var(--spacing--28px)",
        "48px": "var(--spacing--48px)",
        "120px": "var(--spacing--120px)",
        "160px": "var(--spacing--160px)",
      },
      margin: {
        "4px": "var(--spacing--4px)",
        "8px": "var(--spacing--8px)",
        "12px": "var(--spacing--12px)",
        "16px": "var(--spacing--16px)",
        "20px": "var(--spacing--20px)",
        "24px": "var(--spacing--24px)",
        "28px": "var(--spacing--28px)",
        "48px": "var(--spacing--48px)",
        "120px": "var(--spacing--120px)",
        "160px": "var(--spacing--160px)",
      },
      padding: {
        "4px": "var(--spacing--4px)",
        "8px": "var(--spacing--8px)",
        "12px": "var(--spacing--12px)",
        "16px": "var(--spacing--16px)",
        "20px": "var(--spacing--20px)",
        "24px": "var(--spacing--24px)",
        "28px": "var(--spacing--28px)",
        "48px": "var(--spacing--48px)",
        "120px": "var(--spacing--120px)",
        "160px": "var(--spacing--160px)",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        color1: "#151517",
        "text-col": "#e8e8e8",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      rotate: {
        "y-180": "180deg",
      },
      perspective: {
        "1000": "1000px",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
      boxShadow: {
        "hover-landing": "0 0 20px #3a506b",
        landing: "0 9px 20px #0000000f",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "infinite-scroll": "scroll 25s linear infinite",
        "infinite-scroll-y": "scroll-y 25s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        border: "border 4s linear infinite",
        shine: "shine 3s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        scroll: {
          to: {
            transform: "translateX(calc(-50% - 2rem))",
          },
        },
        "scroll-y": {
          to: {
            transform: "translateY(calc(-50% - 1vw))",
          },
        },
        border: {
          to: { "--border-angle": "360deg" },
        },
        shine: {
          "0%": { backgroundPosition: "200% 0%" },
          "100%": { backgroundPosition: "-200% 0%" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
