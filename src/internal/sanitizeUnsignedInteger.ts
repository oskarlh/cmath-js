import { sanitizeSmallUnsignedInteger } from "./index.js";

export function sanitizeUnsignedInteger(someNumber: number | bigint): bigint {
	if (typeof someNumber === "bigint") {
		if (someNumber < 0n) {
			return 0n;
		}
		return someNumber;
	}
	return BigInt(sanitizeSmallUnsignedInteger(someNumber));
}
