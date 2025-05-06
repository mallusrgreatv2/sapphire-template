import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  minify: false,
  bundle: false,
  clean: true,
  format: "esm",
  silent: true,
});
