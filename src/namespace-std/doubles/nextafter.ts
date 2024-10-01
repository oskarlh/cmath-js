// Cppreference: https://en.cppreference.com/w/c/numeric/math/nextafter
export function nextafter(/*double*/ num: number, /*double*/ toward: number): /*double*/ number {
	if (num === toward) {
		return toward;
	}
	if (num === 0) {
		return Math.sign(toward) * Number.MIN_VALUE;
	}
	if (num === Infinity || num === -Infinity) {
		return Number.MAX_VALUE * Math.sign(num);
	}
	if (num === -Number.MIN_VALUE && toward > num) {
		return -0;
	}
	let differenceMultiplier = 0.5 * Math.sign(num) * (num < toward ? 1 : -1);
	let result: number;
	do {
		result = num + num * (Number.EPSILON * differenceMultiplier);
		differenceMultiplier *= 2;
	} while (result === num);
	return result;
}
