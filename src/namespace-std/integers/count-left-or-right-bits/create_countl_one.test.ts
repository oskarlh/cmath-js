import { create_countl_one } from "./index.js";

describe(create_countl_one.name, () => {
	it("creates a function that counts leading ones", () => {
		const countl_one_u0 = create_countl_one({ bits: 0 });
		const countl_one_u1 = create_countl_one({ bits: 1 });
		const countl_one_u12 = create_countl_one({ bits: 12 });
		const countl_one_u32 = create_countl_one({ bits: 32 });
		const countl_one_u65 = create_countl_one({ bits: 65 });

		expect(countl_one_u0(0b0)).toStrictEqual(0);
		expect(countl_one_u0(0b1)).toStrictEqual(0);

		expect(countl_one_u0(0b0n)).toStrictEqual(0);
		expect(countl_one_u0(0b1n)).toStrictEqual(0);

		expect(countl_one_u1(0b0)).toStrictEqual(0);
		expect(countl_one_u1(0b1)).toStrictEqual(1);
		expect(countl_one_u1(0b10)).toStrictEqual(0);
		expect(countl_one_u1(0b100)).toStrictEqual(0);
		expect(countl_one_u1(0b1110)).toStrictEqual(0);

		expect(countl_one_u12(0xff_ff_ff_ff_ff_ff)).toStrictEqual(12);
		expect(countl_one_u12(0xff_ff_ff_ff_ff_ffn)).toStrictEqual(12);

		expect(countl_one_u32(0b0)).toStrictEqual(0);
		expect(countl_one_u32(0xff_ff_ff_ff)).toStrictEqual(32);
		expect(countl_one_u32(0xff_ff_ff_fe)).toStrictEqual(31);
		expect(countl_one_u32(0x7f_ff_ff_ff)).toStrictEqual(0);
		expect(countl_one_u32(0x80_00_00_00)).toStrictEqual(1);

		expect(countl_one_u65(0x0)).toStrictEqual(0);
		expect(countl_one_u65(0x0n)).toStrictEqual(0);
		expect(countl_one_u65(0x1_ff_ff_ff_ff_ff_ff_ff_ffn)).toStrictEqual(65);
		expect(countl_one_u65(0x1_ff_ff_2f_ff_f2_ff_ff_ffn)).toStrictEqual(17);
		expect(countl_one_u65(0x0_ff_ff_ff_ff_f0_ff_ff_ffn)).toStrictEqual(0);
	});
});
