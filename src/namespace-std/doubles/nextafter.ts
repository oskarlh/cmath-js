/**
 * Determines the next representable value after `num` in the direction of `toward`
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference/numeric/math/nextafter|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsection.7.12.11|The C23 final draft specification}
 *
 * @returns The next representable value after `num` in the direction of `toward`
 */
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
