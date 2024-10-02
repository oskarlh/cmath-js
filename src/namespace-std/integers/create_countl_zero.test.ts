import { create_countl_zero } from "./index.js";

describe(create_countl_zero.name, () => {
	it("creates a function that counts leading zeroes", () => {
		const countl_zero_u0 = create_countl_zero({ bits: 0 });
		const countl_zero_u1 = create_countl_zero({ bits: 1 });
		const countl_zero_u2 = create_countl_zero({ bits: 2 });
		const countl_zero_u12 = create_countl_zero({ bits: 12 });
		const countl_zero_u16 = create_countl_zero({ bits: 16 });
		const countl_zero_u64 = create_countl_zero({ bits: 64 });

		expect(countl_zero_u0(0b0)).toStrictEqual(0);
		expect(countl_zero_u0(0b1)).toStrictEqual(0);

		expect(countl_zero_u0(0b0n)).toStrictEqual(0);
		expect(countl_zero_u0(0b1n)).toStrictEqual(0);

		expect(countl_zero_u1(0b0)).toStrictEqual(1);
		expect(countl_zero_u1(0b1)).toStrictEqual(0);
		expect(countl_zero_u1(0b10)).toStrictEqual(1);
		expect(countl_zero_u1(0b100)).toStrictEqual(1);
		expect(countl_zero_u1(0b1110)).toStrictEqual(1);

		expect(countl_zero_u1(0b0n)).toStrictEqual(1);
		expect(countl_zero_u1(0b1n)).toStrictEqual(0);
		expect(countl_zero_u1(0b10n)).toStrictEqual(1);
		expect(countl_zero_u1(0b100n)).toStrictEqual(1);
		expect(countl_zero_u1(0b1110n)).toStrictEqual(1);

		expect(countl_zero_u2(0b00)).toStrictEqual(2);
		expect(countl_zero_u2(0b01)).toStrictEqual(1);
		expect(countl_zero_u2(0b10)).toStrictEqual(0);
		expect(countl_zero_u2(0b100)).toStrictEqual(2);
		expect(countl_zero_u2(0b1110)).toStrictEqual(0);

		expect(countl_zero_u2(0b00n)).toStrictEqual(2);
		expect(countl_zero_u2(0b01n)).toStrictEqual(1);
		expect(countl_zero_u2(0b10n)).toStrictEqual(0);
		expect(countl_zero_u2(0b100n)).toStrictEqual(2);
		expect(countl_zero_u2(0b1110n)).toStrictEqual(0);

		expect(countl_zero_u2(0b11)).toStrictEqual(0);
		expect(countl_zero_u2(0b111)).toStrictEqual(0);

		expect(countl_zero_u2(0b11n)).toStrictEqual(0);
		expect(countl_zero_u2(0b111n)).toStrictEqual(0);

		expect(countl_zero_u12(0b0)).toStrictEqual(12);
		expect(countl_zero_u16(0xff_ff_ff_ff_ff_ff)).toStrictEqual(0);
		expect(countl_zero_u64(0xff_ff_ff_ff)).toStrictEqual(32);

		expect(countl_zero_u12(0b0n)).toStrictEqual(12);
		expect(countl_zero_u16(0xff_ff_ff_ff_ff_ffn)).toStrictEqual(0);
		expect(countl_zero_u64(0xff_ff_ff_ffn)).toStrictEqual(32);
	});

	it("creates a function that counts non-integers and negative numbers as 0", () => {
		const countl_zero_u0 = create_countl_zero({ bits: 0 });
		const countl_zero_u1 = create_countl_zero({ bits: 1 });
		const countl_zero_u2 = create_countl_zero({ bits: 2 });

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
			expect(countl_zero_u0(inv)).toStrictEqual(0);
			expect(countl_zero_u1(inv)).toStrictEqual(1);
			expect(countl_zero_u2(inv)).toStrictEqual(2);
			if (typeof inv === "number") {
				const countl_zero_inv = create_countl_zero({ bits: inv });
				expect(countl_zero_inv(inv)).toStrictEqual(0);
				expect(countl_zero_inv(0b11111)).toStrictEqual(0);
			}
		}
	});
});
