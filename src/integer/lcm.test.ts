import { lcm } from "./lcm.js";

describe(lcm.name, () => {
	it("finds the least common multiple", () => {
		const values = [
			{
				a: 3,
				b: 3,
				expectedMultiple: 3,
			},
			{
				a: 5,
				b: 15,
				expectedMultiple: 15,
			},
			{
				a: 6,
				b: 8,
				expectedMultiple: 24,
			},
			{
				a: 536870912,
				b: 1073741824,
				expectedMultiple: 1073741824,
			},
		] as const;
		for (const { a, b, expectedMultiple } of values) {
			expect(lcm(a, b)).toStrictEqual(expectedMultiple);
			expect(lcm(b, a)).toStrictEqual(expectedMultiple);
			expect(lcm(-a, b)).toStrictEqual(expectedMultiple);
			expect(lcm(a, -b)).toStrictEqual(expectedMultiple);
			expect(lcm(-a, -b)).toStrictEqual(expectedMultiple);
			const bigA = BigInt(a);
			const bigB = BigInt(b);
			expect(lcm(bigA, bigB)).toStrictEqual(BigInt(expectedMultiple));
			expect(lcm(bigB, bigA)).toStrictEqual(BigInt(expectedMultiple));
			expect(lcm(-bigA, bigB)).toStrictEqual(BigInt(expectedMultiple));
			expect(lcm(bigA, -bigB)).toStrictEqual(BigInt(expectedMultiple));
			expect(lcm(-bigB, -bigA)).toStrictEqual(BigInt(expectedMultiple));
		}
	});

	it(`returns 0 if at least one of the arguments are 0`, () => {
		expect(lcm(0, 0)).toStrictEqual(0);
		expect(lcm(-0, -0)).toStrictEqual(0);
		expect(lcm(-4, 0)).toStrictEqual(0);
		expect(lcm(0, -0)).toStrictEqual(0);
		expect(lcm(0n, 0n)).toStrictEqual(0n);
		expect(lcm(4n, 0n)).toStrictEqual(0n);
		expect(lcm(0n, 4n)).toStrictEqual(0n);
	});

	it(`returns 0 if one or both parameters are non-integers`, () => {
		expect(lcm(9, 4.5)).toStrictEqual(0);
		expect(lcm(4.5, Infinity)).toStrictEqual(0);
		expect(lcm(-Infinity, 4)).toStrictEqual(0);
		expect(lcm(NaN, 4)).toStrictEqual(0);
		expect(lcm(NaN, NaN)).toStrictEqual(0);
		expect(lcm(4, Number.MAX_SAFE_INTEGER + 1)).toStrictEqual(0);
	});
});
