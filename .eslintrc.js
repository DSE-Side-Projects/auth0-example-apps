module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "latest",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["@typescript-eslint", "react", "import"],
  parserOptions: {
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
    ecmaVersion: 6, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  rules: {
    "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
    "@typescript-eslint/explicit-function-return-type": "off",

    // The following rules are temporary. They are required to get linting started with Typescript and will be removed eventually
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-empty-function": "off",
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ["*.js", "*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off", //
      },
    },
  ],
}
