import { describe, it } from "node:test";
import { create_countr_one } from "./index.ts";
import { expect } from "chai";

describe(create_countr_one.name, () => {
	it("creates a function that counts leading ones", () => {
		const countr_one_u0 = create_countr_one({ bits: 0 });
		const countr_one_u1 = create_countr_one({ bits: 1 });
		const countr_one_u16 = create_countr_one({ bits: 16 });
		const countr_one_u32 = create_countr_one({ bits: 32 });
		const countr_one_u64 = create_countr_one({ bits: 64 });

		expect(countr_one_u0(0b0)).to.equal(0);
		expect(countr_one_u0(0b1)).to.equal(0);
		expect(countr_one_u0(0b111)).to.equal(0);

		expect(countr_one_u0(0b0n)).to.equal(0);
		expect(countr_one_u0(0b1n)).to.equal(0);
		expect(countr_one_u0(0b111n)).to.equal(0);

		expect(countr_one_u1(0b0)).to.equal(0);
		expect(countr_one_u1(0b1)).to.equal(1);
		expect(countr_one_u1(0b10)).to.equal(0);
		expect(countr_one_u1(0b100)).to.equal(0);

		expect(countr_one_u1(0b0n)).to.equal(0);
		expect(countr_one_u1(0b1n)).to.equal(1);
		expect(countr_one_u1(0b10n)).to.equal(0);
		expect(countr_one_u1(0b100n)).to.equal(0);

		expect(countr_one_u16(0b1111)).to.equal(4);
		expect(countr_one_u16(0b1111n)).to.equal(4);

		expect(countr_one_u16(0b1)).to.equal(1);

		expect(countr_one_u32(0b0)).to.equal(0);
		expect(countr_one_u32(0xff_ff_ff_ff)).to.equal(32);
		expect(countr_one_u32(0xff_ff_ff_fe)).to.equal(0);
		expect(countr_one_u32(0x7f_ff_ff_ff)).to.equal(31);
		expect(countr_one_u32(0x80_00_00_00)).to.equal(0);
		expect(countr_one_u32(0x00_00_00_07)).to.equal(3);

		expect(countr_one_u64(0x0)).to.equal(0);
		expect(countr_one_u64(0x0n)).to.equal(0);

		expect(countr_one_u64(0x1_ff_ff_f2_ff_0f_ff_ff_ffn)).to.equal(28);
		expect(countr_one_u64(0x1_ff_ff_f2_ff_0f_ff_00_00n)).to.equal(0);
		expect(countr_one_u64(0x1_ff_ff_ff_ff_ff_ff_ff_ffn)).to.equal(64);
	});
});
