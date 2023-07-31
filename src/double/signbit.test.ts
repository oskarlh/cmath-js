import { signbit } from "./signbit.js";

describe("signbit", () => {
	it("determines if a number is negative", () => {
		expect(signbit(-Infinity)).toBe(true);
		expect(signbit(-53245432534253)).toBe(true);
		expect(signbit(-0)).toBe(true);
		expect(signbit(0)).toBe(false);
		expect(signbit(98970789063)).toBe(false);
		expect(signbit(Infinity)).toBe(false);
		expect(signbit(NaN)).toBe(false);
	});
});
