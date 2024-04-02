import * as numbers from "./numbers.js";

describe("std::number mathematical constants", () => {
	it("are defined", () => {
		expect(Object.keys(numbers).length).toBeGreaterThan(10);

		for (const constantName in numbers) {
			expect(typeof numbers[constantName as keyof typeof numbers]).toBe("number");
		}
	});
});
