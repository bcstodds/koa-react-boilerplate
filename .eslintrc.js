module.exports = {
  extends: ['plugin:prettier/recommended'],
  parser: "babel-eslint",
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['/*.*'],
  rules: {
    'import/prefer-default-export': 'off',
  },
};
