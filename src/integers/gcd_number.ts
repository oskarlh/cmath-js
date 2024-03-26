export function gcd_number(aInteger: number, bInteger: number): number {
	if (!Number.isSafeInteger(aInteger) || !Number.isSafeInteger(bInteger)) {
		return 0;
	}

	let a = Math.abs(aInteger);
	let b = Math.abs(bInteger);
	if (!a || !b) {
		return a || b;
	}

	let trailingZeroesInA = 0;
	while (a && !(a & 1)) {
		a /= 2;
		trailingZeroesInA += 1;
	}
	let trailingZeroesInB = 0;
	while (b && !(b & 1)) {
		b /= 2;
		trailingZeroesInB += 1;
	}

	while (true) {
		if (a > b) {
			[a, b] = [b, a];
		}
		b -= a;
		if (!b) {
			return a << Math.min(trailingZeroesInA, trailingZeroesInB);
		}
		while (b && !(b & 1)) {
			b /= 2;
		}
	}
}
