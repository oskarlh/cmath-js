import { create_countr_one } from "./index.js";

describe(create_countr_one.name, () => {
	it("creates a function that counts leading ones", () => {
		const countr_one_u0 = create_countr_one({ bits: 0 });
		const countr_one_u1 = create_countr_one({ bits: 1 });
		const countr_one_u16 = create_countr_one({ bits: 16 });
		const countr_one_u32 = create_countr_one({ bits: 32 });
		const countr_one_u64 = create_countr_one({ bits: 64 });

		expect(countr_one_u0(0b0)).toStrictEqual(0);
		expect(countr_one_u0(0b1)).toStrictEqual(0);
		expect(countr_one_u0(0b111)).toStrictEqual(0);

		expect(countr_one_u0(0b0n)).toStrictEqual(0);
		expect(countr_one_u0(0b1n)).toStrictEqual(0);
		expect(countr_one_u0(0b111n)).toStrictEqual(0);

		expect(countr_one_u1(0b0)).toStrictEqual(0);
		expect(countr_one_u1(0b1)).toStrictEqual(1);
		expect(countr_one_u1(0b10)).toStrictEqual(0);
		expect(countr_one_u1(0b100)).toStrictEqual(0);

		expect(countr_one_u1(0b0n)).toStrictEqual(0);
		expect(countr_one_u1(0b1n)).toStrictEqual(1);
		expect(countr_one_u1(0b10n)).toStrictEqual(0);
		expect(countr_one_u1(0b100n)).toStrictEqual(0);

		expect(countr_one_u16(0b1111)).toStrictEqual(4);
		expect(countr_one_u16(0b1111n)).toStrictEqual(4);

		expect(countr_one_u16(0b1)).toStrictEqual(1);

		expect(countr_one_u32(0b0)).toStrictEqual(0);
		expect(countr_one_u32(0xff_ff_ff_ff)).toStrictEqual(32);
		expect(countr_one_u32(0xff_ff_ff_fe)).toStrictEqual(0);
		expect(countr_one_u32(0x7f_ff_ff_ff)).toStrictEqual(31);
		expect(countr_one_u32(0x80_00_00_00)).toStrictEqual(0);
		expect(countr_one_u32(0x00_00_00_07)).toStrictEqual(3);

		expect(countr_one_u64(0x0)).toStrictEqual(0);
		expect(countr_one_u64(0x0n)).toStrictEqual(0);

		expect(countr_one_u64(0x1_ff_ff_f2_ff_0f_ff_ff_ffn)).toStrictEqual(28);
		expect(countr_one_u64(0x1_ff_ff_f2_ff_0f_ff_00_00n)).toStrictEqual(0);
		expect(countr_one_u64(0x1_ff_ff_ff_ff_ff_ff_ff_ffn)).toStrictEqual(64);
	});
});
