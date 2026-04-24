import { describe, it } from "node:test";
import { expect } from "chai";
import { isfinite } from "./index.ts";

describe(isfinite.name, () => {
	it("checks if a floating-point number is normal, subnormal, or zero, but not infinite or NaN", () => {
		expect(isfinite(-Number.MAX_VALUE)).to.equal(true);
		expect(isfinite(Number.MIN_VALUE)).to.equal(true);
		expect(isfinite(0)).to.equal(true);
		expect(isfinite(Infinity)).to.equal(false);
		expect(isfinite(-Infinity)).to.equal(false);
		expect(isfinite(NaN)).to.equal(false);
	});
});
