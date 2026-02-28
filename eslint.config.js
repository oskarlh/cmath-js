// @ts-check

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import tseslint from "typescript-eslint";

export default defineConfig(
	{ files: ["src/"] },
	{ ignores: ["dist/", "dist-pack/", "tmp/"] },
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
	tseslint.configs.strict,
	tseslint.configs.stylistic,
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
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					ignoreRestSiblings: true,
					varsIgnorePattern: "^_",
				},
			],
			"@typescript-eslint/restrict-template-expressions": ["off"],
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
	eslintConfigPrettier,
);
