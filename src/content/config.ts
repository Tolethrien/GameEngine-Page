import { defineCollection, z } from "astro:content";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
const demosSchema = () =>
  z.object({
    title: z.string(),
    demo: z.string(),
  });

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  i18n: defineCollection({ type: "data", schema: i18nSchema() }),
  demos: defineCollection({ schema: demosSchema() }),
};
