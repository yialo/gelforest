module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: [
    'import',
    'prettier',
  ],
  rules: {
		'arrow-body-style': 'off',
		'arrow-parens': 'off',
		'function-paren-newline': 'off', // несовместимо с prettier
		'linebreak-style': 'off',
		'max-len': ['error', 100, 2, { ignoreUrls: true, }],
		'no-alert': 'error',
		'no-console': 'error',
		'no-mixed-operators': 'off', // несовместимо с prettier
		'no-param-reassign': 'off',
		'no-plusplus': 'off',
		'object-curly-newline': 'off', // несовместимо с prettier
		'prefer-destructuring': 'off',
		'prettier/prettier': ['error'],
		'space-before-function-paren': 0, // несовместимо с prettier
		"radix": "off",
	},
};
