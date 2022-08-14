// @ts-check

const { getTsconfigPath } = require("@grikomsn/style-guide/eslint/helpers");

/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    require.resolve("@grikomsn/style-guide/eslint/base"),
    require.resolve("@grikomsn/style-guide/eslint/react"),
    require.resolve("@grikomsn/style-guide/eslint/next"),
    require.resolve("@grikomsn/style-guide/eslint/typescript"),
  ],
  plugins: ["tailwindcss"],
  parserOptions: {
    project: getTsconfigPath(),
  },
  rules: {
    "@next/next/no-img-element": ["off"],
    "tailwindcss/classnames-order": ["warn"],
  },
  overrides: [
    {
      files: ["**/*.{gql,graphql}"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      parserOptions: {
        operations: "./graphql/**/*.graphql",
        schema: "./schema.graphql",
      },
    },
  ],
  root: true,
};

module.exports = eslintConfig;
