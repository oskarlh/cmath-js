import { gcd_number } from "./gcd_number";

export function lcm_number(aInteger: number, bInteger: number): number {
	if (!Number.isSafeInteger(aInteger) || !Number.isSafeInteger(bInteger)) {
		return 0;
	}

	const a = Math.abs(aInteger);
	const b = Math.abs(bInteger);

	const denominator = gcd_number(a, b);

	if (denominator === 0) {
		return 0;
	}

	return a * (b / denominator);
}
