import { describe, it } from "node:test";
import { nextafter } from "./index.ts";
import { expect } from "chai";

describe(nextafter.name, () => {
	it("returns the next representable value in the direction of another number", () => {
		expect(nextafter(-3.5, 3.5)).to.equal(-3.5 + Number.EPSILON * 2);
		expect(nextafter(1, 2)).to.equal(1 + Number.EPSILON);
		expect(nextafter(3, 4)).to.equal(3 + Number.EPSILON * 2);
		expect(nextafter(3.5, 3.5)).to.equal(3.5);
		expect(nextafter(-3.5, -3.5)).to.equal(-3.5);
		expect(nextafter(1024, -Infinity)).to.equal(1024 - (Number.EPSILON * 1024) / 2);
		expect(nextafter(-0, 0)).to.equal(0);
		expect(nextafter(0, -0)).to.equal(-0);
		expect(nextafter(-0, -0)).to.equal(-0);
		expect(nextafter(NaN, NaN)).to.be.NaN;
		expect(nextafter(NaN, 0)).to.be.NaN;
		expect(nextafter(0, NaN)).to.be.NaN;
		expect(nextafter(Infinity, Infinity)).to.equal(Infinity);
		expect(nextafter(Infinity, -Infinity)).to.equal(Number.MAX_VALUE);
		expect(nextafter(-Infinity, Infinity)).to.equal(-Number.MAX_VALUE);
		expect(nextafter(-Infinity, -Infinity)).to.equal(-Infinity);
		expect(nextafter(Number.MAX_VALUE, Infinity)).to.equal(Infinity);
		expect(nextafter(-Number.MAX_VALUE, -Infinity)).to.equal(-Infinity);
		expect(nextafter(Number.MIN_VALUE, -1)).to.equal(0);
		expect(nextafter(-Number.MIN_VALUE, Infinity)).to.equal(-0);
		expect(nextafter(Number.MIN_VALUE, -0)).to.equal(0);
		expect(nextafter(Number.MIN_VALUE, 1)).to.equal(Number.MIN_VALUE * 2);
		expect(nextafter(-Number.MIN_VALUE, -1)).to.equal(-Number.MIN_VALUE * 2);
	});
});
