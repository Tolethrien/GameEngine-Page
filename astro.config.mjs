import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "pl",
    locales: ["pl", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    tailwind({ applyBaseStyles: false, nesting: true }),
    starlight({
      title: "Docs",
      social: {},
      components: {
        SiteTitle: "/src/components/docs/title.astro",
      },
      logo: {
        dark: "./src/assets/logos/logo-dark.png",
        light: "./src/assets/logos/logo-light.png",
        alt: "misa misa",
      },
      disable404Route: true,
      expressiveCode: {
        useStarlightUiThemeColors: true,
        themes: ["min-dark", "vitesse-light"],
      },
      defaultLocale: "pl",
      locales: {
        en: {
          label: "English",
        },
        pl: {
          label: "Polski",
        },
      },
      sidebar: [
        {
          label: "Intro",
          translations: { pl: "Wstęp" },

          collapsed: true,
          autogenerate: { directory: "intro" },
        },
        {
          label: "Guides",
          translations: { pl: "Poradniki" },
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          translations: { pl: "Odnośniki" },

          collapsed: true,
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/styles/starlight.css"],
    }),
  ],
});
