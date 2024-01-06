import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  proxy: {
    "/api": {
      target: "https://simple-chat-app-8qet.vercel.app/",
      changeOrigin: true,
      secure: false,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
});
