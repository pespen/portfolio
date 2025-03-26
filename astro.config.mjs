// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Replace with your GitHub username
  site: "https://yourusername.github.io",

  // Set to '/' since this will be deployed to the main GitHub Pages URL
  base: "/",

  vite: {
    plugins: [tailwindcss()],
  },
});
