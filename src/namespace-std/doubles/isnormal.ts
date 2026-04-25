/**
 * Checks if a floating-point number is normal (not subnormal, infinite, NaN, or zero)
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/c/numeric/math/isnormal|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsubsection.7.12.3.6|The C23 final draft specification}
 */
export function isnormal(num: number): boolean {
	return Number.isFinite(num) && num !== 0 && Math.abs(num) > 2 ** -1023;
}
