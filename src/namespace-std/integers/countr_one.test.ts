import { countr_one } from "./index.js";

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
			expect(countr_one(inv)).toStrictEqual(0);
		}
	});
});
