// Fills an array with sequentially increasing values
// Cppreference: https://en.cppreference.com/w/c/numeric/math/iota

export function iota(mut_arrayToFill: bigint[], startValue: bigint): void;
export function iota(mut_arrayToFill: number[], startValue: number): void;
export function iota(mut_arrayToFill: (bigint | number)[], startValue: bigint | number): void {
	mut_arrayToFill.fill(startValue); // In case there are empty array elements
	let value = startValue;
	for (const index of mut_arrayToFill.keys()) {
		mut_arrayToFill[index] = value++;
	}
}
