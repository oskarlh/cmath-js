import { gcd } from "./gcd.js";

describe(gcd.name, () => {
	it("finds the greatest common denominator", () => {
		const values = [
			{
				a: 1,
				b: 2,
				expectedDenominator: 1,
			},
			{
				a: 4,
				b: 5,
				expectedDenominator: 1,
			},
			{
				a: 32,
				b: 64,
				expectedDenominator: 32,
			},
			{
				a: 24,
				b: 54,
				expectedDenominator: 6,
			},
			{
				a: 24,
				b: 60,
				expectedDenominator: 12,
			},
			{
				a: 42,
				b: 196,
				expectedDenominator: 14,
			},
			{
				a: 536870912,
				b: 1073741824,
				expectedDenominator: 536870912,
			},
		] as const;
		for (const { a, b, expectedDenominator } of values) {
			expect(gcd(a, b)).toStrictEqual(expectedDenominator);
			expect(gcd(b, a)).toStrictEqual(expectedDenominator);
			expect(gcd(-a, b)).toStrictEqual(expectedDenominator);
			expect(gcd(a, -b)).toStrictEqual(expectedDenominator);
			expect(gcd(-a, -b)).toStrictEqual(expectedDenominator);
			const bigA = BigInt(a);
			const bigB = BigInt(b);
			expect(gcd(bigA, bigB)).toStrictEqual(BigInt(expectedDenominator));
			expect(gcd(bigB, bigA)).toStrictEqual(BigInt(expectedDenominator));
			expect(gcd(-bigA, bigB)).toStrictEqual(BigInt(expectedDenominator));
			expect(gcd(bigA, -bigB)).toStrictEqual(BigInt(expectedDenominator));
			expect(gcd(-bigB, -bigA)).toStrictEqual(BigInt(expectedDenominator));
		}
	});

	it(`returns 0 for ${gcd.name}(0, 0)`, () => {
		expect(gcd(0, 0)).toStrictEqual(0);
		expect(gcd(-0, -0)).toStrictEqual(0);
		expect(gcd(-0, 0)).toStrictEqual(0);
		expect(gcd(0, -0)).toStrictEqual(0);
		expect(gcd(0n, 0n)).toStrictEqual(0n);
	});

	it(`returns a for ${gcd.name}(a, 0) and returns b for ${gcd.name}(0, b)`, () => {
		expect(gcd(4, 0)).toStrictEqual(4);
		expect(gcd(4n, 0n)).toStrictEqual(4n);

		expect(gcd(0, 4)).toStrictEqual(4);
		expect(gcd(-0, 4)).toStrictEqual(4);
		expect(gcd(0n, 4n)).toStrictEqual(4n);
	});

	it(`returns 0 if one or both parameters are non-integers`, () => {
		expect(gcd(9, 4.5)).toStrictEqual(0);
		expect(gcd(4.5, Infinity)).toStrictEqual(0);
		expect(gcd(-Infinity, 4)).toStrictEqual(0);
		expect(gcd(NaN, 4)).toStrictEqual(0);
		expect(gcd(NaN, NaN)).toStrictEqual(0);
		expect(gcd(4, Number.MAX_SAFE_INTEGER + 1)).toStrictEqual(0);
	});
});
