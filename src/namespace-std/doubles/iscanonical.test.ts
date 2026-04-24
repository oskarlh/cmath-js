import { describe, it } from "node:test";
import { expect } from "chai";
import { iscanonical } from "./index.ts";

describe(iscanonical.name, () => {
	it("checks if a floating-point number is canonical (always true in JavaScript)", () => {
		expect(iscanonical(Infinity)).to.equal(true);
		expect(iscanonical(-NaN)).to.equal(true);
		expect(iscanonical(Number.MIN_VALUE)).to.equal(true);
		expect(iscanonical(-0)).to.equal(true);
	});
});
