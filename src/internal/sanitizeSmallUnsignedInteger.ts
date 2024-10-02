export function sanitizeSmallUnsignedInteger(someNumber: number): number {
	if (Number.isInteger(someNumber) && someNumber > 0) {
		return someNumber;
	}
	return 0;
}
