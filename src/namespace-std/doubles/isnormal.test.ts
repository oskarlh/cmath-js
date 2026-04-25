import { describe, it } from "node:test";
import { expect } from "chai";
import { isnormal } from "./index.ts";

describe(isnormal.name, () => {
	it("checks if a floating-point number is normal", () => {
		expect(isnormal(1234)).to.equal(true);
		expect(isnormal(Number.MAX_VALUE)).to.equal(true);
		expect(isnormal(0.12345)).to.equal(true);
		expect(isnormal(-12341234)).to.equal(true);
	});
	it("returns `false` for subnormals", () => {
		expect(isnormal(2 ** -1023)).to.equal(false);
		expect(isnormal(-Number.MIN_VALUE)).to.equal(false);
	});
	it("returns `false` for NaN", () => {
		expect(isnormal(NaN)).to.equal(false);
	});
	it("returns `false` for (positive and negative) zero", () => {
		expect(isnormal(0)).to.equal(false);
		expect(isnormal(-0)).to.equal(false);
	});
	it("returns `false` for infinites", () => {
		expect(isnormal(Infinity)).to.equal(false);
		expect(isnormal(-Infinity)).to.equal(false);
	});
});
