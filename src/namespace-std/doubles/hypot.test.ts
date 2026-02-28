import { expect } from "chai";
import { hypot } from "./index.ts";
import { describe, it } from "node:test";

describe(hypot.name, () => {
	it("computes the square root of the sum of the squares of x and y, without undue overflow or underflow", () => {
		expect(hypot(105, 100)).to.be.closeTo(145, 3);
		expect(hypot(-Infinity, 0)).to.equal(Infinity);
		expect(hypot(0, -0.1451493619437592)).to.equal(0.1451493619437592);
		expect(hypot(0, 0, -0.1451493619437592)).to.equal(0.1451493619437592);
		expect(hypot(-3, -2, -1)).to.be.closeTo(3.741657386773941, 3);
	});
});
