// abs is like fabs but for integers
// Cppreference: https://en.cppreference.com/w/c/numeric/math/abs
export function abs(integer: bigint): bigint;
export function abs(integer: number): number;
export function abs(integer: bigint | number): bigint | number {
	if (integer < 0 || Object.is(integer, -0)) {
		return -integer;
	}
	return integer;
}
