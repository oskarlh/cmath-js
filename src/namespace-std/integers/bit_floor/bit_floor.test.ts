import { describe, it } from "node:test";
import { expect } from "chai";
import { bit_floor } from "../index.ts";

describe(bit_floor.name, () => {
	it("rounds unsigned integers down to the nearest power of two", () => {
		for (const [input, expectedResult] of [
			[0, 0],
			[1, 1],
			[2, 2],
			[3, 2],
			[4, 4],
			[5, 4],
			[7, 4],
			[8, 8],
			[9, 8],
			[2 ** 32 - 1, 2 ** 31],
			[2 ** 32, 2 ** 32],
			[2 ** 32 + 1, 2 ** 32],
			[2 ** 48 + 1, 2 ** 48],
			[Number.MAX_SAFE_INTEGER, 2 ** 52],
		]) {
			expect(bit_floor(input)).to.equal(expectedResult);
			expect(bit_floor(BigInt(input))).to.equal(BigInt(expectedResult));
		}

		expect(bit_floor((1n << 999n) - 1n)).to.equal(1n << 998n);
		expect(bit_floor(1n << 999n)).to.equal(1n << 999n);
		expect(bit_floor((1n << 999n) + 1n)).to.equal(1n << 999n);
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
			expect(bit_floor(inv)).to.be.oneOf([0, 0n]);
		}
	});
});
