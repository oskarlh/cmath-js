/**
 * Checks if an unsigned integer is a power of two
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/cpp/numeric/has_single_bit|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2023/n4928.pdf#subsection.22.15.5|The C++23 final draft specification}
 **/
export function has_single_bit(integer: bigint | number): boolean {
	if (typeof integer === "number" && !Number.isInteger(integer)) {
		return false;
	}

	return String(BigInt(integer)).lastIndexOf("1") === 0;
}
