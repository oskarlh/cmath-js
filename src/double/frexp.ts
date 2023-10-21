// Note: Instead of "double frexp(double arg, int* exp)" this is built as "[double, int] frexp(double arg)" due to ECMAScripts's lack of pointers
// A hypothetical issue with this implementation is that the precision the ** operator is not defined in the ECMAScript standard,
// however, sane ECMAScript implementations should give precise results for 2**<integer> expressions
// Cppreference: https://en.cppreference.com/w/c/numeric/math/frexp for a more detailed description
// Object.is(n, frexp(n)[0] * 2 ** frexp(n)[1]) for all number values of n except when Math.isFinite(n) && Math.abs(n) > 2**1023
// Object.is(n, (2 * frexp(n)[0]) * 2 ** (frexp(n)[1] - 1)) for all number values of n
// Object.is(n, frexp(n)[0]) for these values of n: 0, -0, NaN, Infinity, -Infinity
// Math.abs(frexp(n)[0]) is >= 0.5 and < 1.0 for any other number-type value of n
export function frexp(
	/*double*/ num: number,
): [/*double*/ fraction: number, /*int*/ exponent: number] {
	if (num === 0 || !Number.isFinite(num)) {
		return [num, 0];
	}

	const absNum: number = Math.abs(num);

	let exp: number = Math.max(-1023, Math.floor(Math.log2(absNum)) + 1);
	let x: number = absNum * 2 ** -exp;

	// These while loops compensate for rounding errors that may occur because of ECMAScript's Math.log2's undefined precision
	// and the first one also helps work around the issue of 2 ** -exp === Infinity when exp <= -1024
	while (x < 0.5) {
		x *= 2;
		--exp;
	}

	// istanbul ignore next - This might never run and that's okay. See the above comment
	while (x >= 1) {
		x *= 0.5;
		++exp;
	}

	if (num < 0) {
		x = -x;
	}

	return [x, exp];
}
