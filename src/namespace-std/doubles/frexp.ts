export interface frexp_result {
	exponent: number;
	fraction: number;
}

// Note: Instead of "double frexp(double arg, int* exp)" this is built as "{ exponent, fraction } frexp(double arg)" due to ECMAScripts's lack of pointers
// A hypothetical issue with this implementation is that the precision of the ** operator is not defined in the ECMAScript standard,
// however, it is hard to imagine a sane ECMAScript implementation would give imprecise results for 2**<integer> expressions.
// Cppreference: https://en.cppreference.com/w/cpp/numeric/math/frexp
// Object.is(n, frexp(n)[0] * 2 ** frexp(n)[1]) for all number values of n except when Math.isFinite(n) && Math.abs(n) > 2**1023
// Object.is(n, (2 * frexp(n)[0]) * 2 ** (frexp(n)[1] - 1)) for all number values of n
// Object.is(n, frexp(n)[0]) for these values of n: 0, -0, NaN, Infinity, -Infinity
// Math.abs(frexp(n)[0]) is >= 0.5 and < 1.0 for any other number-type value of n
export function frexp(num: number): frexp_result {
	if (num === 0 || !Number.isFinite(num)) {
		return { exponent: 0, fraction: num };
	}

	const absNum: number = Math.abs(num);

	let exponent: number = Math.max(-1023, Math.floor(Math.log2(absNum)) + 1);
	let fraction: number = absNum * 2 ** -exponent;

	// These while loops compensate for rounding errors that may occur because of ECMAScript's Math.log2's undefined precision
	// and the first one also helps work around the issue of 2 ** -exp === Infinity when exp <= -1024
	while (fraction < 0.5) {
		fraction *= 2;
		--exponent;
	}

	// istanbul ignore next - This might never run and that's okay. See the above comment
	while (fraction >= 1) {
		fraction *= 0.5;
		++exponent;
	}

	if (num < 0) {
		fraction = -fraction;
	}

	return {
		exponent,
		fraction,
	};
}
