import { lcm_bigint } from "./lcm_bigint.ts";
import { lcm_number } from "./lcm_number.ts";

/**
 * Finds the least common mulitple
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/cpp/numeric/lcm|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2023/n4928.pdf#subsection.27.10.15|The C++23 final draft specification}
 **/
export function lcm(aInteger: bigint, bInteger: bigint): bigint;
export function lcm(aInteger: number, bInteger: number): number;
export function lcm(aInteger: bigint | number, bInteger: bigint | number): bigint | number {
	return typeof aInteger === "number"
		? lcm_number(aInteger, bInteger as number)
		: lcm_bigint(aInteger, bInteger as bigint);
}
