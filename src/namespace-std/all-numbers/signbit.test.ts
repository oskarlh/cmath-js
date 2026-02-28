import { describe, it } from "node:test";
import { signbit } from "./index.ts";
import { expect } from "chai";

describe(signbit.name, () => {
	it("determines if a number is negative", () => {
		expect(signbit(-Infinity)).to.equal(true);
		expect(signbit(-53245432534253)).to.equal(true);
		expect(signbit(-53245432534253n)).to.equal(true);
		expect(signbit(-0)).to.equal(true);
		expect(signbit(0)).to.equal(false);
		expect(signbit(0n)).to.equal(false);
		expect(signbit(98970789063)).to.equal(false);
		expect(signbit(98970789063n)).to.equal(false);
		expect(signbit(Infinity)).to.equal(false);

		// Most JS engines should support these, but the ECMAScript standard does not
		// guarantee that +NaN and -NaN are different
		// expect(signbit(NaN)).toBe(false);
		// expect(signbit(-NaN)).toBe(true);
	});
});
