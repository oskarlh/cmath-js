import { pow } from "./pow.js";

describe(pow.name, () => {
	it("returns the value of a base raised to a power exponent", () => {
		expect(pow(0, -3)).toBe(Infinity);
		expect(pow(-0, -3)).toBe(-Infinity);
		expect(pow(0, -4)).toBe(Infinity);
		expect(pow(-0, -4)).toBe(Infinity);
		expect(pow(0, -4.4)).toBe(Infinity);
		expect(pow(-0, -4.4)).toBe(Infinity);
		expect(pow(0, -Infinity)).toBe(Infinity);
		expect(pow(-0, -Infinity)).toBe(Infinity);
		expect(pow(NaN, 0)).toBe(1);
		expect(pow(1, NaN)).toBe(1);
		expect(pow(1, 45)).toBe(1);
		expect(pow(1, -654132432423)).toBe(1);
		expect(pow(-1, Infinity)).toBe(1);
		expect(pow(-1, -Infinity)).toBe(1);
		expect(pow(0, 555)).toBe(0);
		expect(pow(-0, 713737315)).toBe(-0);
		expect(pow(Infinity, -0.2)).toBe(0);
		expect(pow(Infinity, 3737315.5)).toBe(Infinity);
		expect(pow(-Infinity, 3737315)).toBe(-Infinity);
		expect(pow(-Infinity, 3737315.5)).toBe(Infinity);
		expect(pow(-3, 3)).toBe(-27);
	});
});
