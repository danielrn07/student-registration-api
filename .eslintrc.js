module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    quotes: ['error', 'single'],
    'class-methods-use-this': 'off',
    'import/first': 'off',
  },
  settings: {
    'import/core-modules': ['dotenv', 'sequelize'],
  },
};
