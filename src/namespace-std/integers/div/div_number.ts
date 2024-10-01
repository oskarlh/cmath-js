export interface div_t_number {
	quot: number;
	rem: number;
}
export function div_number(aInteger: number, bInteger: number): div_t_number {
	// The || 0 are here for two reasons:
	// 1) To change a - 0 into a 0, since standard C / C++ ints lack the negative zero value
	// 2) To change rem=NaN to rem=0, in case bInteger is 0 or -0. Division by 0 is undefined
	//    behaviour in C++, but we handle it anyway

	let quot = Math.trunc(aInteger / bInteger) || 0;
	if (!Number.isFinite(quot)) {
		quot = 0;
	}

	return {
		quot,
		rem: aInteger % bInteger || 0,
	};
}
