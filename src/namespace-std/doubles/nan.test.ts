import { describe, it } from "node:test";
import { nan } from "./index.ts";
import { expect } from "chai";

describe(nan.name, () => {
	// Unforutunately there's not many tests we can do that would work with
	// all JavaScript engines, since they may discard or alter any bits in NaN
	it("accepts an empty string", () => {
		expect(nan("")).to.be.NaN;
	});
	it("accepts strings with small numbers", () => {
		expect(nan("4")).to.be.NaN;
	});
	it("accepts strings with overly large numbers", () => {
		expect(nan("1234567890123456789012345678901234567890")).to.be.NaN;
	});
	it("accepts strings of any kind", () => {
		expect(nan("test")).to.be.NaN;
		expect(nan("🦆")).to.be.NaN;
	});
});
