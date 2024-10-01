import { iota } from "./index.js";

describe(iota.name, () => {
	it("fills an array with incrementing numbers", () => {
		const threeNumbers = [4, 4, 4];
		iota(threeNumbers, 10.1);
		expect(threeNumbers).toStrictEqual([10.1, 11.1, 12.1]);

		const threeBigints = [4n, 4n, 4n];
		iota(threeBigints, 1000n);
		expect(threeBigints).toStrictEqual([1000n, 1001n, 1002n]);
	});

	it("accepts empty arrays", () => {
		const emptyArray: [] = [];
		iota(emptyArray, 10.1);
		expect(emptyArray).toStrictEqual([]);
	});

	it("accepts sparse arrays", () => {
		const sparseArray = new Array<number>(5);
		sparseArray[1] = 400;
		sparseArray[3] = 400;
		iota(sparseArray, -50);
		expect(sparseArray).toStrictEqual([-50, -49, -48, -47, -46]);
	});
});
