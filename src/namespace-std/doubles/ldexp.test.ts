import { describe, it } from "node:test";
import { ldexp } from "./index.ts";
import { expect } from "chai";

describe(ldexp.name, () => {
	it("multiplies a number by 2 raised to an exponent power", () => {
		expect(ldexp(1.5, -1)).to.equal(0.75);
		expect(ldexp(2 ** 25, -3)).to.equal(2 ** 22);
		expect(ldexp(2 ** -1072, 1073)).to.equal(2);
		expect(ldexp(2, 4)).to.equal(2 ** 5);
		expect(ldexp(2, 5)).to.equal(2 ** 6);
		expect(ldexp(NaN, -3)).to.be.NaN;

		expect(ldexp(NaN, NaN)).to.be.NaN;
		expect(ldexp(6, NaN)).to.be.NaN;
		expect(ldexp(Infinity, 43)).to.equal(Infinity);
	});
});
