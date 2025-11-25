import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#22c55e",
          foreground: "#ecfeff"
        },
        muted: {
          DEFAULT: "#e5e7eb",
          foreground: "#4b5563"
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#020617"
        }
      },
      borderRadius: {
        lg: "0.9rem",
        xl: "1.25rem",
        "2xl": "1.5rem"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
