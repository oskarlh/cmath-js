import { bitsInUnsignedInteger } from "../internal/bitsInUnsignedInteger.js";

// Count leading 1 bits
// Cppreference: https://en.cppreference.com/w/cpp/numeric/countl_one
// The one-parameter version starts counting at the position of the most significant set bit.
// The two-parameter version starts counting at the bit with the index (fixedIntegerSizeInBits - 1),
// so countl_one(4, 0b0110) === 0, countl_one(4, 0b1110) === 3, and countl_one(4, 0b1111110) == 3.
export function countl_one(fixedIntegerSizeInBits: number, integer: bigint | number): number;
export function countl_one(integer: bigint | number): number;
export function countl_one(
	...values: [fixedIntegerSizeInBits: number, integer: bigint | number] | [integer: bigint | number]
): number {
	const digits = bitsInUnsignedInteger(values);
	const endOfOnes = digits.indexOf(0);

	if (endOfOnes === -1) {
		return digits.length;
	}
	return endOfOnes;
}
