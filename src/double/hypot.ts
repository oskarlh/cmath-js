// hypot computes the square root of the sum of the squares of x and y, without undue overflow or underflow
// This implementation allows an optional third argument, as specified in the C++ standard
// C spec: https://web.archive.org/web/20181230041359if_/http://www.open-std.org/jtc1/sc22/wg14/www/abq/c17_updated_proposed_fdis.pdf#subsection.7.12.7
// C spec: https://web.archive.org/web/20181230041359if_/http://www.open-std.org/jtc1/sc22/wg14/www/abq/c17_updated_proposed_fdis.pdf#subsection.13.10.4
// C++ spec for 3-arg version: https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2017/n4659.pdf#subsection.29.9.3
// Cppreference C version (limited to 2 args): https://en.cppreference.com/w/c/numeric/math/hypot
// Cppreference C++ version (2 or 3 args): https://en.cppreference.com/w/cpp/numeric/math/hypot
// ECMAScript's Math.hypot: https://www.ecma-international.org/ecma-262/9.0/index.html#sec-math.hypot
// Complicated by the requirements for implementations for IEC 60559 floating-point environments, which thankfully only apply to the 2-arg (C) version
export function hypot(/*double*/ x: number, /*double*/ y: number, /*double*/ z?: number): number {
	let result: number = 0;
	if (z !== undefined) {
		result = Math.hypot(x, y, z);
	} else {
		result = Infinity;
		if (x !== Infinity && x !== -Infinity && y !== Infinity && y !== -Infinity) {
			if (x === 0 || y === 0) {
				result = Math.max(Math.abs(x), Math.abs(y));
			} else {
				result = Math.hypot(x, y);
			}
		}
	}
	return result;
}
