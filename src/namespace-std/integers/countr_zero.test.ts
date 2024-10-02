import { countr_zero } from "./index.js";

describe(countr_zero.name, () => {
	it("counts trailing zeroes", () => {
		// The variant with a variable number of digits only makes sense for integers >= 1
		expect(countr_zero(0b0)).toStrictEqual(0);
		expect(countr_zero(0b0n)).toStrictEqual(0);

		expect(countr_zero(0b1)).toStrictEqual(0);
		expect(countr_zero(0b10)).toStrictEqual(1);
		expect(countr_zero(0b100)).toStrictEqual(2);
		expect(countr_zero(0b1000)).toStrictEqual(3);

		expect(countr_zero(0b1n)).toStrictEqual(0);
		expect(countr_zero(0b10n)).toStrictEqual(1);
		expect(countr_zero(0b100n)).toStrictEqual(2);
		expect(countr_zero(0b1000n)).toStrictEqual(3);

		expect(countr_zero(0b11)).toStrictEqual(0);
		expect(countr_zero(0b110)).toStrictEqual(1);
		expect(countr_zero(0b1101)).toStrictEqual(0);
		expect(countr_zero(0b110111)).toStrictEqual(0);
		expect(countr_zero(0b1110000)).toStrictEqual(4);

		expect(countr_zero(0b11n)).toStrictEqual(0);
		expect(countr_zero(0b110n)).toStrictEqual(1);
		expect(countr_zero(0b1101n)).toStrictEqual(0);
		expect(countr_zero(0b110111n)).toStrictEqual(0);
		expect(countr_zero(0b1110000n)).toStrictEqual(4);

		expect(countr_zero(0x1_ff_ff_f2_ff_0f_ff_ff_ffn)).toStrictEqual(0);
		expect(countr_zero(0x1_ff_ff_f2_ff_0f_ff_00_00n)).toStrictEqual(16);
	});

	it("accepts an optional integer size", () => {
		expect(countr_zero(0, 0b0)).toStrictEqual(0);
		expect(countr_zero(0, 0b111)).toStrictEqual(0);

		expect(countr_zero(0, 0b0n)).toStrictEqual(0);
		expect(countr_zero(0, 0b111n)).toStrictEqual(0);

		expect(countr_zero(1, 0b0)).toStrictEqual(1);
		expect(countr_zero(1, 0b1)).toStrictEqual(0);
		expect(countr_zero(1, 0b10)).toStrictEqual(1);
		expect(countr_zero(1, 0b100)).toStrictEqual(1);

		expect(countr_zero(1, 0b0n)).toStrictEqual(1);
		expect(countr_zero(1, 0b1n)).toStrictEqual(0);
		expect(countr_zero(1, 0b10n)).toStrictEqual(1);
		expect(countr_zero(1, 0b100n)).toStrictEqual(1);

		expect(countr_zero(2, 0b00)).toStrictEqual(2);
		expect(countr_zero(2, 0b11)).toStrictEqual(0);
		expect(countr_zero(2, 0b110)).toStrictEqual(1);
		expect(countr_zero(2, 0b1101)).toStrictEqual(0);
		expect(countr_zero(2, 0b110111)).toStrictEqual(0);
		expect(countr_zero(2, 0b1110000)).toStrictEqual(2);

		expect(countr_zero(2, 0b00n)).toStrictEqual(2);
		expect(countr_zero(2, 0b11n)).toStrictEqual(0);
		expect(countr_zero(2, 0b110n)).toStrictEqual(1);
		expect(countr_zero(2, 0b1101n)).toStrictEqual(0);
		expect(countr_zero(2, 0b110111n)).toStrictEqual(0);
		expect(countr_zero(2, 0b1110000n)).toStrictEqual(2);

		expect(countr_zero(16, 0b110000)).toStrictEqual(4);
		expect(countr_zero(16, 0b110)).toStrictEqual(1);
		expect(countr_zero(15, 0b1101)).toStrictEqual(0);
		expect(countr_zero(15, 0b11011100)).toStrictEqual(2);
		expect(countr_zero(16, 0b1110000)).toStrictEqual(4);
		expect(countr_zero(17, 0b0)).toStrictEqual(17);

		expect(countr_zero(16, 0b110000n)).toStrictEqual(4);
		expect(countr_zero(16, 0b110n)).toStrictEqual(1);
		expect(countr_zero(15, 0b1101n)).toStrictEqual(0);
		expect(countr_zero(15, 0b11011100n)).toStrictEqual(2);
		expect(countr_zero(16, 0b1110000n)).toStrictEqual(4);
		expect(countr_zero(17, 0b0n)).toStrictEqual(17);

		expect(countr_zero(0x1_ff_ff_f2_ff_0f_ff_ff_ffn)).toStrictEqual(0);
		expect(countr_zero(0x1_ff_ff_f2_ff_0f_ff_00_00n)).toStrictEqual(16);
	});

	it("counts non-integers and negative numbers as 0", () => {
		const invalid = [
			1.8,
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
			expect(countr_zero(inv)).toStrictEqual(0);

			expect(countr_zero(0, inv)).toStrictEqual(0);
			expect(countr_zero(1, inv)).toStrictEqual(1);
			expect(countr_zero(2, inv)).toStrictEqual(2);
			if (typeof inv === "number") {
				expect(countr_zero(inv, inv)).toStrictEqual(0);
				expect(countr_zero(inv, 0b11111)).toStrictEqual(0);
			}
		}
	});
});
