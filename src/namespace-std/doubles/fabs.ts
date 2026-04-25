/**
 * `fabs()` is just like JavaScript's `Math.abs()`.
 *
 * Read more about the original function here:
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsubsection.7.12.7.3|The C23 final draft specification, chapter 7}
 * - {@link https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#subsubsection.13.10.4.3|The C23 final draft specification, annex F}
 */

export const fabs: (number: number) => number = Math.abs;
