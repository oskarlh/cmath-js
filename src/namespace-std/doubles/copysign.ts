import { signbit } from "../index.ts";

/**
 * Produces a value with the magnitude of 'num' and the sign 'sign'.
 * This implementation handles positive and negative zero and positive and negative
 * NaNs (in JS engines where that difference is observable when writing NaNs to a Float64Array).
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/cpp/numeric/math/copysign|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsubsection.7.12.11.1|The C23 final draft specification}
 */
export function copysign(num: number, sign: number): number {
	return signbit(num) === signbit(sign) ? num : -num;
}
