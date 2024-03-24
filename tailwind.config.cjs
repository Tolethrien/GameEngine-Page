import starlightPlugin from "@astrojs/starlight-tailwind";

// Generated color palettes
const accent = {
  200: "#fab0c6",
  600: "#c30067",
  900: "#600030",
  950: "#430922",
};
const gray = {
  100: "#f8f4ff",
  200: "#f2e9ff",
  300: "#c7bcd7",
  400: "#9680b2",
  500: "#624d7b",
  700: "#412d59",
  800: "#2f1b45",
  900: "#1c1327",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
};
