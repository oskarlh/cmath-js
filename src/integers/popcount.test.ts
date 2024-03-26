import { popcount } from "./popcount.js";

describe(popcount.name, () => {
	it("counts the number of set bits in an integer", () => {
		// The variant with a variable number of digits only makes sense for integers >= 1
		expect(popcount(0b0)).toStrictEqual(0);
		expect(popcount(0b0n)).toStrictEqual(0);

		expect(popcount(0b1)).toStrictEqual(1);
		expect(popcount(0b1n)).toStrictEqual(1);

		expect(popcount(0b11)).toStrictEqual(2);
		expect(popcount(0b11n)).toStrictEqual(2);

		expect(popcount(0b11011)).toStrictEqual(4);
		expect(popcount(0b11011n)).toStrictEqual(4);

		expect(popcount(BigInt("0b" + "1010".repeat(50)))).toStrictEqual(100);
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
			expect(popcount(inv)).toStrictEqual(0);
		}
	});
});
