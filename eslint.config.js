// eslint.config.js
import { defineConfig } from "eslint/config";
import babelParser from "@babel/eslint-parser";

export default defineConfig([
  {
    rules: {},
    files: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: babelParser,
    },
  },
]);
