import { sanitizeUnsignedInteger } from "../../internal/sanitizeUnsignedInteger.js";

/**
 * Counts consecutive 1 bits in an unsigned integer, starting with the least significant bit.
 *
 * Read more about the original function on
 * - {@link https://en.cppreference.com/w/cpp/numeric/countr_one|Cppreference}
 *
 * @example
 * // Returns 4
 * countr_one(0b10101111)
 * @example
 * // Returns 2
 * countr_one(0b11n)
 * @example
 * // Returns 0
 * countr_one(0b10)
 * @example
 * // Returns 0
 * countr_one(0b0)
 */
export function countr_one(integer: bigint | number): number {
	const digits = sanitizeUnsignedInteger(integer).toString(2);
	return digits.length - digits.lastIndexOf("0") - 1;
}
