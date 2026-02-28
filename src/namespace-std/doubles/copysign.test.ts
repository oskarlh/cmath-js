import { expect } from "chai";
import { signbit } from "../index.ts";
import { copysign } from "./index.ts";
import { describe, it } from "node:test";

describe(copysign.name, () => {
	it("return a number with the sign from another number", () => {
		expect(copysign(-8, 4)).to.equal(8);
		expect(copysign(-0, 4)).to.equal(0);
		expect(copysign(-0, -4)).to.equal(-0);
		expect(copysign(8, -0)).to.equal(-8);
		expect(copysign(8, -4)).to.equal(-8);
		expect(copysign(-8, -0.00000000000000000000001)).to.equal(-8);
		expect(copysign(-Infinity, 0.00000000000000000000001)).to.equal(Infinity);
	});

	it("handles NaNs", () => {
		const positiveA = copysign(NaN, 100);
		const positiveB = copysign(-NaN, 100);

		const negativeA = copysign(NaN, -100);
		const negativeB = copysign(-NaN, -100);

		expect(positiveA).to.be.NaN;
		expect(positiveB).to.be.NaN;

		expect(negativeA).to.be.NaN;
		expect(negativeB).to.be.NaN;

		expect(signbit(positiveA)).to.equal(signbit(NaN));
		expect(signbit(positiveB)).to.equal(signbit(NaN));

		expect(signbit(negativeA)).to.equal(signbit(-NaN));
		expect(signbit(negativeB)).to.equal(signbit(-NaN));
	});
});
