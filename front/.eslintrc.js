// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "standard"
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    quotes: 0,
    semi: [2, "always"],
    "no-empty": 2,
    "no-eq-null": 2,
    "no-new": 0,
    "no-fallthrough": 0,
    "no-unreachable": 0,
    "handle-callback-err": 0,
    "space-before-function-paren": 0,
    "spaced-comment": 0,
    "no-multiple-empty-lines": 0,
    "eol-last": 0,
    "no-unused-vars": 1,
    "no-trailing-spaces": 0
  }
};
