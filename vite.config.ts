import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["react", "react-dom"],
    },
    lib: {
      entry: {
        index: "src/index.ts",
        pen: "src/pen/index.ts",
        "pen-react": "src/pen-react/index.ts",
      },
      name: "Kanvaso",
      fileName: (format, entryName) => `kanvaso-${entryName}.${format}.js`,
      formats: ["es", "cjs"],
    },
    sourcemap: true,
  },
});
