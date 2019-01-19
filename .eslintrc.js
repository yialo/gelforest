module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    sourceType: 'script',
  },
  plugins: ['import', 'prettier'],
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'function-paren-newline': 'off',
    'linebreak-style': [2, 'unix'],
    'max-len': ['error', 80, 2, { ignoreUrls: true }],
    'no-alert': 'error',
    'no-console': 'error',
    'no-mixed-operators': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'object-curly-newline': 'off',
    'prefer-destructuring': 'off',
    'prettier/prettier': 'error',
    radix: 'off',
    'space-before-function-paren': 0,
  },
};
