import { gcd_bigint } from "./gcd_bigint";

export function lcm_bigint(aInteger: bigint, bInteger: bigint): bigint {
	const a = aInteger < 0n ? -aInteger : aInteger;
	const b = bInteger < 0n ? -bInteger : bInteger;
	const denominator = gcd_bigint(a, b);

	if (denominator === 0n) {
		return 0n;
	}

	return a * (b / denominator);
}
