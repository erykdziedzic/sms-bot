module.exports = {
  env: {
    es6: true,
    jest: true,
    'react-native/react-native': true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:import/errors'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'prettier', 'module-resolver'],
  rules: {
    'no-use-before-define': ['error', { functions: false }],
    'module-resolver/use-alias': 2,
    'prettier/prettier': ['error'],
    'react/prop-types': 'off',
    'react-native/no-single-element-style-arrays': 2,
    'react-native/no-unused-styles': 2,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
