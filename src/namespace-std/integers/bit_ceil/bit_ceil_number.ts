export function bit_ceil_number(integer: number): number {
	if (!Number.isSafeInteger(integer) || integer < 1 || integer > 2 ** 52) {
		return 1;
	}

	const minusOne = integer - 1;

	if (minusOne >= 2 ** 32) {
		return 2 ** (64 - Math.clz32(minusOne / 2 ** 32));
	}
	return 2 ** (32 - Math.clz32(minusOne));
}
