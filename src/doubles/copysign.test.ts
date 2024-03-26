import { copysign } from "./copysign.js";

describe(copysign.name, () => {
	it("return a number with the sign from another number", () => {
		expect(copysign(8, -4)).toBe(-8);
		expect(copysign(-8, -0.00000000000000000000001)).toBe(-8);
		expect(copysign(-Infinity, 0.00000000000000000000001)).toBe(Infinity);
	});
});
