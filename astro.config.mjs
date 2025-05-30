import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import clerk from "@clerk/astro";
import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [clerk()],
  output: "server",
  adapter: netlify(),  
  vite: {
    plugins: [tailwindcss()],
  },
});
