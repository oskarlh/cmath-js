/**
 * Computes the value of a base raised to an exponent
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/c/numeric/math/pow|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsubsection.7.12.7.5|The C23 final draft specification, chapter 7}
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsubsection.13.10.4.5|The C23 final draft specification, annex F}
 **/
export function pow(/*double*/ base: number, /*double*/ exponent: number): /*double*/ number {
	let result = base ** exponent;
	if (base === 1 || (base === -1 && (exponent === Infinity || exponent === -Infinity))) {
		result = 1;
	}
	return result;
}
