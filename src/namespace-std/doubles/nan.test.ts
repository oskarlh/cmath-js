import { nan } from "./index.js";

describe(nan.name, () => {
	// Unforutunately there's not many tests we can do that would work with
	// all JavaScript engines, since they may discard or alter any bits in NaN
	it("accepts an empty string", () => {
		expect(nan("")).toBe(NaN);
	});
	it("accepts strings with small numbers", () => {
		expect(nan("4")).toBe(NaN);
	});
	it("accepts strings with overly large numbers", () => {
		expect(nan("1234567890123456789012345678901234567890")).toBe(NaN);
	});
	it("accepts strings of any kind", () => {
		expect(nan("test")).toBe(NaN);
		expect(nan("🐉")).toBe(NaN);
	});
});
