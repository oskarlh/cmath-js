import { floatToBits } from "../../internal/index.ts";

/**
 * Determines if a number is negative or NaN with the sign bit set.
 * Note that the ECMAScript standard does not guarantee that +NaN and
 * -NaN are different so this function may give unexpected results
 * (such as always false or always true) in some JavaScript engines.
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/c/numeric/math/signbit|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsubsection.7.12.3.7|The C23 final draft specification}
 */
export function signbit(num: bigint | number): boolean {
	return floatToBits(Number(num)) >= 1n << 63n;
}
