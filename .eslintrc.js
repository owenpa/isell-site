module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
  eslintConfig: {
    extends: [
      'react-app',
      'react-app/jest'
    ],
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  },
};
