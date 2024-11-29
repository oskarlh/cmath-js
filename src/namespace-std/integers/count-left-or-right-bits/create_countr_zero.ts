export type countr_zero_function =
	/**
	 * Counts consecutive 0 bits in an unsigned integer, starting with the least significant bit.
	 */
	(integer: bigint | number) => number;

/**
 * Creates a countr_zero function for unsigned integers with the specified number of bits.
 * That function counts trailing 0 bits in unsigned integers.
 *
 * Read more about the original function on
 * - {@link https://en.cppreference.com/w/cpp/numeric/countr_zero|Cppreference}
 *
 * @example
 * const countr_zero_u8 = create_countr_zero({ bits: 8 });
 * // Returns 2
 * countr_zero_u8(0b00000100);
 *
 * @example
 * const countr_zero_u8 = create_countr_zero({ bits: 8 });
 * // Returns 0
 * countr_zero_u8(0b11111111n);
 */
export function create_countr_zero({ bits }: { bits: number }): countr_zero_function {
	if (bits <= 32) {
		// Fast version for small integers

		const mask = (2 ** bits - 1) | 0;
		return (integer: bigint | number): number => {
			const truncated =
				(typeof integer === "number" ? integer : Number(BigInt.asIntN(32, integer))) & mask;

			if (truncated === 0) {
				return bits;
			}

			// Turn the trailing 0s - plus the bit just to the left of them - to 1s, and the rest of the bits to 0s.
			const zeroesAsOnes = truncated ^ (truncated - 1);

			const trailLength = 31 - Math.clz32(zeroesAsOnes);
			return trailLength;
		};
	}

	// For integers of any size

	return (integer: bigint | number): number => {
		const truncated = BigInt.asUintN(bits, BigInt(integer));
		if (truncated === 0n) {
			return bits;
		}

		const digits = truncated.toString(2);

		return digits.length - digits.lastIndexOf("1") - 1;
	};
}
