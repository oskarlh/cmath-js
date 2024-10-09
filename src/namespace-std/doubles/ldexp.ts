// ldexp returns factor * 2**exponent
// C spec: https://web.archive.org/web/20181230041359if_/http://www.open-std.org/jtc1/sc22/wg14/www/abq/c17_updated_proposed_fdis.pdf#subsection.7.12.6
// Cppreference: https://en.cppreference.com/w/c/numeric/math/ldexp

/**
 * Multiplies a floating-point number by an integral power of 2.
 *
 *
 * Read more about the original function on
 * - {@link https://en.cppreference.com/w/c/numeric/math/ldexp|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsection.7.12.6|The C23 final draft specification}
 *
 * @returns `factor * 2**exponent` but avoiding overflow and underflow
 */
export function ldexp(/*double*/ factor: number, /*int*/ exponent: number): /*double*/ number {
	// Implementation is complicated by the need to avoid underflow/overflow
	// given a large exponent (less than -1075 or greater than 1023).
	const halfPowerRoundedTowardZero: number = 2 ** Math.trunc(exponent * 0.5);
	return (
		factor * halfPowerRoundedTowardZero * halfPowerRoundedTowardZero * 2 ** Math.sign(exponent % 2)
	);
}
