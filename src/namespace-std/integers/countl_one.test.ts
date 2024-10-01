import { countl_one } from "./index.js";

describe(countl_one.name, () => {
	it("counts leading ones", () => {
		expect(countl_one(0b0)).toStrictEqual(0);
		expect(countl_one(0b1)).toStrictEqual(1);
		expect(countl_one(0b10)).toStrictEqual(1);
		expect(countl_one(0b100)).toStrictEqual(1);
		expect(countl_one(0b1000)).toStrictEqual(1);

		expect(countl_one(0b0n)).toStrictEqual(0);
		expect(countl_one(0b1n)).toStrictEqual(1);
		expect(countl_one(0b10n)).toStrictEqual(1);
		expect(countl_one(0b100n)).toStrictEqual(1);
		expect(countl_one(0b1000n)).toStrictEqual(1);

		expect(countl_one(0b11)).toStrictEqual(2);
		expect(countl_one(0b110)).toStrictEqual(2);
		expect(countl_one(0b1100)).toStrictEqual(2);
		expect(countl_one(0b11000)).toStrictEqual(2);

		expect(countl_one(0b11n)).toStrictEqual(2);
		expect(countl_one(0b110n)).toStrictEqual(2);
		expect(countl_one(0b1100n)).toStrictEqual(2);
		expect(countl_one(0b11000n)).toStrictEqual(2);

		expect(countl_one(0b111)).toStrictEqual(3);
		expect(countl_one(0b1110)).toStrictEqual(3);
		expect(countl_one(0b11100)).toStrictEqual(3);
		expect(countl_one(0b111000)).toStrictEqual(3);

		expect(countl_one(0b111n)).toStrictEqual(3);
		expect(countl_one(0b1110n)).toStrictEqual(3);
		expect(countl_one(0b11100n)).toStrictEqual(3);
		expect(countl_one(0b111000n)).toStrictEqual(3);

		expect(countl_one(0x1_ff_ff_f2_ff_f2_ff_ff_ffn)).toStrictEqual(21);
	});

	it("accepts an optional integer size", () => {
		expect(countl_one(0, 0b0)).toStrictEqual(0);
		expect(countl_one(0, 0b1)).toStrictEqual(0);

		expect(countl_one(0, 0b0n)).toStrictEqual(0);
		expect(countl_one(0, 0b1n)).toStrictEqual(0);

		expect(countl_one(1, 0b0)).toStrictEqual(0);
		expect(countl_one(1, 0b1)).toStrictEqual(1);
		expect(countl_one(1, 0b10)).toStrictEqual(0);
		expect(countl_one(1, 0b100)).toStrictEqual(0);
		expect(countl_one(1, 0b1110)).toStrictEqual(0);

		expect(countl_one(1, 0b0n)).toStrictEqual(0);
		expect(countl_one(1, 0b1n)).toStrictEqual(1);
		expect(countl_one(1, 0b10n)).toStrictEqual(0);
		expect(countl_one(1, 0b100n)).toStrictEqual(0);
		expect(countl_one(1, 0b1110n)).toStrictEqual(0);

		expect(countl_one(2, 0b00)).toStrictEqual(0);
		expect(countl_one(2, 0b01)).toStrictEqual(0);
		expect(countl_one(2, 0b10)).toStrictEqual(1);
		expect(countl_one(2, 0b100)).toStrictEqual(0);
		expect(countl_one(2, 0b1110)).toStrictEqual(1);

		expect(countl_one(2, 0b00n)).toStrictEqual(0);
		expect(countl_one(2, 0b01n)).toStrictEqual(0);
		expect(countl_one(2, 0b10n)).toStrictEqual(1);
		expect(countl_one(2, 0b100n)).toStrictEqual(0);
		expect(countl_one(2, 0b1110n)).toStrictEqual(1);

		expect(countl_one(2, 0b11)).toStrictEqual(2);
		expect(countl_one(2, 0b111)).toStrictEqual(2);

		expect(countl_one(2, 0b11n)).toStrictEqual(2);
		expect(countl_one(2, 0b111n)).toStrictEqual(2);

		expect(countl_one(12, 0xff_ff_ff_ff_ff_ff)).toStrictEqual(12);

		expect(countl_one(12, 0xff_ff_ff_ff_ff_ffn)).toStrictEqual(12);
		expect(countl_one(65, 0x1_ff_ff_ff_ff_ff_ff_ff_ffn)).toStrictEqual(65);
		expect(countl_one(65, 0x1_ff_ff_2f_ff_f2_ff_ff_ffn)).toStrictEqual(17);
		expect(countl_one(65, 0x0_ff_ff_ff_ff_f0_ff_ff_ffn)).toStrictEqual(0);
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
			expect(countl_one(inv)).toStrictEqual(0);

			expect(countl_one(0, inv)).toStrictEqual(0);
			expect(countl_one(1, inv)).toStrictEqual(0);
			expect(countl_one(2, inv)).toStrictEqual(0);
			if (typeof inv === "number") {
				expect(countl_one(inv, inv)).toStrictEqual(0);
				expect(countl_one(inv, 0b11111)).toStrictEqual(0);
			}
		}
	});
});
