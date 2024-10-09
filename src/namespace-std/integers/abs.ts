/**
 *  Like fabs but for integers
 *
 * Read more about the original function on
 * - {@link https://en.cppreference.com/w/c/numeric/math/abs|Cppreference}
 */
export function abs(integer: bigint): bigint;
export function abs(integer: number): number;
export function abs(integer: bigint | number): bigint | number {
	if (integer < 0 || Object.is(integer, -0)) {
		return -integer;
	}
	return integer;
}
