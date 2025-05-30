import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import clerk from "@clerk/astro";
import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [clerk()],
  adapter: netlify({ edge: false }), // edge: true
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
});
