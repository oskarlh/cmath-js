import { describe, it } from "node:test";
import { expect } from "chai";
import { isinf } from "./index.ts";

describe(isinf.name, () => {
	it("checks if a floating-point number is Infinity or -Infinity", () => {
		expect(isinf(Infinity)).to.equal(true);
		expect(isinf(-Infinity)).to.equal(true);
		expect(isinf(Number.MAX_VALUE)).to.equal(false);
		expect(isinf(0)).to.equal(false);
		expect(isinf(NaN)).to.equal(false);
	});
});
