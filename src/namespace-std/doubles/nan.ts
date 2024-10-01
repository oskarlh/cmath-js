import { floatFromBits } from "../../internal/floatFromBits.js";

// Converts the string arg into the corresponding quiet NaN value.
// https://en.cppreference.com/w/cpp/numeric/math/nan
// This is always true: Object.is(nan(<any string>), NaN).
// Important note: JavaScript engines do not have to keep the NaN value
// and at the time of writing (2024) at least one engine (Firefox's) only
// supports two different NaNs (+NaN and -NaN), so in Firefox this function
// will always return the exact same NaN. Chrome's JS engine supports all
// possible NaN values, though, which can be observed like this:
// (
//   new Uint8Array(new Float64Array([nan("0")]).buffer)[0] === 0 &&
//   new Uint8Array(new Float64Array([nan("92")]).buffer)[0] === 92
// )

export function nan(arg: string): number {
	let bits = 0n;

	// The accepted format is not defined in the C23 standard, except that
	// if a character other than [0-9a-zA-Z_] appears, the argument is ignored.
	// So let's just accept simple decimal and hexadecimal integers.
	const isIntegerString = /^(0|[1-9]\d*|0x[0-9a-zA-Z]+)$/.test(arg);

	if (isIntegerString) {
		bits = BigInt.asUintN(51, BigInt(arg));
	}

	return floatFromBits(
		// Encode the 64 bits SMMM_MMMM_MMMM_QVVV...VVVV in little endian:
		// The S is the sign bit and can be either 0 or 1. Let's make it 0.
		// The 11 M's are part of the significand field and must be all 1 for NaN.
		// The Q marks is_quiet (since the 2019 revision of IEEE 754) and should be 1.
		// The 51 V's are the NaN value.

		//_octet 7_ _octet 6_ _octet 5_ _octet 4_ _octet 3_ _octet 2_ _octet 1_ _octet 0_
		//SMMM MMMM MMMM QVVV VVVV VVVV VVVV VVVV VVVV VVVV VVVV VVVV VVVV VVVV VVVV VVVV
		0b0111_1111_1111_1000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000n | bits,
	);
}
