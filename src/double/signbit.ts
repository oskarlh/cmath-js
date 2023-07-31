// Cppreference: https://en.cppreference.com/w/c/numeric/math/signbit
export function signbit(/*double*/ num: number): boolean {
	return Object.is(num, -0) || num < 0;
}
