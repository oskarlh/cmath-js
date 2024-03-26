// Cppreference: https://en.cppreference.com/w/c/numeric/math/signbit
export function signbit(num: bigint | number): boolean {
	return Object.is(num, -0) || num < 0;
}
