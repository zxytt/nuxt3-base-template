module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "standard",
    "plugin:vue/vue3-essential",
    "prettier",
    "@nuxtjs",
    "plugin:nuxt/recommended'",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": 1,
  },
};
