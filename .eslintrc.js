//Eslint plugins recommended by https://codeburst.io/revisiting-node-js-testing-part-1-84c33bb4d711

module.exports = {
  extends: ["airbnb-base", "plugin:jest/recommended", "eslint:recommended"],
  plugins: ["import", "jest"],
  env: {
    node: true,
    "jest/globals": true,
    es6: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {}
};
