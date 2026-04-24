import { describe, it } from "node:test";
import { FP_INFINITE, FP_NAN, FP_NORMAL, FP_SUBNORMAL, FP_ZERO, fpclassify } from "./index.ts";
import { expect } from "chai";

describe(fpclassify.name, () => {
	it("classifies floating-point numbers", () => {
		expect(fpclassify(NaN)).to.equal(FP_NAN);
		expect(fpclassify(Infinity)).to.equal(FP_INFINITE);
		expect(fpclassify(-Infinity)).to.equal(FP_INFINITE);
		expect(fpclassify(-1)).to.equal(FP_NORMAL);
		expect(fpclassify(25 ** 123)).to.equal(FP_NORMAL);
		expect(fpclassify(2 ** -1022)).to.equal(FP_NORMAL);
		expect(fpclassify(2 ** -1023)).to.equal(FP_SUBNORMAL);
		expect(fpclassify(Number.MIN_VALUE)).to.equal(FP_SUBNORMAL);
		expect(fpclassify(-Number.MIN_VALUE)).to.equal(FP_SUBNORMAL);
		expect(fpclassify(0)).to.equal(FP_ZERO);
		expect(fpclassify(-0)).to.equal(FP_ZERO);
	});
});
