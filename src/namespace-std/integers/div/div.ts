import { div_bigint, type div_t_bigint } from "./div_bigint.ts";
import { div_number, type div_t_number } from "./div_number.ts";

type AnyInteger = bigint | number;

export type div_t<NumType extends AnyInteger = AnyInteger> = (NumType extends bigint
	? div_t_bigint
	: div_t_number) &
	(NumType extends number ? div_t_number : div_t_bigint);

/**
 * Computes the quotient and the remainder of a division.
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/c/numeric/math/div|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsubsection.7.24.6.2|The C23 final draft specification}
 **/
export function div(aInteger: bigint, bInteger: bigint): div_t_bigint;
export function div(aInteger: number, bInteger: number): div_t_number;
export function div<NumType extends AnyInteger>(aInteger: NumType, bInteger: NumType) {
	return typeof aInteger === "number"
		? div_number(aInteger, bInteger as number)
		: div_bigint(aInteger, bInteger as bigint);
}
