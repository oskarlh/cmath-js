/**
 * Checks if a floating-point number is (positive or negative) zero
 *
 * Read more about the original function here:
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsubsection.7.12.3.10|The C23 final draft specification}
 */
export function iszero(num: number): boolean {
	// In both JavaScript and C, `0.0` is different from `-0.0`
	// but they both compare equal to one another
	return num === 0;
}
