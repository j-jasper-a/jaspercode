/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  tailwindStylesheet: "./src/styles/globals.css",
  tailwindFunctions: ["clsx", "twMerge", "cn"],

  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-packagejson",
    "prettier-plugin-embed",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
