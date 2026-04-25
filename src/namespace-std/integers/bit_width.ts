/**
 * `1 + ceil(log2(num))` for unsigned integers, but returning zero when given zero,
 * and without any rounding errors
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/cpp/numeric/bit_width|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2023/n4928.pdf#subsection.22.15.5|The C++23 final draft specification}
 **/
export function bit_width(integer: bigint | number): number {
	if (integer < 1 || (typeof integer === "number" && !Number.isSafeInteger(integer))) {
		return 0;
	}

	return BigInt(integer).toString(2).length;
}
