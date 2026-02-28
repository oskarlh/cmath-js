import { expect } from "chai";
import { describe, it } from "node:test";
import * as numbers from "./index.ts";

describe("std::number mathematical constants", () => {
	it("are defined", () => {
		expect(Object.keys(numbers).length).to.be.greaterThan(10);

		for (const constantName in numbers) {
			expect(numbers[constantName as keyof typeof numbers]).to.be.a("number");
		}
	});
});
