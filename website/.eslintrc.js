// @ts-check

const { getTsconfigPath } = require("@grikomsn/style-guide/eslint/helpers");

/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  extends: [require.resolve("@project/eslint-config")],
  ignorePatterns: [".next", "__generated__", "node_modules", "out", "public/assets"],
  parserOptions: {
    project: getTsconfigPath(),
  },
  root: true,
};

module.exports = eslintConfig;
