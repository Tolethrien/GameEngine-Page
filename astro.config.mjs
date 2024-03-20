import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import tailwindcssNesting from "tailwindcss/nesting";
// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      logo: { src: "./src/assets/houston.webp", replacesTitle: true },
      title: "EngineDocs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
            { label: "Example Sui", link: "/guides/nui/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcssNesting()],
      },
    },
  },
});
