import { abs, frexp } from "./index.js";

describe("Exports", () => {
	it("are exported", () => {
		expect(typeof abs).toStrictEqual("function");
		expect(typeof frexp).toStrictEqual("function");
	});
});
