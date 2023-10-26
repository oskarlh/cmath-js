// Count the total number of 1 bits in an unsigned integer
// Cppreference: https://en.cppreference.com/w/cpp/numeric/popcount
export function popcount(integer: bigint | number): number {
	if (integer <= 0 || (typeof integer === "number" && !Number.isInteger(integer))) {
		return 0;
	}
	let count = 0;
	for (const digit of BigInt(integer).toString(2)) {
		count += Number(digit);
	}
	return count;
}
