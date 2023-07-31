// copysign produces a value with the magnitude of 'num' and the sign 'sign'
// Note: ECMAScript does not have negative NaNs
// C spec: https://web.archive.org/web/20181230041359if_/http://www.open-std.org/jtc1/sc22/wg14/www/abq/c17_updated_proposed_fdis.pdf#subsection.7.12.11
// Cppreference: https://en.cppreference.com/w/c/numeric/math/copysign
// The implementation is complicated by the need to handle positive and negative zero
export function copysign(/*double*/ num: number, /*double*/ sign: number): /*double*/ number {
	return Math.abs(num) * (Object.is(0 * Math.sign(sign), -0) ? -1 : 1);
}
