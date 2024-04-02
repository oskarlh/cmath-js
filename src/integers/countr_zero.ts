import { bitsInUnsignedInteger } from "../internal/bitsInUnsignedInteger.js";

// Count trailing 0 bits
// Cppreference: https://en.cppreference.com/w/cpp/numeric/countr_zero
// The one-parameter version starts counting at the position of the most significant set bit.
// The two-parameter version starts counting at the bit with the index (fixedIntegerSizeInBits - 1),
// so countr_one(3, 0b011) === 2, countr_one(3, 0b111) === 3, and countr_one(3, 0b111111) == 3.
// If the integer length is 0, 0 is returned.
export function countr_zero(fixedIntegerSizeInBits: number, integer: bigint | number): number;
export function countr_zero(integer: bigint | number): number;
export function countr_zero(
	...values: [fixedIntegerSizeInBits: number, integer: bigint | number] | [integer: bigint | number]
): number {
	const digits = bitsInUnsignedInteger(values);
	return digits.length - digits.lastIndexOf(1) - 1;
}
