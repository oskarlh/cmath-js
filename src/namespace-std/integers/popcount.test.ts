import { describe, it } from "node:test";
import { popcount } from "./index.ts";
import { expect } from "chai";

describe(popcount.name, () => {
	it("counts the number of set bits in an integer", () => {
		expect(popcount(0b0)).to.equal(0);
		expect(popcount(0b0n)).to.equal(0);

		expect(popcount(0b1)).to.equal(1);
		expect(popcount(0b1n)).to.equal(1);

		expect(popcount(0b11)).to.equal(2);
		expect(popcount(0b11n)).to.equal(2);

		expect(popcount(0b11011)).to.equal(4);
		expect(popcount(0b11011n)).to.equal(4);

		expect(popcount(BigInt("0b" + "1010".repeat(50)))).to.equal(100);
	});

	it("counts non-integers and negative numbers as 0", () => {
		const invalid = [
			NaN,
			-1,
			-1n,
			-2,
			-3,
			Infinity,
			-Infinity,
			-0xffffffffffffffffffffffffffffffffn,
		];
		for (const inv of invalid) {
			expect(popcount(inv)).to.equal(0);
		}
	});
});
