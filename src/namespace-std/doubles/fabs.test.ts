import { expect } from "chai";
import { fabs } from "./index.ts";
import { describe, it } from "node:test";

describe(fabs.name, () => {
	it("returns the absolute value of a floating-point number", () => {
		expect(fabs(123084109743)).to.equal(123084109743);
		expect(fabs(-123.4)).to.equal(123.4);
		expect(fabs(0)).to.equal(0);
		expect(fabs(12523423523523532)).to.equal(12523423523523532);
		expect(fabs(-5252342352352353000000000000)).to.equal(5252342352352353000000000000);
		expect(fabs(-0)).to.equal(0);
		expect(fabs(-Infinity)).to.equal(Infinity);
		expect(fabs(NaN)).to.be.NaN;
	});
});
