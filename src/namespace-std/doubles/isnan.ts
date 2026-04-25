/**
 * `isnan()` is just like JavaScript's `Number.isNaN()`
 *
 * Read more about the original function here:
 * - {@link https://en.cppreference.com/c/numeric/math/isnan|Cppreference}
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsubsection.7.12.3.5|The C23 final draft specification}
 */
export const isnan: (number: number) => boolean = Number.isNaN;
