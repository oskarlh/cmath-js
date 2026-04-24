/**
 * Checks if a floating-point number is canonical. In JavaScript, they always are.
 *
 * Read more about the original function here:
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsection.7.12.3|The C23 final draft specification}
 *
 * @returns Always `true`, because the IEEE-754 binary floating-point types have no non-canonical value representations
 */
export function iscanonical(_number: number): boolean {
	return true;
}
