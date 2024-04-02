import { ldexp } from "./ldexp.js";

describe(ldexp.name, () => {
	it("multiplies a number by 2 raised to an exponent power", () => {
		expect(ldexp(1.5, -1)).toBe(0.75);
		expect(ldexp(2 ** 25, -3)).toBe(2 ** 22);
		expect(ldexp(2 ** -1072, 1073)).toBe(2);
		expect(ldexp(2, 4)).toBe(2 ** 5);
		expect(ldexp(2, 5)).toBe(2 ** 6);
		expect(ldexp(NaN, -3)).toBe(NaN);

		expect(ldexp(NaN, NaN)).toBe(NaN);
		expect(ldexp(6, NaN)).toBe(NaN);
		expect(ldexp(Infinity, 43)).toBe(Infinity);
	});
});
