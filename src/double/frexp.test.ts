import { frexp } from "./frexp.js";

describe("frexp", () => {
	it("decomposes a number into a normalized fraction and an integral power of two", () => {
		expect(frexp(1)).toStrictEqual([0.5, 1]);
		expect(frexp(1.5)).toStrictEqual([0.75, 1]);
		expect(frexp(3 * 2 ** 500)).toStrictEqual([0.75, 502]);
		expect(frexp(-4)).toStrictEqual([-0.5, 3]);
		expect(frexp(Number.MAX_VALUE)).toStrictEqual([0.9999999999999999, 1024]);
		expect(frexp(Number.MIN_VALUE)).toStrictEqual([0.5, -1073]);
		expect(frexp(-Infinity)).toStrictEqual([-Infinity, 0]);
		expect(frexp(-0)).toStrictEqual([-0, 0]);
		expect(frexp(NaN)).toStrictEqual([NaN, 0]);
	});
});
