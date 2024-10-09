// Constructing these can take a little bit of time so let's reuse them
const floatArray = new Float64Array(1);
const octets: Uint8Array = new Uint8Array(floatArray.buffer);

// DO NOT STORE THE Uint8Array RETURN VALUE FROM THIS CALL!
// It will be mutated on the next call to this function
export function floatOctets(num: number): Readonly<Uint8Array> {
	floatArray[0] = num;
	return octets;
}
