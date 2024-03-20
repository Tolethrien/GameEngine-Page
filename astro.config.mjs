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
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
            { label: "Example Sui", link: "/guides/nui/" },
          ],
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
