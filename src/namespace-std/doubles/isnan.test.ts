import { describe, it } from "node:test";
import { expect } from "chai";
import { isnan } from "./index.ts";

describe(isnan.name, () => {
	it("checks if a floating-point number is NaN", () => {
		expect(isnan(NaN)).to.equal(true);
		expect(isnan(-Number.MAX_VALUE)).to.equal(false);
		expect(isnan(Number.MIN_VALUE)).to.equal(false);
		expect(isnan(0)).to.equal(false);
		expect(isnan(Infinity)).to.equal(false);
		expect(isnan(-Infinity)).to.equal(false);
	});
});
