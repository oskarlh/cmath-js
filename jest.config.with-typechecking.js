import { sharedSettings } from "./jest.config.js";

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	...sharedSettings,
	collectCoverage: true,
	collectCoverageFrom: ["./src/**/*.ts"],
	coverageReporters: ["text"],
	coverageThreshold: {
		global: {
			branches: 5,
			functions: 5,
			lines: 5,
			statements: 5,
		},
	},
	preset: "ts-jest/presets/default-esm",
};
