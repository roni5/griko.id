// @ts-check

/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  extends: [
    require.resolve("@grikomsn/style-guide/eslint/node"),
    require.resolve("@grikomsn/style-guide/eslint/typescript"),
  ],
  root: true,
};

module.exports = eslintConfig;
