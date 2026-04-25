export function bit_ceil_number(integer: number): number {
	if (!Number.isSafeInteger(integer) || integer < 1 || integer > 2 ** 52) {
		return 1;
	}

	let minusOne = integer - 1;

	let power = 32;
	if (minusOne >= 2 ** 32) {
		power = 64;
		minusOne /= 2 ** 32;
	}
	power -= Math.clz32(minusOne);
	return 2 ** power;
}
