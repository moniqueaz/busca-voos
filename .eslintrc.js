module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-redux/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: 'writable',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks', 'react-redux'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react-redux/connect-prefer-named-arguments': 2,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react-redux/prefer-separate-component-file': false,
    'no-controle': ['error', { allow: ['tron'] }],
  },
};
