/**
 *
 * @returns A Uint8Array where each element has the value 0 or 1, matching the bits in the
 *          integer. If fixedIntegerSizeInBits is given, that's the size of the array. Otherwise
 *          the size is the number of bits needed to represent the whole integer value, which is 0
 *          if the integer is 0. The bits are ordered from most significant to least significant!
 */
export function bitsInUnsignedInteger(
	values: [fixedIntegerSizeInBits: number, integer: bigint | number] | [integer: bigint | number],
): Uint8Array {
	let integer: bigint | number;
	let fixedIntegerSizeInBits: number = NaN; // NOTE: NaN does not compare equal to anything

	if (values.length === 1) {
		[integer] = values;
	} else {
		[fixedIntegerSizeInBits, integer] = values;

		if (fixedIntegerSizeInBits <= 0 || !Number.isInteger(fixedIntegerSizeInBits)) {
			return new Uint8Array();
		}
	}

	const integerIsZeroOrInvalid =
		integer <= 0 || (typeof integer === "number" && !Number.isInteger(integer));
	if (integerIsZeroOrInvalid) {
		if (!fixedIntegerSizeInBits) {
			return new Uint8Array();
		}
		integer = 0;
	}

	let bitString = BigInt(integer).toString(2);
	if (bitString.length < fixedIntegerSizeInBits) {
		bitString = bitString.padStart(fixedIntegerSizeInBits, "0");
	}

	const digits = Uint8Array.from(bitString satisfies Iterable<string> as Iterable<any>);

	if (digits.length > fixedIntegerSizeInBits) {
		return digits.slice(-fixedIntegerSizeInBits);
	}

	return digits;
}
