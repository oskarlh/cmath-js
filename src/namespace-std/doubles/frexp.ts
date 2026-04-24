export interface FrexpResult {
	exponent: number;
	fraction: number;
}
/**
 * Decomposes a floating point value into a normalized fraction and an integral exponent of 2.
 *
 * Instead of
 * `double frexp(double arg, int* exp)`
 * this is built as
 * `{ exponent, fraction } frexp(double arg)`
 * due to ECMAScripts's lack of pointers.
 *
 * `Object.is(n, frexp(n)[0] * 2 ** frexp(n)[1])`
 * for all number values of `n` except when
 * `Math.isFinite(n) && Math.abs(n) > 2**1023`
 *
 * `Object.is(n, (2 * frexp(n)[0]) * 2 ** (frexp(n)[1] - 1))`
 * for all number values of `n`.
 *
 * `Object.is(n, frexp(n)[0])`
 * for these values of n:
 * `0`, `-0`, `NaN`, `Infinity`, `-Infinity`
 *
 * `Math.abs(frexp(n)[0])` is `>= 0.5` and `< 1.0` for any other `number`-type value of `n`
 *
 * A hypothetical issue with this implementation is that the precision of the ** operator
 * is not defined in the ECMAScript standard, however, it is hard to imagine a sane ECMAScript
 * implementation would give imprecise results for 2**<integer> expressions.
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/cpp/numeric/math/frexp|Cppreference}
 */
export function frexp(num: number): FrexpResult {
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

	// This might never run and that's okay. See the comment above
	/* node:coverage disable */
	while (fraction >= 1) {
		fraction *= 0.5;
		++exponent;
	}
	/* node:coverage enable */

	if (num < 0) {
		fraction = -fraction;
	}

	return {
		exponent,
		fraction,
	};
}
