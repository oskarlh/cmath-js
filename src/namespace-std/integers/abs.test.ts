import { abs } from "./index.js";

describe(abs.name, () => {
	it("returns the absolute value of an integer number or bigint", () => {
		expect(abs(123084109743)).toBe(123084109743);
		expect(abs(123084109743n)).toBe(123084109743n);

		expect(abs(-123084109743)).toBe(123084109743);
		expect(abs(-123084109743n)).toBe(123084109743n);

		expect(abs(-123084109743)).toBe(123084109743);
		expect(abs(-123084109743n)).toBe(123084109743n);

		expect(abs(0)).toBe(0);
		expect(abs(0n)).toBe(0n);

		expect(abs(12523423523523532)).toBe(12523423523523532);
		expect(abs(12523423523523532n)).toBe(12523423523523532n);

		expect(abs(-5252342352352353000000000000)).toBe(5252342352352353000000000000);
		expect(abs(-5252342352352353000000000000n)).toBe(5252342352352353000000000000n);

		// These do not have bigint equivalents
		expect(abs(-0)).toBe(0);
		expect(abs(-Infinity)).toBe(Infinity);
		expect(abs(NaN)).toBe(NaN);
	});
});
