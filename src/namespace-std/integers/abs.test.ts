import { describe, it } from "node:test";
import { abs } from "./index.ts";
import { expect } from "chai";

describe(abs.name, () => {
	it("returns the absolute value of an integer number or bigint", () => {
		expect(abs(123084109743)).to.equal(123084109743);
		expect(abs(123084109743n)).to.equal(123084109743n);

		expect(abs(-123084109743)).to.equal(123084109743);
		expect(abs(-123084109743n)).to.equal(123084109743n);

		expect(abs(-123084109743)).to.equal(123084109743);
		expect(abs(-123084109743n)).to.equal(123084109743n);

		expect(abs(0)).to.equal(0);
		expect(abs(0n)).to.equal(0n);

		expect(abs(12523423523523532)).to.equal(12523423523523532);
		expect(abs(12523423523523532n)).to.equal(12523423523523532n);

		expect(abs(-5252342352352353000000000000)).to.equal(5252342352352353000000000000);
		expect(abs(-5252342352352353000000000000n)).to.equal(5252342352352353000000000000n);

		// These do not have bigint equivalents
		expect(abs(-0)).to.equal(0);
		expect(abs(-Infinity)).to.equal(Infinity);
		expect(abs(NaN)).to.be.NaN;
	});
});
