import { sharedSettings } from "./jest.config.js";

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	...sharedSettings,
	collectCoverage: true,
	collectCoverageFrom: ["./src/**/*.ts"],
	coverageReporters: ["text"],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	preset: "ts-jest/presets/default-esm",
};
