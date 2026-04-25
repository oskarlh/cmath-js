import { gcd_bigint } from "./gcd_bigint.ts";
import { gcd_number } from "./gcd_number.ts";

/**
 * Finds the greatest common divisor. If one of the parameters is zero,
 * the absolute value of the other parameter is returned.
 * Expects safe integers (bigints or numbers for which Number.isSafeInteger() returns true)
 *
 * This implementation uses {@link https://en.wikipedia.org/wiki/Binary_GCD_algorithm|the binary GCD algorithm}.
 *
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/cpp/numeric/gcd|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2023/n4928.pdf#subsection.27.10.14|The C++23 final draft specification}
 **/
export function gcd(aInteger: bigint, bInteger: bigint): bigint;
export function gcd(aInteger: number, bInteger: number): number;
export function gcd(aInteger: bigint | number, bInteger: bigint | number): bigint | number {
	return typeof aInteger === "number"
		? gcd_number(aInteger, bInteger as number)
		: gcd_bigint(aInteger, bInteger as bigint);
}
