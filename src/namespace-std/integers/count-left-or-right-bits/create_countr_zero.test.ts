import { create_countr_zero } from "./index.js";

describe(create_countr_zero.name, () => {
	it("creates a function that counts trailing zeroes", () => {
		const countr_zero_u0 = create_countr_zero({ bits: 0 });
		const countr_zero_u1 = create_countr_zero({ bits: 1 });
		const countr_zero_u2 = create_countr_zero({ bits: 2 });
		const countr_zero_u15 = create_countr_zero({ bits: 15 });
		const countr_zero_u16 = create_countr_zero({ bits: 16 });
		const countr_zero_u17 = create_countr_zero({ bits: 17 });
		const countr_zero_u32 = create_countr_zero({ bits: 32 });
		const countr_zero_u64 = create_countr_zero({ bits: 64 });

		expect(countr_zero_u0(0b0)).toStrictEqual(0);
		expect(countr_zero_u0(0b111)).toStrictEqual(0);

		expect(countr_zero_u0(0b0n)).toStrictEqual(0);
		expect(countr_zero_u0(0b111n)).toStrictEqual(0);

		expect(countr_zero_u1(0b0)).toStrictEqual(1);
		expect(countr_zero_u1(0b1)).toStrictEqual(0);
		expect(countr_zero_u1(0b10)).toStrictEqual(1);
		expect(countr_zero_u1(0b100)).toStrictEqual(1);

		expect(countr_zero_u1(0b0n)).toStrictEqual(1);
		expect(countr_zero_u1(0b1n)).toStrictEqual(0);
		expect(countr_zero_u1(0b10n)).toStrictEqual(1);
		expect(countr_zero_u1(0b100n)).toStrictEqual(1);

		expect(countr_zero_u2(0b00)).toStrictEqual(2);
		expect(countr_zero_u2(0b11)).toStrictEqual(0);
		expect(countr_zero_u2(0b110)).toStrictEqual(1);
		expect(countr_zero_u2(0b1101)).toStrictEqual(0);
		expect(countr_zero_u2(0b110111)).toStrictEqual(0);
		expect(countr_zero_u2(0b1110000)).toStrictEqual(2);

		expect(countr_zero_u2(0b00n)).toStrictEqual(2);
		expect(countr_zero_u2(0b11n)).toStrictEqual(0);
		expect(countr_zero_u2(0b110n)).toStrictEqual(1);
		expect(countr_zero_u2(0b1101n)).toStrictEqual(0);
		expect(countr_zero_u2(0b110111n)).toStrictEqual(0);
		expect(countr_zero_u2(0b1110000n)).toStrictEqual(2);

		expect(countr_zero_u16(0b110000)).toStrictEqual(4);
		expect(countr_zero_u16(0b110)).toStrictEqual(1);
		expect(countr_zero_u15(0b1101)).toStrictEqual(0);
		expect(countr_zero_u15(0b11011100)).toStrictEqual(2);
		expect(countr_zero_u16(0b1110000)).toStrictEqual(4);
		expect(countr_zero_u17(0b0)).toStrictEqual(17);

		expect(countr_zero_u16(0b110000n)).toStrictEqual(4);
		expect(countr_zero_u16(0b110n)).toStrictEqual(1);
		expect(countr_zero_u15(0b1101n)).toStrictEqual(0);
		expect(countr_zero_u15(0b11011100n)).toStrictEqual(2);
		expect(countr_zero_u16(0b1110000n)).toStrictEqual(4);
		expect(countr_zero_u17(0b0n)).toStrictEqual(17);

		expect(countr_zero_u32(0b0)).toStrictEqual(32);
		expect(countr_zero_u32(0xff_ff_ff_ff)).toStrictEqual(0);
		expect(countr_zero_u32(0xff_ff_ff_fe)).toStrictEqual(1);
		expect(countr_zero_u32(0x7f_ff_ff_ff)).toStrictEqual(0);
		expect(countr_zero_u32(0x80_00_00_00)).toStrictEqual(31);

		expect(countr_zero_u64(0x0)).toStrictEqual(64);
		expect(countr_zero_u64(0x0n)).toStrictEqual(64);

		expect(countr_zero_u64(0x1_ff_ff_f2_ff_0f_ff_ff_ffn)).toStrictEqual(0);
		expect(countr_zero_u64(0x1_ff_ff_f2_ff_0f_ff_00_00n)).toStrictEqual(16);
	});
});
