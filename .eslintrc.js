module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  //.eslintrc.js
  rules: {
    quotes: 0,
    semi: 0,
    'no-console': 0,
    'space-before-function-paren': 0,
  },
}
