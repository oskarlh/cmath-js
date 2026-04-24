/**
 * Fills an array with sequentially increasing values
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/cpp/algorithm/iota|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2023/n4928.pdf#subsection.27.10.13|The C++23 final draft specification}
 */
export function iota(mut_arrayToFill: bigint[], startValue: bigint): void;
export function iota(mut_arrayToFill: number[], startValue: number): void;
export function iota(mut_arrayToFill: (bigint | number)[], startValue: bigint | number): void {
	mut_arrayToFill.fill(startValue); // In case there are empty array elements
	let value = startValue;
	for (const index of mut_arrayToFill.keys()) {
		mut_arrayToFill[index] = value++;
	}
}
