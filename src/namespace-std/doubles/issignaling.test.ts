import { expect } from "chai";
import { describe, it } from "node:test";
import { issignaling } from "./issignaling.ts";

describe(issignaling.name, () => {
	// Unforutunately there's not many tests we can do that would work with
	// all JavaScript engines, since they may discard or alter any bits in NaN
	it("does not give false positives for non-NaNs", () => {
		expect(issignaling(Infinity)).to.equal(false);
		expect(issignaling(-Infinity)).to.equal(false);
		expect(issignaling(0)).to.equal(false);
		expect(issignaling(Number.MAX_VALUE)).to.equal(false);
		expect(issignaling(Number.MIN_VALUE)).to.equal(false);
	});

	it("tests NaNs", () => {
		expect(issignaling(NaN)).to.be.a("boolean");
	});
});
