import { describe, it } from "node:test";
import { expect } from "chai";
import { bit_ceil } from "../index.ts";

describe(bit_ceil.name, () => {
	it("rounds unsigned integers up to the nearest power of two", () => {
		for (const [input, expectedResult] of [
			[0, 1],
			[1, 1],
			[2, 2],
			[3, 4],
			[4, 4],
			[5, 8],
			[7, 8],
			[8, 8],
			[9, 16],
			[2 ** 48 + 1, 2 ** 49],
			[2 ** 52, 2 ** 52],
		]) {
			expect(bit_ceil(input)).to.equal(expectedResult);
			expect(bit_ceil(BigInt(input))).to.equal(BigInt(expectedResult));
		}

		expect(2n << (999n + 1n)).to.equal(2n << 1000n);
		expect(2n << 999n).to.equal(2n << 999n);
	});

	it("returns `1` for non-integers and negative numbers", () => {
		const invalid = [
			NaN,
			-1,
			-1n,
			-2,
			-2n,
			Infinity,
			-Infinity,
			2 ** 52 + 1, // Result wouldn't fit in a safe integer
			-0xffffffffffffffffffffffffffffffffn,
		];
		for (const inv of invalid) {
			expect(Number(bit_ceil(inv))).to.equal(1);
		}
	});
});
