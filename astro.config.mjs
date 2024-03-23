import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false, nesting: true }),
    starlight({
      title: "EngineDocs",
      social: {},
      sidebar: [
        {
          label: "Intro",
          collapsed: true,
          autogenerate: { directory: "intro" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          collapsed: true,
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/styles/tailwind.css"],
    }),
  ],
});
