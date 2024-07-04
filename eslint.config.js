// @ts-check

import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		ignores: ["dist/**", "dist-pack", "node_modules", "tmp"],
	},
	{
		languageOptions: {
			globals: {
				node: true,
			},
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	eslint.configs.recommended,
	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	{
		rules: {
			"@typescript-eslint/ban-ts-comment": "off",
			"@typescript-eslint/no-empty-function": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unnecessary-condition": [
				"error",
				{
					allowConstantLoopConditions: true,
				},
			],
			"@typescript-eslint/no-unused-vars": "off",
			curly: ["warn", "multi-line"],
			"no-constant-condition": ["error", { checkLoops: false }],
			"no-else-return": ["warn", { allowElseIf: true }],
			"no-param-reassign": [
				"error",
				{
					ignorePropertyModificationsForRegex: ["mut_"],
					props: true,
				},
			],
			"prefer-const": ["warn", { destructuring: "all" }],
			"sort-keys": ["warn", "asc", { allowLineSeparatedGroups: true, minKeys: 2, natural: true }],
			"sort-vars": "warn",
		},
	},
	eslintPluginPrettierRecommended,
	{
		rules: {
			"prettier/prettier": "warn",
		},
	},
);
