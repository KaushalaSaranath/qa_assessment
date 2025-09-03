import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.eight25media.com",
    viewportWidth: 1280,
    viewportHeight: 800,
  },
});
