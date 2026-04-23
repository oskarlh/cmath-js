// Constructing the buffer only once, outside of the function calls, is faster
const dataView = new DataView(new ArrayBuffer(8));

export function floatFromBits(bits64: bigint): number {
	dataView.setBigUint64(0, bits64, true);
	return dataView.getFloat64(0, true);
}

export function floatOctets(num: number): bigint {
	dataView.setFloat64(0, num, true);
	return dataView.getBigUint64(0, true);
}
