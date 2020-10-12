module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		useJSXTextNode: true,
		project: "./tsconfig.json",
		sourceType: "module",
		ecmaVersion: 2019
	},
	plugins: ["@typescript-eslint", "react", "react-hooks", "import", "unused-imports"],
	rules: {
		"no-console": "error",
		"@typescript-eslint/no-non-null-assertion": "warn",
		"react-hooks/rules-of-hooks": "error",
		"import/no-default-export": "error",
		"no-duplicate-imports": "error",
		"unused-imports/no-unused-imports-ts": ["error", {
			"varsIgnorePattern": "^React"
		}],
		"quotes": ["error", "double", { "avoidEscape": true }],
		"arrow-body-style": "error",
		"no-unused-vars": ["error", { "args": "after-used" }],
		"react/prop-types": "off",
		"react/display-name": "off"
	},
	extends: ["plugin:react/recommended"],
	ignorePatterns: ["tsconfig.json", "src/serviceWorker.ts"],
	env: {
		es6: true
	}
}