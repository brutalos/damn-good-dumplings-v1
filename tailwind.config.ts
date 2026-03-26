import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        primary: { DEFAULT: "#0c594a", light: "#f3968e" },
        "accent-2": "#0000ee",
        "accent-3": "#cccccc",
        "accent-4": "#f7f7f7",
      },
      fontFamily: {
        "arial": ["var(--font-arial)", "sans-serif"],
        "helvetica": ["var(--font-helvetica)", "sans-serif"],
        "times": ["var(--font-times)", "sans-serif"],
        "wfont_8dbbea_fa8a26c3a1be4d68bfcdb4f3f0a24711": ["var(--font-wfont_8dbbea_fa8a26c3a1be4d68bfcdb4f3f0a24711)", "sans-serif"],
        "wfont_b3707a_23b83275f5a745458a24b4e16224807c": ["var(--font-wfont_b3707a_23b83275f5a745458a24b4e16224807c)", "sans-serif"],
        "wfont_f12b48_b9319c5d59904fb59a44b7932a1b2de6": ["var(--font-wfont_f12b48_b9319c5d59904fb59a44b7932a1b2de6)", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
