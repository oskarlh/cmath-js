import { bit_floor_bigint } from "./bit_floor_bigint.ts";
import { bit_floor_number } from "./bit_floor_number.ts";

/**
 * Rounds an unsigned integer down to the nearest power of two
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/cpp/numeric/bit_floor|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2023/n4928.pdf#subsection.22.15.5|The C++23 final draft specification}
 **/
export function bit_floor<Integer extends bigint | number>(integer: Integer): Integer {
	return typeof integer === "number"
		? (bit_floor_number(integer) as Integer)
		: (bit_floor_bigint(integer) as Integer);
}
