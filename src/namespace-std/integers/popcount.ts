/**
 * Count the total number of 1 bits in an unsigned integer
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/cpp/numeric/popcount|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2023/n4928.pdf#subsection.22.15.7|The C++23 final draft specification}
 **/
export function popcount(integer: bigint | number): number {
	if (integer <= 0 || (typeof integer === "number" && !Number.isInteger(integer))) {
		return 0;
	}
	let count = 0;
	for (const digit of BigInt(integer).toString(2)) {
		count += Number(digit);
	}
	return count;
}
