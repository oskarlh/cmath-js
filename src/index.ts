// These functions are JavaScript versions of math functions from C and C++
// They follow the rules for IEEE-754 implementations.
// References:
//  C17: https://web.archive.org/web/20181230041359if_/http://www.open-std.org/jtc1/sc22/wg14/www/abq/c17_updated_proposed_fdis.pdf#subsection.13.10.4
//  C++17: https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2017/n4659.pdf
//  IEEE-754:2008 (IEC 60559): https://irem.univ-reunion.fr/IMG/pdf/ieee-754-2008.pdf
//  https://en.cppreference.com/
// When reading this code it's important to remember that 0 === -0, but Object.is(0, -0) === false

export * from "./all-numbers/index.js";
export * from "./doubles/index.js";
export * from "./integers/index.js";
