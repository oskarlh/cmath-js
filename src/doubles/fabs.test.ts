import { fabs } from "./fabs.js";

describe(fabs.name, () => {
	it("returns the absolute value of a floating-point number", () => {
		expect(fabs(123084109743)).toBe(123084109743);
		expect(fabs(-123.4)).toBe(123.4);
		expect(fabs(0)).toBe(0);
		expect(fabs(12523423523523532)).toBe(12523423523523532);
		expect(fabs(-5252342352352353000000000000)).toBe(5252342352352353000000000000);
		expect(fabs(-0)).toBe(0);
		expect(fabs(-Infinity)).toBe(Infinity);
		expect(fabs(NaN)).toBe(NaN);
	});
});
