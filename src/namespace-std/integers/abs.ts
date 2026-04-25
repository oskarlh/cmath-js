/**
 *  Like `fabs()` but for integers.
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/c/numeric/math/abs|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsubsection.7.24.6.1|The C23 final draft specification}
 */
export function abs(integer: bigint): bigint;
export function abs(integer: number): number;
export function abs(integer: bigint | number): bigint | number {
	if (integer < 0 || Object.is(integer, -0)) {
		return -integer;
	}
	return integer;
}
