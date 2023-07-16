module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin", "@graphql-eslint"],
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js", "src/graphql.ts"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    quotes: "off",
    "no-restricted-syntax": [
      "error",
      {
        selector: "ImportDeclaration[source.value=/graphql-types/]",
        message: 'Named imports are not allowed from "graphql-types" imports. Use "import as GraphQLTypes [...]" instead',
      },
    ],
  },
};
