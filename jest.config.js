/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1",
	},
	rootDir: "./src",
	testEnvironment: "node",
	testRegex: "\\.test\\.ts$",
	transform: {
		"^.+\\.ts$": ["@swc/jest"],
	},
};
