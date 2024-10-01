import { nextafter } from "./index.js";

describe(nextafter.name, () => {
	it("returns the next representable value in the direction of another number", () => {
		expect(nextafter(-3.5, 3.5)).toBe(-3.5 + Number.EPSILON * 2);
		expect(nextafter(1, 2)).toBe(1 + Number.EPSILON);
		expect(nextafter(3, 4)).toBe(3 + Number.EPSILON * 2);
		expect(nextafter(3.5, 3.5)).toBe(3.5);
		expect(nextafter(-3.5, -3.5)).toBe(-3.5);
		expect(nextafter(1024, -Infinity)).toBe(1024 - (Number.EPSILON * 1024) / 2);
		expect(nextafter(-0, 0)).toBe(0);
		expect(nextafter(0, -0)).toBe(-0);
		expect(nextafter(-0, -0)).toBe(-0);
		expect(nextafter(NaN, NaN)).toBe(NaN);
		expect(nextafter(NaN, 0)).toBe(NaN);
		expect(nextafter(0, NaN)).toBe(NaN);
		expect(nextafter(Infinity, Infinity)).toBe(Infinity);
		expect(nextafter(Infinity, -Infinity)).toBe(Number.MAX_VALUE);
		expect(nextafter(-Infinity, Infinity)).toBe(-Number.MAX_VALUE);
		expect(nextafter(-Infinity, -Infinity)).toBe(-Infinity);
		expect(nextafter(Number.MAX_VALUE, Infinity)).toBe(Infinity);
		expect(nextafter(-Number.MAX_VALUE, -Infinity)).toBe(-Infinity);
		expect(nextafter(Number.MIN_VALUE, -1)).toBe(0);
		expect(nextafter(-Number.MIN_VALUE, Infinity)).toBe(-0);
		expect(nextafter(Number.MIN_VALUE, -0)).toBe(0);
		expect(nextafter(Number.MIN_VALUE, 1)).toBe(Number.MIN_VALUE * 2);
		expect(nextafter(-Number.MIN_VALUE, -1)).toBe(-Number.MIN_VALUE * 2);
	});
});
