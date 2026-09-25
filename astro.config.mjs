// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Good Dog",
      cssVariable: "--font-good-dog",
      fallbacks: ["cursive"],
      options: {
        variants: [
          { src: ["./src/assets/fonts/gooddog-plain.regular.ttf"], weight: 400, style: "normal" },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Handmade Alphabet",
      cssVariable: "--font-handmade-alphabet",
      fallbacks: ["cursive"],
      options: {
        variants: [
          { src: ["./src/assets/fonts/handmade-alphabet.regular.otf"], weight: 400, style: "normal" },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Stampatello Faceto",
      cssVariable: "--font-stampatello-faceto",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          { src: ["./src/assets/fonts/stampatello-faceto.regular.otf"], weight: 400, style: "normal" },
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
