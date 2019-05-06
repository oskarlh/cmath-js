
import * as cmath from "../src/cmath"

test("nextafter", () => {
	expect(cmath.nextafter(-3.5, 3.5)).toBe(-3.5 + Number.EPSILON * 2);
	expect(cmath.nextafter(1, 2)).toBe(1 + Number.EPSILON);
	expect(cmath.nextafter(3, 4)).toBe(3 + Number.EPSILON*2);
	expect(cmath.nextafter(3.5, 3.5)).toBe(3.5);
	expect(cmath.nextafter(-3.5, -3.5)).toBe(-3.5);
	expect(cmath.nextafter(1024, -Infinity)).toBe(1024 - Number.EPSILON * 1024/2);
	expect(cmath.nextafter(-0, 0)).toBe(0);
	expect(cmath.nextafter(0, -0)).toBe(-0);
	expect(cmath.nextafter(-0, -0)).toBe(-0);
	expect(cmath.nextafter(Infinity, Infinity)).toBe(Infinity);
	expect(cmath.nextafter(Infinity, -Infinity)).toBe(Number.MAX_VALUE);
	expect(cmath.nextafter(-Infinity, Infinity)).toBe(-Number.MAX_VALUE);
	expect(cmath.nextafter(Number.MAX_VALUE, Infinity)).toBe(Infinity);
	expect(cmath.nextafter(-Number.MAX_VALUE, -Infinity)).toBe(-Infinity);
	expect(cmath.nextafter(Number.MIN_VALUE, -1)).toBe(0);
	expect(cmath.nextafter(-Number.MIN_VALUE, Infinity)).toBe(-0);
}, 1000);

/*
test("sqrt", () => {
	expect(cmath.sqrt(2)).toBe(1.4142135623730951);
	expect(cmath.sqrt(4)).toBe(2);
	expect(cmath.sqrt(5)).toBe(2.23606797749979);
	expect(cmath.sqrt(6)).toBe(2.44948974278317788133563226438127458095550537109375);
	expect(cmath.sqrt(7)).toBe(2.64575131106459071617109657381661236286163330078125);
	expect(cmath.sqrt(8)).toBe(2.828427124746190290949243717477656900882720947265625);
	expect(cmath.sqrt(8.00000000000001)).toBe(2.828427124746192067306083117728121578693389892578125);
	expect(cmath.sqrt(81)).toBe(9);
	expect(cmath.sqrt(-2)).toBe(NaN);
	expect(cmath.sqrt(NaN)).toBe(NaN);
	expect(cmath.sqrt(Infinity)).toBe(Infinity);
	expect(cmath.sqrt(-Infinity)).toBe(NaN);
	
}, 1000);*/


test("pow", () => {
	expect(cmath.pow(0, -3)).toBe(Infinity);
	expect(cmath.pow(-0, -3)).toBe(-Infinity);
	expect(cmath.pow(0, -4)).toBe(Infinity);
	expect(cmath.pow(-0, -4)).toBe(Infinity);
	expect(cmath.pow(0, -4.4)).toBe(Infinity);
	expect(cmath.pow(-0, -4.4)).toBe(Infinity);
	expect(cmath.pow(0, -Infinity)).toBe(Infinity);
	expect(cmath.pow(-0, -Infinity)).toBe(Infinity);
	expect(cmath.pow(0, 555)).toBe(0);
	expect(cmath.pow(-0, 713737315)).toBe(-0);
	expect(cmath.pow(Infinity, -0.2)).toBe(0);
	expect(cmath.pow(Infinity, 3737315.5)).toBe(Infinity);
	expect(cmath.pow(-Infinity, 3737315)).toBe(-Infinity);
	expect(cmath.pow(-Infinity, 3737315.5)).toBe(Infinity);
	expect(cmath.pow(-3, 3)).toBe(-27);
	
}, 1000);

test("signbit", () => {
	expect(cmath.signbit(-Infinity)).toBe(true);
	expect(cmath.signbit(-53245432534253)).toBe(true);
	expect(cmath.signbit(-0)).toBe(true);
	expect(cmath.signbit(0)).toBe(false);
	expect(cmath.signbit(98970789063)).toBe(false);
	expect(cmath.signbit(Infinity)).toBe(false);
	expect(cmath.signbit(NaN)).toBe(false);
	
}, 1000);


test("frexp", () => {
	expect(cmath.frexp(1)).toStrictEqual([0.5, 1]);
	expect(cmath.frexp(1.5)).toStrictEqual([0.75, 1]);
	expect(cmath.frexp(3 * 2**500)).toStrictEqual([0.75, 502]);
	expect(cmath.frexp(-4)).toStrictEqual([-0.5, 3]);
	expect(cmath.frexp(Number.MAX_VALUE)).toStrictEqual([0.9999999999999999, 1024]);
	expect(cmath.frexp(Number.MIN_VALUE)).toStrictEqual([0.5, -1073]);
	expect(cmath.frexp(-Infinity)).toStrictEqual([-Infinity, 0]);
	expect(cmath.frexp(-0)).toStrictEqual([-0, 0]);
	expect(cmath.frexp(NaN)).toStrictEqual([NaN, 0]);
}, 1000);


test("ldexp", () => {
	expect(cmath.ldexp(1.5, -1)).toBe(0.75);
	expect(cmath.ldexp(2**25, -3)).toBe(2**22);
	expect(cmath.ldexp(2**-1072, 1073)).toBe(2);
	expect(cmath.ldexp(2, 4)).toBe(2 ** 5);
	expect(cmath.ldexp(2, 5)).toBe(2 ** 6);
	expect(cmath.ldexp(NaN, -3)).toBe(NaN);

	expect(cmath.ldexp(NaN, NaN)).toBe(NaN);
	expect(cmath.ldexp(6, NaN)).toBe(NaN);
	expect(cmath.ldexp(Infinity, 43)).toBe(Infinity);
}, 1000);


test("copysign", () => {
	expect(cmath.copysign(8, -4)).toBe(-8);
	expect(cmath.copysign(-8, -0.00000000000000000000001)).toBe(-8);
	expect(cmath.copysign(-Infinity, 0.00000000000000000000001)).toBe(Infinity);
	
}, 1000);

test("fabs", () => {
	expect(cmath.fabs(-0)).toBe(0);
	expect(cmath.fabs(1230841097435098143753241324)).toBe(1230841097435098143753241324);
	expect(cmath.fabs(-1230841097435098143753241324)).toBe(1230841097435098143753241324);
	expect(cmath.fabs(-Infinity)).toBe(Infinity);
	expect(cmath.fabs(NaN)).toBe(NaN);
}, 1000);

test("abs", () => {
	expect(cmath.abs(-0)).toBe(0);
	expect(cmath.abs(1230841097435098143753241324)).toBe(1230841097435098143753241324);
	expect(cmath.abs(-1230841097435098143753241324)).toBe(1230841097435098143753241324);
	expect(cmath.abs(-Infinity)).toBe(Infinity);
	expect(cmath.abs(NaN)).toBe(NaN);
}, 1000);


test("hypot", () => {
	expect(cmath.hypot(105, 100)).toBeCloseTo(145, 3);
	expect(cmath.hypot(-Infinity, 0)).toBe(Infinity);
	expect(cmath.hypot(0, -0.1451493619437592)).toBe(0.1451493619437592);
	expect(cmath.hypot(0, 0, -0.1451493619437592)).toBe(0.1451493619437592);
	expect(cmath.hypot(-3, -2, -1)).toBeCloseTo(3.741657386773941, 3);
}, 1000);

