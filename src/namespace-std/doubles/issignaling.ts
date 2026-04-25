import { floatToBits } from "../../internal/index.ts";

/**
 * Determines if a number is NaN without the "quiet" bit set.
 * Note that the ECMAScript standard allows implementations to
 * quietly alter any bits in NaN so this may give unexpected results
 * (such as always false or always true) in some JavaScript engines.
 *
 * Read more about the original function here:
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsubsection.7.12.3.8|The C23 final draft specification}
 */
export function issignaling(num: number): boolean {
	return Number.isNaN(num) && !(floatToBits(num) & (1n << 51n));
}
