export type countl_zero_function =
	/**
	 * Counts consecutive 0 bits in an unsigned integer, starting with the most significant bit.
	 */
	(integer: bigint | number) => number;

/**
 * Creates a countl_zero function for unsigned integers with the specified number of bits.
 * That function counts leading 0 bits in unsigned integers.
 *
 * Read more about the original function on
 * - {@link https://en.cppreference.com/w/cpp/numeric/countl_zero|Cppreference}
 *
 * @example
 * const countl_zero_u8 = create_countl_zero({ bits: 8 });
 * // Returns 6
 * countl_zero_u8(0b00000010);
 *
 * @example
 * const countl_zero_u8 = create_countl_zero({ bits: 8 });
 * // Returns 0
 * countl_zero_u8(0b11111110n);
 *
 * @example
 * const countl_zero_u16 = create_countl_zero({ bits: 16 });
 * // Returns 0
 * countl_zero_u16(0xFDDD);
 */
export function create_countl_zero({
	bits,
}: {
	/**
	 * The number of bits to look at. Must be an integer >= 0.
	 * Required since countl_zero needs to look a fixed number of binary digits.
	 * In C++, that number is std:: numeric_limits<unsigned integer type>::digits,
	 * but JavaScript does not have anything like that.
	 */
	bits: number;
}): countl_zero_function {
	if (bits <= 32) {
		// Fast version for small integers

		const bitsLessThan32 = 32 - bits;
		const mask = (2 ** bits - 1) | 0;
		return (integer) => {
			const truncated =
				(typeof integer === "number" ? integer : Number(BigInt.asIntN(32, integer))) & mask;
			return Math.clz32(truncated) - bitsLessThan32;
		};
	}

	// For integers of any size

	return (integer) => {
		const truncated = BigInt.asUintN(bits, BigInt(integer));
		if (truncated === 0n) {
			return bits;
		}
		return bits - truncated.toString(2).length;
	};
}
