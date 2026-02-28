import { describe, it } from "node:test";
import { create_countl_zero } from "../index.ts";
import { expect } from "chai";

describe(create_countl_zero.name, () => {
	it("creates a function that counts leading zeroes", () => {
		const countl_zero_u0 = create_countl_zero({ bits: 0 });
		const countl_zero_u1 = create_countl_zero({ bits: 1 });
		const countl_zero_u2 = create_countl_zero({ bits: 2 });
		const countl_zero_u12 = create_countl_zero({ bits: 12 });
		const countl_zero_u16 = create_countl_zero({ bits: 16 });
		const countl_zero_u32 = create_countl_zero({ bits: 32 });
		const countl_zero_u64 = create_countl_zero({ bits: 64 });

		expect(countl_zero_u0(0b0)).to.equal(0);
		expect(countl_zero_u0(0b1)).to.equal(0);

		expect(countl_zero_u0(0b0n)).to.equal(0);
		expect(countl_zero_u0(0b1n)).to.equal(0);

		expect(countl_zero_u1(0b0)).to.equal(1);
		expect(countl_zero_u1(0b1)).to.equal(0);
		expect(countl_zero_u1(0b10)).to.equal(1);
		expect(countl_zero_u1(0b100)).to.equal(1);
		expect(countl_zero_u1(0b1110)).to.equal(1);

		expect(countl_zero_u1(0b0n)).to.equal(1);
		expect(countl_zero_u1(0b1n)).to.equal(0);
		expect(countl_zero_u1(0b10n)).to.equal(1);
		expect(countl_zero_u1(0b100n)).to.equal(1);
		expect(countl_zero_u1(0b1110n)).to.equal(1);

		expect(countl_zero_u2(0b00)).to.equal(2);
		expect(countl_zero_u2(0b01)).to.equal(1);
		expect(countl_zero_u2(0b10)).to.equal(0);
		expect(countl_zero_u2(0b100)).to.equal(2);
		expect(countl_zero_u2(0b1110)).to.equal(0);

		expect(countl_zero_u2(0b00n)).to.equal(2);
		expect(countl_zero_u2(0b01n)).to.equal(1);
		expect(countl_zero_u2(0b10n)).to.equal(0);
		expect(countl_zero_u2(0b100n)).to.equal(2);
		expect(countl_zero_u2(0b1110n)).to.equal(0);

		expect(countl_zero_u2(0b11)).to.equal(0);
		expect(countl_zero_u2(0b111)).to.equal(0);

		expect(countl_zero_u2(0b11n)).to.equal(0);
		expect(countl_zero_u2(0b111n)).to.equal(0);

		expect(countl_zero_u32(0b0)).to.equal(32);
		expect(countl_zero_u32(0xff_ff_ff_ff)).to.equal(0);
		expect(countl_zero_u32(0xff_ff_ff_fe)).to.equal(0);
		expect(countl_zero_u32(-1)).to.equal(0);
		expect(countl_zero_u32(-2n)).to.equal(0);
		expect(countl_zero_u32(0x7f_ff_ff_ff)).to.equal(1);
		expect(countl_zero_u32(0x00_00_00_01)).to.equal(31);

		expect(countl_zero_u12(0b0)).to.equal(12);
		expect(countl_zero_u16(0xff_ff_ff_ff_ff_ff)).to.equal(0);
		expect(countl_zero_u64(0xff_ff_ff_ff)).to.equal(32);

		expect(countl_zero_u12(0b0n)).to.equal(12);
		expect(countl_zero_u16(0xff_ff_ff_ff_ff_ffn)).to.equal(0);
		expect(countl_zero_u64(0b0)).to.equal(64);
		expect(countl_zero_u64(0b0n)).to.equal(64);
		expect(countl_zero_u64(0xff_ff_ff_ffn)).to.equal(32);
	});
});
