import { describe, it } from "node:test";
import { expect } from "chai";
import { iszero } from "./index.ts";

describe(iszero.name, () => {
	it("checks if a floating-point number is zero", () => {
		expect(iszero(0)).to.equal(true);
		expect(iszero(-0)).to.equal(true);
		expect(iszero(Number.MIN_VALUE)).to.equal(false);
		expect(iszero(NaN)).to.equal(false);
		expect(iszero(-Infinity)).to.equal(false);
	});
});
