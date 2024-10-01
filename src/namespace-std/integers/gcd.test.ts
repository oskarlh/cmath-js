import { gcd } from "./index.js";

describe(gcd.name, () => {
	it("finds the greatest common divisor", () => {
		const values = [
			{
				a: 1,
				b: 2,
				expectedDivisor: 1,
			},
			{
				a: 4,
				b: 5,
				expectedDivisor: 1,
			},
			{
				a: 32,
				b: 64,
				expectedDivisor: 32,
			},
			{
				a: 24,
				b: 54,
				expectedDivisor: 6,
			},
			{
				a: 24,
				b: 60,
				expectedDivisor: 12,
			},
			{
				a: 42,
				b: 196,
				expectedDivisor: 14,
			},
			{
				a: 536870912,
				b: 1073741824,
				expectedDivisor: 536870912,
			},
		] as const;
		for (const { a, b, expectedDivisor } of values) {
			expect(gcd(a, b)).toStrictEqual(expectedDivisor);
			expect(gcd(b, a)).toStrictEqual(expectedDivisor);
			expect(gcd(-a, b)).toStrictEqual(expectedDivisor);
			expect(gcd(a, -b)).toStrictEqual(expectedDivisor);
			expect(gcd(-a, -b)).toStrictEqual(expectedDivisor);
			const bigA = BigInt(a);
			const bigB = BigInt(b);
			expect(gcd(bigA, bigB)).toStrictEqual(BigInt(expectedDivisor));
			expect(gcd(bigB, bigA)).toStrictEqual(BigInt(expectedDivisor));
			expect(gcd(-bigA, bigB)).toStrictEqual(BigInt(expectedDivisor));
			expect(gcd(bigA, -bigB)).toStrictEqual(BigInt(expectedDivisor));
			expect(gcd(-bigB, -bigA)).toStrictEqual(BigInt(expectedDivisor));
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
