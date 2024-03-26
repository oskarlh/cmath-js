// Finds the greatest common denominator calculated using the
// binary GCD algorithm: https://en.wikipedia.org/wiki/Binary_GCD_algorithm
// Cppreference: https://en.cppreference.com/w/cpp/numeric/gcd
// If one of the parameters is zero, the absolute value of the other parameter is returned
// Expects safe integers (bigints or numbers for which Number.isSafeInteger() returns true)

import { gcd_bigint } from "./gcd_bigint";
import { gcd_number } from "./gcd_number";

export function gcd(aInteger: bigint, bInteger: bigint): bigint;
export function gcd(aInteger: number, bInteger: number): number;
export function gcd(aInteger: bigint | number, bInteger: bigint | number): bigint | number {
	return typeof aInteger === "number"
		? gcd_number(aInteger, bInteger as number)
		: gcd_bigint(aInteger, bInteger as bigint);
}
