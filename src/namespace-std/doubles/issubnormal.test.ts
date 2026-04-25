import { describe, it } from "node:test";
import { expect } from "chai";
import { issubnormal } from "./index.ts";

describe(issubnormal.name, () => {
	it("checks if a floating-point number is subnormal", () => {
		expect(issubnormal(2 ** -1023)).to.equal(true);
		expect(issubnormal(Number.MIN_VALUE)).to.equal(true);
		expect(issubnormal(-Number.MIN_VALUE)).to.equal(true);
	});
	it("returns `false` for normals", () => {
		expect(issubnormal(1234)).to.equal(false);
		expect(issubnormal(Number.MAX_VALUE)).to.equal(false);
		expect(issubnormal(0.12345)).to.equal(false);
		expect(issubnormal(-12341234)).to.equal(false);
	});
	it("returns `false` for NaN", () => {
		expect(issubnormal(NaN)).to.equal(false);
	});
	it("returns `false` for (positive and negative) zero", () => {
		expect(issubnormal(0)).to.equal(false);
		expect(issubnormal(-0)).to.equal(false);
	});
	it("returns `false` for infinites", () => {
		expect(issubnormal(Infinity)).to.equal(false);
		expect(issubnormal(-Infinity)).to.equal(false);
	});
});
