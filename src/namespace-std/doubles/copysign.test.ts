import { signbit } from "../index.js";
import { copysign } from "./index.js";

describe(copysign.name, () => {
	it("return a number with the sign from another number", () => {
		expect(copysign(-8, 4)).toBe(8);
		expect(copysign(-0, 4)).toBe(0);
		expect(copysign(-0, -4)).toBe(-0);
		expect(copysign(8, -0)).toBe(-8);
		expect(copysign(8, -4)).toBe(-8);
		expect(copysign(-8, -0.00000000000000000000001)).toBe(-8);
		expect(copysign(-Infinity, 0.00000000000000000000001)).toBe(Infinity);
	});

	it("handles NaNs", () => {
		const positiveA = copysign(NaN, 100);
		const positiveB = copysign(-NaN, 100);

		const negativeA = copysign(NaN, -100);
		const negativeB = copysign(-NaN, -100);

		expect(positiveA).toBeNaN();
		expect(positiveB).toBeNaN();

		expect(negativeA).toBeNaN();
		expect(negativeB).toBeNaN();

		expect(signbit(positiveA)).toBe(signbit(NaN));
		expect(signbit(positiveB)).toBe(signbit(NaN));

		expect(signbit(negativeA)).toBe(signbit(-NaN));
		expect(signbit(negativeB)).toBe(signbit(-NaN));
	});
});
