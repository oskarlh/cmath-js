export function bit_floor_number(integer: number): number {
	if (!Number.isSafeInteger(integer) || integer < 1) {
		return 0;
	}

	if (integer >= 2 ** 32) {
		return 2 ** (63 - Math.clz32(integer / 2 ** 32));
	}
	return 2 ** (31 - Math.clz32(integer));
}
