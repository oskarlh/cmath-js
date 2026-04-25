export function bit_ceil_bigint(integer: bigint): bigint {
	if (integer < 2n) {
		return 1n;
	}

	return 1n << BigInt((integer - 1n).toString(2).length);
}
