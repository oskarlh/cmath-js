import { describe, it } from "node:test";
import { frexp } from "./index.ts";
import { expect } from "chai";

describe(frexp.name, () => {
	it("decomposes a number into a normalized fraction and an integral power of two", () => {
		expect(frexp(1)).to.deep.equal({ exponent: 1, fraction: 0.5 });
		expect(frexp(1.5)).to.deep.equal({ exponent: 1, fraction: 0.75 });
		expect(frexp(3 * 2 ** 500)).to.deep.equal({ exponent: 502, fraction: 0.75 });
		expect(frexp(-4)).to.deep.equal({ exponent: 3, fraction: -0.5 });
		expect(frexp(Number.MAX_VALUE)).to.deep.equal({ exponent: 1024, fraction: 0.9999999999999999 });
		expect(frexp(Number.MIN_VALUE)).to.deep.equal({ exponent: -1073, fraction: 0.5 });
		expect(frexp(-Infinity)).to.deep.equal({ exponent: 0, fraction: -Infinity });
		expect(frexp(-0)).to.deep.equal({ exponent: 0, fraction: -0 });
		expect(frexp(NaN)).to.deep.equal({ exponent: 0, fraction: NaN });
	});
});
