module.exports = {
	plugins: ["prettier-plugin-tailwindcss", `prettier-plugin-svelte`],
	pluginSearchDirs: ["."],
	printWidth: 120,
	tabWidth: 2,
	useTabs: true,
	semi: false,
	singleQuote: false,
	bracketSpacing: false,
	trailingComma: `all`,
	overrides: [
		{
			files: `*.svelte`,
			options: {parser: `svelte`},
		},
	],
}