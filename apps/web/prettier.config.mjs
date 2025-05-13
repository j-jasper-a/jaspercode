/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */

const config = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  tailwindStylesheet: "./src/styles/globals.css",
  tailwindFunctions: ["clsx", "twMerge", "cn"],
};

export default config;
