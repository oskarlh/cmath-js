export function gcd_bigint(aInteger: bigint, bInteger: bigint): bigint {
	let a = aInteger < 0n ? -aInteger : aInteger;
	let b = bInteger < 0n ? -bInteger : bInteger;

	if (!a || !b) {
		return a || b;
	}

	let trailingZeroesInA = 0;
	while (a && !(a & 1n)) {
		a >>= 1n;
		trailingZeroesInA += 1;
	}
	let trailingZeroesInB = 0;
	while (b && !(b & 1n)) {
		b >>= 1n;
		trailingZeroesInB += 1;
	}

	while (true) {
		if (a > b) {
			[a, b] = [b, a];
		}
		b -= a;
		if (!b) {
			return a << BigInt(Math.min(trailingZeroesInA, trailingZeroesInB));
		}
		while (b && !(b & 1n)) {
			b >>= 1n;
		}
	}
}
