import { hypot } from "./index.js";

describe(hypot.name, () => {
	it("computes the square root of the sum of the squares of x and y, without undue overflow or underflow", () => {
		expect(hypot(105, 100)).toBeCloseTo(145, 3);
		expect(hypot(-Infinity, 0)).toBe(Infinity);
		expect(hypot(0, -0.1451493619437592)).toBe(0.1451493619437592);
		expect(hypot(0, 0, -0.1451493619437592)).toBe(0.1451493619437592);
		expect(hypot(-3, -2, -1)).toBeCloseTo(3.741657386773941, 3);
	});
});
