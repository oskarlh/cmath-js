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
 * Read about the original function here:
 * - {@link https://en.cppreference.com/c/numeric/math/frexp|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsubsection.7.12.6.7|The C23 final draft specification}
 */
export function frexp(num: number): FrexpResult {
	if (num === 0 || !Number.isFinite(num)) {
		return { exponent: 0, fraction: num };
	}

	const absNum: number = Math.abs(num);

	// The `+ 2` and the while loop below compensate for rounding errors that may occur because of ECMAScript's Math.log2's
	// undefined precision and together with the `max` solves the issue of `2 ** -exp === Infinity` when `exp <= -1024`
	let exponent: number = Math.max(-1023, Math.floor(Math.log2(absNum)) + 2);
	let fraction: number = absNum * 2 ** -exponent;

	while (fraction < 0.5) {
		fraction *= 2;
		--exponent;
	}

	if (num < 0) {
		fraction = -fraction;
	}

	return {
		exponent,
		fraction,
	};
}
