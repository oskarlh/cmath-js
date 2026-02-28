import { describe, it } from "node:test";
import { create_countl_one } from "./index.ts";
import { expect } from "chai";

describe(create_countl_one.name, () => {
	it("creates a function that counts leading ones", () => {
		const countl_one_u0 = create_countl_one({ bits: 0 });
		const countl_one_u1 = create_countl_one({ bits: 1 });
		const countl_one_u12 = create_countl_one({ bits: 12 });
		const countl_one_u32 = create_countl_one({ bits: 32 });
		const countl_one_u65 = create_countl_one({ bits: 65 });

		expect(countl_one_u0(0b0)).to.equal(0);
		expect(countl_one_u0(0b1)).to.equal(0);

		expect(countl_one_u0(0b0n)).to.equal(0);
		expect(countl_one_u0(0b1n)).to.equal(0);

		expect(countl_one_u1(0b0)).to.equal(0);
		expect(countl_one_u1(0b1)).to.equal(1);
		expect(countl_one_u1(0b10)).to.equal(0);
		expect(countl_one_u1(0b100)).to.equal(0);
		expect(countl_one_u1(0b1110)).to.equal(0);

		expect(countl_one_u12(0xff_ff_ff_ff_ff_ff)).to.equal(12);
		expect(countl_one_u12(0xff_ff_ff_ff_ff_ffn)).to.equal(12);

		expect(countl_one_u32(0b0)).to.equal(0);
		expect(countl_one_u32(0xff_ff_ff_ff)).to.equal(32);
		expect(countl_one_u32(0xff_ff_ff_fe)).to.equal(31);
		expect(countl_one_u32(0x7f_ff_ff_ff)).to.equal(0);
		expect(countl_one_u32(0x80_00_00_00)).to.equal(1);

		expect(countl_one_u65(0x0)).to.equal(0);
		expect(countl_one_u65(0x0n)).to.equal(0);
		expect(countl_one_u65(0x1_ff_ff_ff_ff_ff_ff_ff_ffn)).to.equal(65);
		expect(countl_one_u65(0x1_ff_ff_2f_ff_f2_ff_ff_ffn)).to.equal(17);
		expect(countl_one_u65(0x0_ff_ff_ff_ff_f0_ff_ff_ffn)).to.equal(0);
	});
});
