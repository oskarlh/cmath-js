import { signbit } from "../all-numbers/index.js";

// copysign produces a value with the magnitude of 'num' and the sign 'sign'
// C spec: https://web.archive.org/web/20181230041359if_/http://www.open-std.org/jtc1/sc22/wg14/www/abq/c17_updated_proposed_fdis.pdf#subsection.7.12.11
// Cppreference: https://en.cppreference.com/w/c/numeric/math/copysign
// This implementation handles positive and negative zero  and positive and negative
// NaNs (in JS engines where that difference is observable when writing NaNs to a Float64Array)
export function copysign(/*double*/ num: number, /*double*/ sign: number): /*double*/ number {
	return signbit(num) === signbit(sign) ? num : -num;
}
