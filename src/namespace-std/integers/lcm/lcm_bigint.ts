import { gcd_bigint } from "../gcd/index.js";

export function lcm_bigint(aInteger: bigint, bInteger: bigint): bigint {
	const a = aInteger < 0n ? -aInteger : aInteger;
	const b = bInteger < 0n ? -bInteger : bInteger;
	const divisor = gcd_bigint(a, b);

	if (divisor === 0n) {
		return 0n;
	}

	return a * (b / divisor);
}
