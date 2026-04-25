import { bit_ceil_bigint } from "./bit_ceil_bigint.ts";
import { bit_ceil_number } from "./bit_ceil_number.ts";

/**
 * Rounds an unsigned integer up to the nearest power of two
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/cpp/numeric/bit_ceil|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2023/n4928.pdf#subsection.22.15.5|The C++23 final draft specification}
 **/
export function bit_ceil<Integer extends bigint | number>(integer: Integer): Integer {
	return typeof integer === "number"
		? (bit_ceil_number(integer) as Integer)
		: (bit_ceil_bigint(integer) as Integer);
}
