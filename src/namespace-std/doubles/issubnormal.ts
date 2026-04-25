import { fpclassify } from "./fpclassify.ts";
import { FP_SUBNORMAL } from "./macros.ts";

/**
 * Checks if a floating-point number is issubnormal
 * (very small - not normal, infinite, NaN, or zero)
 *
 * Read more about the original function here:
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsubsection.7.12.3.9|The C23 final draft specification}
 */
export function issubnormal(num: number): boolean {
	return fpclassify(num) === FP_SUBNORMAL;
}
