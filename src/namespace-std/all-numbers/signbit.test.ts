import { signbit } from "./index.js";

describe(signbit.name, () => {
	it("determines if a number is negative", () => {
		expect(signbit(-Infinity)).toBe(true);
		expect(signbit(-53245432534253)).toBe(true);
		expect(signbit(-53245432534253n)).toBe(true);
		expect(signbit(-0)).toBe(true);
		expect(signbit(0)).toBe(false);
		expect(signbit(0n)).toBe(false);
		expect(signbit(98970789063)).toBe(false);
		expect(signbit(98970789063n)).toBe(false);
		expect(signbit(Infinity)).toBe(false);

		// Most JS engines should support these, but the ECMAScript standard does not
		// guarantee that +NaN and -NaN are different
		// expect(signbit(NaN)).toBe(false);
		// expect(signbit(-NaN)).toBe(true);
	});
});
