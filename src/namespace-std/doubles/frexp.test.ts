import { frexp } from "./index.js";

describe(frexp.name, () => {
	it("decomposes a number into a normalized fraction and an integral power of two", () => {
		expect(frexp(1)).toStrictEqual({ exponent: 1, fraction: 0.5 });
		expect(frexp(1.5)).toStrictEqual({ exponent: 1, fraction: 0.75 });
		expect(frexp(3 * 2 ** 500)).toStrictEqual({ exponent: 502, fraction: 0.75 });
		expect(frexp(-4)).toStrictEqual({ exponent: 3, fraction: -0.5 });
		expect(frexp(Number.MAX_VALUE)).toStrictEqual({ exponent: 1024, fraction: 0.9999999999999999 });
		expect(frexp(Number.MIN_VALUE)).toStrictEqual({ exponent: -1073, fraction: 0.5 });
		expect(frexp(-Infinity)).toStrictEqual({ exponent: 0, fraction: -Infinity });
		expect(frexp(-0)).toStrictEqual({ exponent: 0, fraction: -0 });
		expect(frexp(NaN)).toStrictEqual({ exponent: 0, fraction: NaN });
	});
});
