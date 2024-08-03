import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), react()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "one-dark-pro",
        dark: "one-dark-pro",
      },
    },
  },
});
