// Finds the least common mulitple
// Cppreference: https://en.cppreference.com/w/cpp/numeric/lcm

import { lcm_bigint } from "./lcm_bigint.js";
import { lcm_number } from "./lcm_number.js";

export function lcm(aInteger: bigint, bInteger: bigint): bigint;
export function lcm(aInteger: number, bInteger: number): number;
export function lcm(aInteger: bigint | number, bInteger: bigint | number): bigint | number {
	return typeof aInteger === "number"
		? lcm_number(aInteger, bInteger as number)
		: lcm_bigint(aInteger, bInteger as bigint);
}
