module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "airbnb-base", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "double"],
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "no-console": "warn",
    "linebreak-style": "off",
  },
};
