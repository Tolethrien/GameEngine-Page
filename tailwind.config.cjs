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
      backgroundImage: {
        "button-arrow": "url('/src/assets/pages/button.png')",
        "button-no-arrow": "url('/src/assets/pages/button-no-arrow.png')",
        "nav-back": "url('/src/assets/pages/nav.png')",
        background: "url('/src/assets/pages/background.jpg')",
        label: "url('/src/assets/pages/label.png')",
        pattern: `url(
          "data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E"
        )`,
      },
    },

    fontFamily: {
      pixel: ['"Press Start 2P"', "system-ui"],
    },
  },
  plugins: [starlightPlugin()],
};
