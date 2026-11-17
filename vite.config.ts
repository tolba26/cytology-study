import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// base "./" keeps every asset path relative, so the same build works on
// Netlify (served at /) and GitHub Pages (served at /<repo-name>/).
export default defineConfig({
  base: "./",
  // one offline bundle with all lecture text; splitting it buys nothing here
  build: { chunkSizeWarningLimit: 1200 },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icon.svg", "apple-touch-icon.png"],
      manifest: {
        name: "Histology & Cytology — study notes",
        short_name: "Histo & Cyto",
        description: "Lecture notes, questions and flashcards for Cytology.",
        start_url: "./",
        scope: "./",
        display: "standalone",
        orientation: "portrait",
        background_color: "#f5f1e8",
        theme_color: "#f5f1e8",
        icons: [
          { src: "icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png" },
          { src: "icon-512-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,webp,woff2}"],
        navigateFallback: "index.html"
      }
    })
  ]
});
