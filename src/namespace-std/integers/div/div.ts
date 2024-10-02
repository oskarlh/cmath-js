import { div_bigint, type div_t_bigint } from "./div_bigint.js";
import { div_number, type div_t_number } from "./div_number.js";

type AnyInteger = bigint | number;

export type div_t<NumType extends AnyInteger = AnyInteger> = (NumType extends bigint
	? div_t_bigint
	: div_t_number) &
	(NumType extends number ? div_t_number : div_t_bigint);

export function div(aInteger: bigint, bInteger: bigint): div_t_bigint;
export function div(aInteger: number, bInteger: number): div_t_number;
export function div<NumType extends AnyInteger>(aInteger: NumType, bInteger: NumType) {
	return typeof aInteger === "number"
		? div_number(aInteger, bInteger as number)
		: div_bigint(aInteger, bInteger as bigint);
}
