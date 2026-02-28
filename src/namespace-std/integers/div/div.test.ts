import { expect } from "chai";
import { div } from "../index.ts";
import { describe, it } from "node:test";

describe(div.name, () => {
	it("computes the quotient and the remainder of a division", () => {
		expect(div(0, 4)).to.deep.equal({ quot: 0, rem: 0 });
		expect(div(0n, 4n)).to.deep.equal({ quot: 0n, rem: 0n });
		expect(div(4, 4)).to.deep.equal({ quot: 1, rem: 0 });
		expect(div(4n, 4n)).to.deep.equal({ quot: 1n, rem: 0n });
		expect(div(-4, 5)).to.deep.equal({ quot: 0, rem: -4 });
		expect(div(-4n, 5n)).to.deep.equal({ quot: 0n, rem: -4n });
		expect(div(-4, 2)).to.deep.equal({ quot: -2, rem: 0 });
		expect(div(-4n, 2n)).to.deep.equal({ quot: -2n, rem: 0n });
		expect(div(-5, 2)).to.deep.equal({ quot: -2, rem: -1 });
		expect(div(-5n, 2n)).to.deep.equal({ quot: -2n, rem: -1n });
		expect(div(-5, -2)).to.deep.equal({ quot: 2, rem: -1 });
		expect(div(-5n, -2n)).to.deep.equal({ quot: 2n, rem: -1n });
	});

	it("handles division by 0, even though it's undefined in C++", () => {
		expect(div(4, 0)).to.deep.equal({ quot: 0, rem: 0 });
		expect(div(4, -0)).to.deep.equal({ quot: 0, rem: 0 });
		expect(div(4n, 0n)).to.deep.equal({ quot: 0n, rem: 0n });
	});
});
