import { describe, it } from "node:test";
import { expect } from "chai";
import { has_single_bit } from "./index.ts";

describe(has_single_bit.name, () => {
	it("checks if an unsigned integer is a power of two", () => {
		expect(has_single_bit(0b0)).to.equal(false);
		expect(has_single_bit(0b0n)).to.equal(false);

		expect(has_single_bit(0b1)).to.equal(true);
		expect(has_single_bit(0b1n)).to.equal(true);

		expect(has_single_bit(0b11)).to.equal(false);
		expect(has_single_bit(0b11n)).to.equal(false);

		expect(has_single_bit(0b10)).to.equal(true);
		expect(has_single_bit(0b10n)).to.equal(true);

		expect(has_single_bit(0b11011)).to.equal(false);
		expect(has_single_bit(0b11011n)).to.equal(false);

		expect(has_single_bit(BigInt("0b" + "1010".repeat(50)))).to.equal(false);
	});

	it("returns `false` for non-integers and negative numbers", () => {
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
			expect(has_single_bit(inv)).to.equal(false);
		}
	});
});
