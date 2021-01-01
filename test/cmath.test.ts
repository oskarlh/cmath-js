import * as cmath from "../src/cmath";

test("nextafter", () => {
	expect(cmath.nextafter(-3.5, 3.5)).toBe(-3.5 + Number.EPSILON * 2);
	expect(cmath.nextafter(1, 2)).toBe(1 + Number.EPSILON);
	expect(cmath.nextafter(3, 4)).toBe(3 + Number.EPSILON * 2);
	expect(cmath.nextafter(3.5, 3.5)).toBe(3.5);
	expect(cmath.nextafter(-3.5, -3.5)).toBe(-3.5);
	expect(cmath.nextafter(1024, -Infinity)).toBe(1024 - (Number.EPSILON * 1024) / 2);
	expect(cmath.nextafter(-0, 0)).toBe(0);
	expect(cmath.nextafter(0, -0)).toBe(-0);
	expect(cmath.nextafter(-0, -0)).toBe(-0);
	expect(cmath.nextafter(NaN, NaN)).toBe(NaN);
	expect(cmath.nextafter(NaN, 0)).toBe(NaN);
	expect(cmath.nextafter(0, NaN)).toBe(NaN);
	expect(cmath.nextafter(Infinity, Infinity)).toBe(Infinity);
	expect(cmath.nextafter(Infinity, -Infinity)).toBe(Number.MAX_VALUE);
	expect(cmath.nextafter(-Infinity, Infinity)).toBe(-Number.MAX_VALUE);
	expect(cmath.nextafter(-Infinity, -Infinity)).toBe(-Infinity);
	expect(cmath.nextafter(Number.MAX_VALUE, Infinity)).toBe(Infinity);
	expect(cmath.nextafter(-Number.MAX_VALUE, -Infinity)).toBe(-Infinity);
	expect(cmath.nextafter(Number.MIN_VALUE, -1)).toBe(0);
	expect(cmath.nextafter(-Number.MIN_VALUE, Infinity)).toBe(-0);
	expect(cmath.nextafter(Number.MIN_VALUE, -0)).toBe(0);
	expect(cmath.nextafter(Number.MIN_VALUE, 1)).toBe(Number.MIN_VALUE * 2);
	expect(cmath.nextafter(-Number.MIN_VALUE, -1)).toBe(-Number.MIN_VALUE * 2);
});

test("pow", () => {
	expect(cmath.pow(0, -3)).toBe(Infinity);
	expect(cmath.pow(-0, -3)).toBe(-Infinity);
	expect(cmath.pow(0, -4)).toBe(Infinity);
	expect(cmath.pow(-0, -4)).toBe(Infinity);
	expect(cmath.pow(0, -4.4)).toBe(Infinity);
	expect(cmath.pow(-0, -4.4)).toBe(Infinity);
	expect(cmath.pow(0, -Infinity)).toBe(Infinity);
	expect(cmath.pow(-0, -Infinity)).toBe(Infinity);
	expect(cmath.pow(NaN, 0)).toBe(1);
	expect(cmath.pow(1, NaN)).toBe(1);
	expect(cmath.pow(1, 45)).toBe(1);
	expect(cmath.pow(1, -654132432423)).toBe(1);
	expect(cmath.pow(-1, Infinity)).toBe(1);
	expect(cmath.pow(-1, -Infinity)).toBe(1);
	expect(cmath.pow(0, 555)).toBe(0);
	expect(cmath.pow(-0, 713737315)).toBe(-0);
	expect(cmath.pow(Infinity, -0.2)).toBe(0);
	expect(cmath.pow(Infinity, 3737315.5)).toBe(Infinity);
	expect(cmath.pow(-Infinity, 3737315)).toBe(-Infinity);
	expect(cmath.pow(-Infinity, 3737315.5)).toBe(Infinity);
	expect(cmath.pow(-3, 3)).toBe(-27);
});

test("signbit", () => {
	expect(cmath.signbit(-Infinity)).toBe(true);
	expect(cmath.signbit(-53245432534253)).toBe(true);
	expect(cmath.signbit(-0)).toBe(true);
	expect(cmath.signbit(0)).toBe(false);
	expect(cmath.signbit(98970789063)).toBe(false);
	expect(cmath.signbit(Infinity)).toBe(false);
	expect(cmath.signbit(NaN)).toBe(false);
});

test("frexp", () => {
	expect(cmath.frexp(1)).toStrictEqual([0.5, 1]);
	expect(cmath.frexp(1.5)).toStrictEqual([0.75, 1]);
	expect(cmath.frexp(3 * 2 ** 500)).toStrictEqual([0.75, 502]);
	expect(cmath.frexp(-4)).toStrictEqual([-0.5, 3]);
	expect(cmath.frexp(Number.MAX_VALUE)).toStrictEqual([0.9999999999999999, 1024]);
	expect(cmath.frexp(Number.MIN_VALUE)).toStrictEqual([0.5, -1073]);
	expect(cmath.frexp(-Infinity)).toStrictEqual([-Infinity, 0]);
	expect(cmath.frexp(-0)).toStrictEqual([-0, 0]);
	expect(cmath.frexp(NaN)).toStrictEqual([NaN, 0]);
});

test("ldexp", () => {
	expect(cmath.ldexp(1.5, -1)).toBe(0.75);
	expect(cmath.ldexp(2 ** 25, -3)).toBe(2 ** 22);
	expect(cmath.ldexp(2 ** -1072, 1073)).toBe(2);
	expect(cmath.ldexp(2, 4)).toBe(2 ** 5);
	expect(cmath.ldexp(2, 5)).toBe(2 ** 6);
	expect(cmath.ldexp(NaN, -3)).toBe(NaN);

	expect(cmath.ldexp(NaN, NaN)).toBe(NaN);
	expect(cmath.ldexp(6, NaN)).toBe(NaN);
	expect(cmath.ldexp(Infinity, 43)).toBe(Infinity);
});

test("copysign", () => {
	expect(cmath.copysign(8, -4)).toBe(-8);
	expect(cmath.copysign(-8, -0.00000000000000000000001)).toBe(-8);
	expect(cmath.copysign(-Infinity, 0.00000000000000000000001)).toBe(Infinity);
});

test("abs and fabs", () => {
	for (let func of [cmath.abs, cmath.fabs]) {
		expect(func(123084109743)).toBe(123084109743);
		expect(func(-123084109743)).toBe(123084109743);
		expect(func(0)).toBe(0);
	}
	expect(cmath.fabs(12523423523523532432)).toBe(12523423523523532432);
	expect(cmath.fabs(-52523423523523532444432)).toBe(52523423523523532444432);
	expect(cmath.fabs(-0)).toBe(0);
	expect(cmath.fabs(-Infinity)).toBe(Infinity);
	expect(cmath.fabs(NaN)).toBe(NaN);
});

test("hypot", () => {
	expect(cmath.hypot(105, 100)).toBeCloseTo(145, 3);
	expect(cmath.hypot(-Infinity, 0)).toBe(Infinity);
	expect(cmath.hypot(0, -0.1451493619437592)).toBe(0.1451493619437592);
	expect(cmath.hypot(0, 0, -0.1451493619437592)).toBe(0.1451493619437592);
	expect(cmath.hypot(-3, -2, -1)).toBeCloseTo(3.741657386773941, 3);
}, 1000);
