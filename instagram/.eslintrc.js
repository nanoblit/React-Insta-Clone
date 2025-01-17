module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  extends: "airbnb",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "babel"],
  rules: {
    "react/jsx-filename-extension": 0,
    "linebreak-style": 0,
    "no-invalid-this": 0,
    "babel/no-invalid-this": 1,
    "arrow-parens": 0,
    "no-debugger": 1,
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/img-redundant-alt": 0,
    "react/no-array-index-key": 0,
    "import/prefer-default-export": 0,
    "react/destructuring-assignment": 0,
    "react/no-unused-prop-types": 0,
    "no-unused-vars": 1,
    "react/prefer-stateless-function": 1,
    "no-restricted-syntax": 0
  }
};
