import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://jdea182.github.io',
  base: '/travowl_landing',
  vite: {
    plugins: [tailwindcss()],
  },
});
