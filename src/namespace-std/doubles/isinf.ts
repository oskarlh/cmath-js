/**
 * Checks if a floating-point number is (positive or negative) infinity
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference/numeric/math/isinf|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsection.7.12.3|The C23 final draft specification}
 */
export function isinf(num: number): boolean {
	return num === Infinity || num === -Infinity;
}
