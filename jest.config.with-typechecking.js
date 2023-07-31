import withoutTypechecking from "./jest.config.js";

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	...withoutTypechecking,
	transform: {
		"^.+\\.ts$": ["ts-jest"],
	},
};
