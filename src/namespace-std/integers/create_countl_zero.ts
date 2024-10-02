import { sanitizeSmallUnsignedInteger, sanitizeUnsignedInteger } from "../../internal/index.js";

export type countl_zero_function =
	/**
	 * Counts leading 0 bits in an unsigned integer, starting with the least significant bit.
	 */
	(integer: bigint | number) => number;

/**
 * Creates a countl_zero function for unsigned integers with the specified number of bits.
 * That function counts leading 0 bits in an unsigned integer, starting with the least significant bit.
 *
 * Read more about the original function on
 * - {@link https://en.cppreference.com/w/cpp/numeric/countl_zero|Cppreference}
 *
 * @example
 * const countl_zero_u8 = create_countl_zero(8);
 * // Returns 6
 * countl_zero_u8(0b00000010);
 * @example
 * const countl_zero_u8 = create_countl_zero(8);
 * // Returns 0
 * countl_zero_u8(0b11111110n);
 * @example
 * const countl_zero_u16 = create_countl_zero(16);
 * // Returns 0
 * countl_zero_u16(0xFDDD);
 */
export function create_countl_zero(options: {
	/**
	 * The number of bits to look at.
	 * Required since countl_zero needs to look a fixed number of binary digits.
	 * In C++, that number is std:: numeric_limits<unsigned integer type>::digits,
	 * but JavaScript does not have anything like that.
	 */
	bits: number;
}): countl_zero_function {
	const bits = sanitizeSmallUnsignedInteger(options.bits);
	return (integer: bigint | number): number => {
		const truncated = BigInt.asUintN(bits, sanitizeUnsignedInteger(integer));
		if (truncated === 0n) {
			return bits;
		}
		return bits - truncated.toString(2).length;
	};
}
