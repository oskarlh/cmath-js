import { countr_one } from "./countr_one.js";

describe(countr_one.name, () => {
	it("counts trailing ones", () => {
		expect(countr_one(0b0)).toStrictEqual(0);
		expect(countr_one(0b1)).toStrictEqual(1);
		expect(countr_one(0b10)).toStrictEqual(0);
		expect(countr_one(0b100)).toStrictEqual(0);
		expect(countr_one(0b1000)).toStrictEqual(0);

		expect(countr_one(0b0n)).toStrictEqual(0);
		expect(countr_one(0b1n)).toStrictEqual(1);
		expect(countr_one(0b10n)).toStrictEqual(0);
		expect(countr_one(0b100n)).toStrictEqual(0);
		expect(countr_one(0b1000n)).toStrictEqual(0);

		expect(countr_one(0b11)).toStrictEqual(2);
		expect(countr_one(0b110)).toStrictEqual(0);
		expect(countr_one(0b1101)).toStrictEqual(1);
		expect(countr_one(0b110111)).toStrictEqual(3);
		expect(countr_one(0b111)).toStrictEqual(3);

		expect(countr_one(0b11n)).toStrictEqual(2);
		expect(countr_one(0b110n)).toStrictEqual(0);
		expect(countr_one(0b1101n)).toStrictEqual(1);
		expect(countr_one(0b110111n)).toStrictEqual(3);
		expect(countr_one(0b111n)).toStrictEqual(3);

		expect(countr_one(0x1_ff_ff_f2_ff_0f_ff_ff_ffn)).toStrictEqual(28);
	});

	it("accepts an optional integer size", () => {
		expect(countr_one(0, 0b0)).toStrictEqual(0);
		expect(countr_one(0, 0b1)).toStrictEqual(0);

		expect(countr_one(0, 0b0n)).toStrictEqual(0);
		expect(countr_one(0, 0b1n)).toStrictEqual(0);

		expect(countr_one(1, 0b0)).toStrictEqual(0);
		expect(countr_one(1, 0b1)).toStrictEqual(1);
		expect(countr_one(1, 0b10)).toStrictEqual(0);
		expect(countr_one(1, 0b100)).toStrictEqual(0);
		expect(countr_one(1, 0b1110)).toStrictEqual(0);

		expect(countr_one(1, 0b0n)).toStrictEqual(0);
		expect(countr_one(1, 0b1n)).toStrictEqual(1);
		expect(countr_one(1, 0b10n)).toStrictEqual(0);
		expect(countr_one(1, 0b100n)).toStrictEqual(0);
		expect(countr_one(1, 0b1110n)).toStrictEqual(0);

		expect(countr_one(2, 0b00)).toStrictEqual(0);
		expect(countr_one(2, 0b01)).toStrictEqual(1);
		expect(countr_one(2, 0b10)).toStrictEqual(0);
		expect(countr_one(2, 0b100)).toStrictEqual(0);
		expect(countr_one(2, 0b1110)).toStrictEqual(0);
		expect(countr_one(2, 0b1111n)).toStrictEqual(2);

		expect(countr_one(2, 0b00n)).toStrictEqual(0);
		expect(countr_one(2, 0b01n)).toStrictEqual(1);
		expect(countr_one(2, 0b10n)).toStrictEqual(0);
		expect(countr_one(2, 0b100n)).toStrictEqual(0);
		expect(countr_one(2, 0b1110n)).toStrictEqual(0);
		expect(countr_one(2, 0b1111n)).toStrictEqual(2);

		expect(countr_one(12, 0xff_ff_ff_ff_ff_ff)).toStrictEqual(12);

		expect(countr_one(12, 0xff_ff_ff_ff_ff_ffn)).toStrictEqual(12);
		expect(countr_one(65, 0x1_ff_ff_ff_ff_ff_ff_ff_ffn)).toStrictEqual(65);
		expect(countr_one(66, 0x1_ff_ff_ff_ff_ff_ff_ff_ffn)).toStrictEqual(65);
		expect(countr_one(65, 0xff_ff_ff_ff_f0_ff_ff_ffn)).toStrictEqual(24);
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
			expect(countr_one(inv)).toStrictEqual(0);

			expect(countr_one(0, inv)).toStrictEqual(0);
			expect(countr_one(1, inv)).toStrictEqual(0);
			expect(countr_one(2, inv)).toStrictEqual(0);
			if (typeof inv === "number") {
				expect(countr_one(inv, inv)).toStrictEqual(0);
				expect(countr_one(inv, 0b11111)).toStrictEqual(0);
			}
		}
	});
});
