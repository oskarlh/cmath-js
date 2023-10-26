import { bitsInUnsignedInteger } from "./bitsInUnsignedInteger";

// Count leading 0 bits
// Cppreference: https://en.cppreference.com/w/cpp/numeric/countl_zero
// An extra parameter, fixedIntegerSizeInBits, is required since this function does not make sense
// without a fixed number of binary digits. In C++, that number is std::numeric_limits<integer type>::digits,
// but JavaScript does not have anything like that.
// The counting starts at the bit with the index (fixedIntegerSizeInBits - 1),
// so countl_zero(8, 0b00000110) === 5, countl_zero(8, 0b11111110) === 0, and countl_zero(8, 0b11111111110) == 0
export function countl_zero(fixedIntegerSizeInBits: number, integer: bigint | number): number {
	const digits = bitsInUnsignedInteger([fixedIntegerSizeInBits, integer]);

	const endOfZeroes = digits.indexOf(1);

	if (endOfZeroes === -1) {
		return digits.length;
	}
	return endOfZeroes;
}
