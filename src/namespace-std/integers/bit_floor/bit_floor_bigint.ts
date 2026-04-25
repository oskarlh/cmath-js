export function bit_floor_bigint(integer: bigint): bigint {
	if (integer < 1n) {
		return 0n;
	}

	return 1n << BigInt(integer.toString(2).length - 1);
}
