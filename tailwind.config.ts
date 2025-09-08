import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { brand: { 600:"#0f6ce6", 700:"#0b54b4" } },
    borderRadius: { "2xl":"1.25rem","3xl":"1.75rem" }
  }},
  plugins: [],
} satisfies Config;
