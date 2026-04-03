import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), 

    federation({
      name: "profile_remote",
      filename: "remoteEntry.js",

      exposes: {
        "./Profile": "./src/Profile.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],

  build: {
    target: "esnext",
    cssCodeSplit: false,
    modulePreload: false,
  },
  preview: {
    port: 3001,
    cors: true,
  },
});