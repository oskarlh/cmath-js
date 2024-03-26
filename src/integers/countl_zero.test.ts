import { countl_zero } from "./countl_zero.js";

describe(countl_zero.name, () => {
	it("counts leading zeroes", () => {
		expect(countl_zero(0, 0b0)).toStrictEqual(0);
		expect(countl_zero(0, 0b1)).toStrictEqual(0);

		expect(countl_zero(0, 0b0n)).toStrictEqual(0);
		expect(countl_zero(0, 0b1n)).toStrictEqual(0);

		expect(countl_zero(1, 0b0)).toStrictEqual(1);
		expect(countl_zero(1, 0b1)).toStrictEqual(0);
		expect(countl_zero(1, 0b10)).toStrictEqual(1);
		expect(countl_zero(1, 0b100)).toStrictEqual(1);
		expect(countl_zero(1, 0b1110)).toStrictEqual(1);

		expect(countl_zero(1, 0b0n)).toStrictEqual(1);
		expect(countl_zero(1, 0b1n)).toStrictEqual(0);
		expect(countl_zero(1, 0b10n)).toStrictEqual(1);
		expect(countl_zero(1, 0b100n)).toStrictEqual(1);
		expect(countl_zero(1, 0b1110n)).toStrictEqual(1);

		expect(countl_zero(2, 0b00)).toStrictEqual(2);
		expect(countl_zero(2, 0b01)).toStrictEqual(1);
		expect(countl_zero(2, 0b10)).toStrictEqual(0);
		expect(countl_zero(2, 0b100)).toStrictEqual(2);
		expect(countl_zero(2, 0b1110)).toStrictEqual(0);

		expect(countl_zero(2, 0b00n)).toStrictEqual(2);
		expect(countl_zero(2, 0b01n)).toStrictEqual(1);
		expect(countl_zero(2, 0b10n)).toStrictEqual(0);
		expect(countl_zero(2, 0b100n)).toStrictEqual(2);
		expect(countl_zero(2, 0b1110n)).toStrictEqual(0);

		expect(countl_zero(2, 0b11)).toStrictEqual(0);
		expect(countl_zero(2, 0b111)).toStrictEqual(0);

		expect(countl_zero(2, 0b11n)).toStrictEqual(0);
		expect(countl_zero(2, 0b111n)).toStrictEqual(0);

		expect(countl_zero(12, 0b0)).toStrictEqual(12);
		expect(countl_zero(16, 0xff_ff_ff_ff_ff_ff)).toStrictEqual(0);
		expect(countl_zero(64, 0xff_ff_ff_ff)).toStrictEqual(32);

		expect(countl_zero(12, 0b0n)).toStrictEqual(12);
		expect(countl_zero(16, 0xff_ff_ff_ff_ff_ffn)).toStrictEqual(0);
		expect(countl_zero(64, 0xff_ff_ff_ffn)).toStrictEqual(32);
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
			expect(countl_zero(0, inv)).toStrictEqual(0);
			expect(countl_zero(1, inv)).toStrictEqual(1);
			expect(countl_zero(2, inv)).toStrictEqual(2);
			if (typeof inv === "number") {
				expect(countl_zero(inv, inv)).toStrictEqual(0);
				expect(countl_zero(inv, 0b11111)).toStrictEqual(0);
			}
		}
	});
});
