// Cppreference: https://en.cppreference.com/w/c/numeric/math/pow
export function pow(/*double*/ base: number, /*double*/ exponent: number): /*double*/ number {
	let result = base ** exponent;
	if (base === 1 || (base === -1 && (exponent === Infinity || exponent === -Infinity))) {
		result = 1;
	}
	return result;
}
