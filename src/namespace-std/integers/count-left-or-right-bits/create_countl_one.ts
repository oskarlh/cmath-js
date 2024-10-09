import { create_countl_zero } from "./index.js";

export type countl_one_function =
	/**
	 * Counts consecutive 1 bits in an unsigned integer, starting with the most significant bit.
	 */
	(integer: bigint | number) => number;

/**
 * Creates a countl_one function for unsigned integers with the specified number of bits.
 * That function counts leading 1 bits in unsigned integers.
 *
 * Read more about the original function on
 * - {@link https://en.cppreference.com/w/cpp/numeric/countl_zero|Cppreference}
 *
 * @example
 * const countl_one_u8 = create_countl_one({ bits: 8 });
 * // Returns 6
 * countl_one_u8(0b11111101);
 *
 * @example
 * const countl_one_u8 = create_countl_one({ bits: 8 });
 * // Returns 0
 * countl_one_u8(0b00000001n);
 *
 * @example
 * const countl_one_u16 = create_countl_one({ bits: 16 });
 * // Returns 0
 * countl_one_u16(0x0DDD);
 */
export function create_countl_one({
	bits,
}: {
	/**
	 * The number of bits to look at. Must be an integer >= 0.
	 * Required since countl_one needs to look a fixed number of binary digits.
	 * In C++, that number is std:: numeric_limits<unsigned integer type>::digits,
	 * but JavaScript does not have anything like that.
	 */
	bits: number;
}): countl_one_function {
	const countl_zero = create_countl_zero({ bits });

	if (bits <= 32) {
		// Fast version for small integers
		return (integer: bigint | number) => countl_zero(~integer);
	}

	// For integers of any size
	return (integer: bigint | number) => countl_zero(~BigInt(integer));
}
