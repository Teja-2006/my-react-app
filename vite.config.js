import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // Set to '/' since you are using a custom domain at the root
  plugins: [react()],
});
