/**
 * isFinite is just like JavaScript's Number.isFinite
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/c/numeric/math/isfinite|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsubsection.7.12.3.3|The C23 final draft specification}
 */
export const isfinite: (number: number) => boolean = Number.isFinite;
