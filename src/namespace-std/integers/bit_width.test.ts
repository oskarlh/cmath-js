import { describe, it } from "node:test";
import { expect } from "chai";
import { bit_width } from "../index.ts";

describe(bit_width.name, () => {
	it("calculates the number of bits needed to store an unsigned integer", () => {
		for (const [input, expectedResult] of [
			[0, 0],
			[1, 1],
			[2, 2],
			[3, 2],
			[4, 3],
			[5, 3],
			[7, 3],
			[8, 4],
			[9, 4],
			[2 ** 32 - 1, 32],
			[2 ** 32, 33],
			[2 ** 32 + 1, 33],
			[2 ** 48, 49],
			[Number.MAX_SAFE_INTEGER, 53],
		]) {
			expect(bit_width(input)).to.equal(expectedResult);
			expect(bit_width(BigInt(input))).to.equal(expectedResult);
		}

		expect(bit_width((1n << 999n) - 1n)).to.equal(999);
		expect(bit_width(1n << 999n)).to.equal(1000);
		expect(bit_width((1n << 999n) + 1n)).to.equal(1000);
	});

	it("returns zero for non-integers and negative numbers", () => {
		const invalid = [
			NaN,
			-1,
			-1n,
			-2,
			-2n,
			Infinity,
			-Infinity,
			-0xffffffffffffffffffffffffffffffffn,
		];
		for (const inv of invalid) {
			expect(bit_width(inv)).to.equal(0);
		}
	});
});
