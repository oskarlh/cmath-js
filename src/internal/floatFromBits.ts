// Constructing these can take a little bit of time so let's reuse them
const floatArray = new Float64Array(1);
const asUint32s = new Uint32Array(floatArray.buffer);

export function floatFromBits(bits64: bigint): number {
	asUint32s[0] = Number(BigInt.asUintN(32, bits64));
	asUint32s[1] = Number(BigInt.asUintN(32, bits64 >> 32n));

	return floatArray[0];
}
