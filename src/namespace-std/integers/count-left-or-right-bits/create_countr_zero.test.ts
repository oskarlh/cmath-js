import { expect } from "chai";
import { create_countr_zero } from "./index.ts";
import { describe, it } from "node:test";

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

		expect(countr_zero_u0(0b0)).to.equal(0);
		expect(countr_zero_u0(0b111)).to.equal(0);

		expect(countr_zero_u0(0b0n)).to.equal(0);
		expect(countr_zero_u0(0b111n)).to.equal(0);

		expect(countr_zero_u1(0b0)).to.equal(1);
		expect(countr_zero_u1(0b1)).to.equal(0);
		expect(countr_zero_u1(0b10)).to.equal(1);
		expect(countr_zero_u1(0b100)).to.equal(1);

		expect(countr_zero_u1(0b0n)).to.equal(1);
		expect(countr_zero_u1(0b1n)).to.equal(0);
		expect(countr_zero_u1(0b10n)).to.equal(1);
		expect(countr_zero_u1(0b100n)).to.equal(1);

		expect(countr_zero_u2(0b00)).to.equal(2);
		expect(countr_zero_u2(0b11)).to.equal(0);
		expect(countr_zero_u2(0b110)).to.equal(1);
		expect(countr_zero_u2(0b1101)).to.equal(0);
		expect(countr_zero_u2(0b110111)).to.equal(0);
		expect(countr_zero_u2(0b1110000)).to.equal(2);

		expect(countr_zero_u2(0b00n)).to.equal(2);
		expect(countr_zero_u2(0b11n)).to.equal(0);
		expect(countr_zero_u2(0b110n)).to.equal(1);
		expect(countr_zero_u2(0b1101n)).to.equal(0);
		expect(countr_zero_u2(0b110111n)).to.equal(0);
		expect(countr_zero_u2(0b1110000n)).to.equal(2);

		expect(countr_zero_u16(0b110000)).to.equal(4);
		expect(countr_zero_u16(0b110)).to.equal(1);
		expect(countr_zero_u15(0b1101)).to.equal(0);
		expect(countr_zero_u15(0b11011100)).to.equal(2);
		expect(countr_zero_u16(0b1110000)).to.equal(4);
		expect(countr_zero_u17(0b0)).to.equal(17);

		expect(countr_zero_u16(0b110000n)).to.equal(4);
		expect(countr_zero_u16(0b110n)).to.equal(1);
		expect(countr_zero_u15(0b1101n)).to.equal(0);
		expect(countr_zero_u15(0b11011100n)).to.equal(2);
		expect(countr_zero_u16(0b1110000n)).to.equal(4);
		expect(countr_zero_u17(0b0n)).to.equal(17);

		expect(countr_zero_u32(0b0)).to.equal(32);
		expect(countr_zero_u32(0xff_ff_ff_ff)).to.equal(0);
		expect(countr_zero_u32(0xff_ff_ff_fe)).to.equal(1);
		expect(countr_zero_u32(0x7f_ff_ff_ff)).to.equal(0);
		expect(countr_zero_u32(0x80_00_00_00)).to.equal(31);
		expect(countr_zero_u32(-1)).to.equal(0);
		expect(countr_zero_u32(-2n)).to.equal(1);

		expect(countr_zero_u64(0x0)).to.equal(64);
		expect(countr_zero_u64(0x0n)).to.equal(64);

		expect(countr_zero_u64(0x1_ff_ff_f2_ff_0f_ff_ff_ffn)).to.equal(0);
		expect(countr_zero_u64(0x1_ff_ff_f2_ff_0f_ff_00_00n)).to.equal(16);
	});
});
