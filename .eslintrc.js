module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	rules: {
		'no-console': 0,
		'linebreak-style': 0,
		'react/function-component-definition': 0,
		'import/prefer-default-export': 0,
		'import/newline-after-import': 0,
		'react/no-array-index-key': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'import/no-extraneous-dependencies': 0,
		'object-curly-newline': 0,
		'no-unused-expressions': 0,
		'no-underscore-dangle': 0,
		'no-param-reassign': 0,
		'operator-linebreak': 0,
		'react/jsx-filename-extension': 0,
		'implicit-arrow-linebreak' : 0,
		'no-tabs' : 0,
		'react/jsx-wrap-multilines': 0,
		'react/jsx-props-no-spreading': 0,
		'import/no-named-as-default': 0,
		'jsx-a11y/no-noninteractive-element-interactions': 0,
		'func-names': 0,
		'react/jsx-closing-tag-location': 0,
		'no-return-assign': 0,
		'no-return-await': 0,
		'react/display-name': 0,
		'no-extra-boolean-cast': 0,
	},
};
