import { describe, it } from "node:test";
import { lcm } from "../index.ts";
import { expect } from "chai";

describe(lcm.name, () => {
	it("finds the least common multiple", () => {
		const values = [
			{
				a: 3,
				b: 3,
				expectedMultiple: 3,
			},
			{
				a: 5,
				b: 15,
				expectedMultiple: 15,
			},
			{
				a: 6,
				b: 8,
				expectedMultiple: 24,
			},
			{
				a: 536870912,
				b: 1073741824,
				expectedMultiple: 1073741824,
			},
		] as const;
		for (const { a, b, expectedMultiple } of values) {
			expect(lcm(a, b)).to.equal(expectedMultiple);
			expect(lcm(b, a)).to.equal(expectedMultiple);
			expect(lcm(-a, b)).to.equal(expectedMultiple);
			expect(lcm(a, -b)).to.equal(expectedMultiple);
			expect(lcm(-a, -b)).to.equal(expectedMultiple);
			const bigA = BigInt(a);
			const bigB = BigInt(b);
			expect(lcm(bigA, bigB)).to.equal(BigInt(expectedMultiple));
			expect(lcm(bigB, bigA)).to.equal(BigInt(expectedMultiple));
			expect(lcm(-bigA, bigB)).to.equal(BigInt(expectedMultiple));
			expect(lcm(bigA, -bigB)).to.equal(BigInt(expectedMultiple));
			expect(lcm(-bigB, -bigA)).to.equal(BigInt(expectedMultiple));
		}
	});

	it("returns 0 if at least one of the arguments are 0", () => {
		expect(lcm(0, 0)).to.equal(0);
		expect(lcm(-0, -0)).to.equal(0);
		expect(lcm(-4, 0)).to.equal(0);
		expect(lcm(0, -0)).to.equal(0);
		expect(lcm(0n, 0n)).to.equal(0n);
		expect(lcm(4n, 0n)).to.equal(0n);
		expect(lcm(0n, 4n)).to.equal(0n);
	});

	it("returns 0 if one or both parameters are non-integers", () => {
		expect(lcm(9, 4.5)).to.equal(0);
		expect(lcm(4.5, Infinity)).to.equal(0);
		expect(lcm(-Infinity, 4)).to.equal(0);
		expect(lcm(NaN, 4)).to.equal(0);
		expect(lcm(NaN, NaN)).to.equal(0);
		expect(lcm(4, Number.MAX_SAFE_INTEGER + 1)).to.equal(0);
	});
});
