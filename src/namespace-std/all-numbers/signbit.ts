import { floatOctets } from "../../internal/index.js";

// Cppreference: https://en.cppreference.com/w/c/numeric/math/signbit
export function signbit(num: bigint | number): boolean {
	return floatOctets(Number(num))[7] > 127;
}
