/** @type {import('@jest/types').Config.InitialOptions} */
export const sharedSettings = {
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1",
	},
	rootDir: ".",
	roots: ["./src"],
	testEnvironment: "node",
	testRegex: "\\.test\\.ts$",
};

/** @type {import('@jest/types').Config.InitialOptions} */
export default {
	...sharedSettings,
	transform: {
		"^.+\\.ts$": ["@swc/jest"],
	},
};
