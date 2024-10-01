// ldexp multiplies a floating-point number by an integral power of 2
// ldexp returns factor * 2**exponent
// C spec: https://web.archive.org/web/20181230041359if_/http://www.open-std.org/jtc1/sc22/wg14/www/abq/c17_updated_proposed_fdis.pdf#subsection.7.12.6
// Cppreference: https://en.cppreference.com/w/c/numeric/math/ldexp
// Implementation is complicated by the need to avoid underflow/overflow given a large exponent (-1075< >1023)
export function ldexp(/*double*/ factor: number, /*int*/ exponent: number): /*double*/ number {
	const halfPowerRoundedTowardZero: number = 2 ** Math.trunc(exponent * 0.5);
	return (
		factor * halfPowerRoundedTowardZero * halfPowerRoundedTowardZero * 2 ** Math.sign(exponent % 2)
	);
}
