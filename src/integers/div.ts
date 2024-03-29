import { div_bigint, type div_t_bigint } from "./div_bigint";
import { div_number, type div_t_number } from "./div_number";

export { type div_t_bigint };
export { type div_t_number };

export function div(aInteger: bigint, bInteger: bigint): div_t_bigint;
export function div(aInteger: number, bInteger: number): div_t_number;
export function div(
	aInteger: bigint | number,
	bInteger: bigint | number,
): div_t_bigint | div_t_number {
	return typeof aInteger === "number"
		? div_number(aInteger, bInteger as number)
		: div_bigint(aInteger, bInteger as bigint);
}
