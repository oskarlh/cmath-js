import { create_countr_zero } from "./index.js";

export type countr_one_function =
	/**
	 * Counts consecutive 1 bits in an unsigned integer, starting with the least significant bit.
	 */
	(integer: bigint | number) => number;

/**
 * Creates a countr_one function for unsigned integers with the specified number of bits.
 * That function counts trailing 1 bits in unsigned integers.
 *
 * Read more about the original function on
 * - {@link https://en.cppreference.com/w/cpp/numeric/countr_one|Cppreference}
 *
 * @example
 * const countr_one_u8 = create_countr_one({ bits: 8 });
 * // Returns 2
 * countr_one_u8(0b11111011);
 *
 * @example
 * const countr_one_u8 = create_countr_one({ bits: 8 });
 * // Returns 0
 * countr_one_u8(0n);
 */
export const create_countr_one = ({ bits }: { bits: number }): countr_one_function => {
	const countr_zero = create_countr_zero({ bits });

	if (bits <= 32) {
		// Fast version for small integers
		return (integer: bigint | number) => countr_zero(~integer);
	}

	// For integers of any size
	return (integer: bigint | number) => countr_zero(~BigInt(integer));
};
