import { expect } from "chai";
import { pow } from "./index.ts";
import { describe, it } from "node:test";

describe(pow.name, () => {
	it("returns the value of a base raised to a power exponent", () => {
		expect(pow(0, -3)).to.equal(Infinity);
		expect(pow(-0, -3)).to.equal(-Infinity);
		expect(pow(0, -4)).to.equal(Infinity);
		expect(pow(-0, -4)).to.equal(Infinity);
		expect(pow(0, -4.4)).to.equal(Infinity);
		expect(pow(-0, -4.4)).to.equal(Infinity);
		expect(pow(0, -Infinity)).to.equal(Infinity);
		expect(pow(-0, -Infinity)).to.equal(Infinity);
		expect(pow(NaN, 0)).to.equal(1);
		expect(pow(1, NaN)).to.equal(1);
		expect(pow(1, 45)).to.equal(1);
		expect(pow(1, -654132432423)).to.equal(1);
		expect(pow(-1, Infinity)).to.equal(1);
		expect(pow(-1, -Infinity)).to.equal(1);
		expect(pow(0, 555)).to.equal(0);
		expect(pow(-0, 713737315)).to.equal(-0);
		expect(pow(Infinity, -0.2)).to.equal(0);
		expect(pow(Infinity, 3737315.5)).to.equal(Infinity);
		expect(pow(-Infinity, 3737315)).to.equal(-Infinity);
		expect(pow(-Infinity, 3737315.5)).to.equal(Infinity);
		expect(pow(-3, 3)).to.equal(-27);
	});
});
