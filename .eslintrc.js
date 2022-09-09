// @ts-check

/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  extends: [require.resolve("@grikomsn/style-guide/eslint/node")],
  root: true,
};

module.exports = eslintConfig;
