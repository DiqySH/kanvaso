import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "Kanvaso",
      fileName: "kanvaso",
    },
    sourcemap: true,
  },
});
