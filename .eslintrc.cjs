module.exports = {
	plugins: [`import`],
	parserOptions: {
		sourceType: `module`,
		ecmaVersion: 2021,
	},
	env: {
		es2021: true,
		node: true,
	},
	settings: {
		"import/resolver": {
			exports: true,
		},
	},
	extends: [`eslint:recommended`, `plugin:import/recommended`],
	rules: {
		eqeqeq: `warn`,
		"import/no-anonymous-default-export": `warn`,
		"import/no-named-as-default": `off`,
		"import/no-named-as-default-member": `off`,
		"import/order": [
			`warn`,
			{
				groups: [
					[`builtin`, `external`],
					[`object`, `unknown`, `type`],
					[`internal`, `parent`, `index`, `sibling`],
				],
				pathGroupsExcludedImportTypes: [`type`],
				"newlines-between": `always`,
				alphabetize: {order: `asc`, caseInsensitive: true},
				warnOnUnassignedImports: true,
			},
		],
		"import/no-unresolved": `off`,
		"sort-imports": [`warn`, {ignoreDeclarationSort: true}],
		"no-console": [`warn`, {allow: [`info`, `warn`, `error`]}],
		"no-constant-condition": [`error`, {checkLoops: false}],
		"no-control-regex": `off`,
		"no-empty": [`warn`, {allowEmptyCatch: true}],
		"no-mixed-spaces-and-tabs": [`warn`, `smart-tabs`],
		"no-nested-ternary": `warn`,
		"no-param-reassign": `error`,
		"no-unused-expressions": `warn`,
		"no-unused-vars": [`warn`, {ignoreRestSiblings: true}],
		"object-shorthand": `warn`,
		quotes: [`warn`, `backtick`],
		"require-await": `warn`,
		yoda: `warn`,
	},
	overrides: [
		{
			files: [`**/*.ts`, `**/*.svelte`],
			parser: `@typescript-eslint/parser`,
			parserOptions: {
				project: `./tsconfig.json`,
				extraFileExtensions: [`.svelte`],
			},
			plugins: [`@typescript-eslint`],
			settings: {
				"import/resolver": {
					typescript: true,
				},
			},
			extends: [
				`plugin:@typescript-eslint/recommended`,
				`plugin:@typescript-eslint/recommended-requiring-type-checking`,
				`plugin:import/typescript`,
			],
			rules: {
				"@typescript-eslint/ban-ts-comment": [`warn`, {"ts-ignore": `allow-with-description`}],
				"@typescript-eslint/consistent-type-imports": `warn`,
				"@typescript-eslint/explicit-module-boundary-types": `warn`,
				"@typescript-eslint/no-empty-function": `off`,
				"@typescript-eslint/no-extra-semi": `off`,
				"@typescript-eslint/no-floating-promises": `warn`,
				"@typescript-eslint/no-misused-promises": `warn`,
				"@typescript-eslint/no-non-null-assertion": `off`,
				"@typescript-eslint/no-unnecessary-condition": `warn`,
				"@typescript-eslint/no-unnecessary-type-assertion": `warn`,
				"@typescript-eslint/no-unsafe-assignment": `warn`,
				"@typescript-eslint/no-unsafe-call": `warn`,
				"@typescript-eslint/no-unsafe-member-access": `warn`,
				"@typescript-eslint/no-unsafe-return": `off`,
				"@typescript-eslint/no-unused-vars": [`warn`, {ignoreRestSiblings: true}],
				"@typescript-eslint/quotes": [`warn`, `backtick`],
				"prefer-const": `off`,
				quotes: `off`,
			},
		},
		{
			files: [`**/*.svelte`],
			parser: `svelte-eslint-parser`,
			parserOptions: {
				parser: `@typescript-eslint/parser`,
			},
			env: {
				browser: true,
			},
			extends: [`plugin:svelte/recommended`],
		},
	],
}
