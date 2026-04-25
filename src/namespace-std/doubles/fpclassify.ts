import {
	FP_INFINITE,
	FP_NAN,
	FP_NORMAL,
	FP_SUBNORMAL,
	FP_ZERO,
	type FPClassification,
} from "./macros.ts";

/**
 * Returns the value of the number classification constant appropriate
 * to the value of the argument
 *
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/c/numeric/math/fpclassify|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsubsection.7.12.3.1|The C23 final draft specification}
 *
 * @returns One of FP_INFINITE, FP_NAN, FP_NORMAL, FP_SUBNORMAL, FP_ZERO
 */
export function fpclassify(num: number): FPClassification {
	if (Number.isNaN(num)) {
		return FP_NAN;
	}

	if (num === 0) {
		return FP_ZERO;
	}

	if (Math.abs(num) < 2 ** -1022) {
		return FP_SUBNORMAL;
	}

	if (Number.isFinite(num)) {
		return FP_NORMAL;
	}

	return FP_INFINITE;
}
