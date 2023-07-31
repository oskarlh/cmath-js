// abs is like fabs but for integers
// Cppreference: https://en.cppreference.com/w/c/numeric/math/abs
export function abs(number: bigint | number) {
	if (number < 0 || Object.is(number, -0)) {
		return -number;
	}
	return number;
}
