import { describe, it } from "node:test";
import { abs, frexp } from "./index.ts";
import { expect } from "chai";

describe("Exports", () => {
	it("are exported", () => {
		expect(abs).to.be.a("function");
		expect(frexp).to.be.a("function");
	});
});
