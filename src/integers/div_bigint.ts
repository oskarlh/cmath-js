export interface div_t_bigint {
	quot: bigint;
	rem: bigint;
}

export function div_bigint(aInteger: bigint, bInteger: bigint): div_t_bigint {
	// Division by 0n throws. Let's avoid that.
	// Division by 0 is undefined behaviour in C++, but we handle it anyway.
	if (bInteger === 0n) {
		return {
			quot: 0n,
			rem: 0n,
		};
	}

	return {
		quot: aInteger / bInteger,
		rem: aInteger % bInteger,
	};
}
