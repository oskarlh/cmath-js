// These functions are JavaScript versions of math functions from C (version 2017) and C++ (version 2017)
// They follow the rules for IEEE-754 implementations
// References:
//  C17: https://web.archive.org/web/20181230041359if_/http://www.open-std.org/jtc1/sc22/wg14/www/abq/c17_updated_proposed_fdis.pdf#subsection.13.10.4
//  C++17: http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2017/n4659.pdf
//  IEEE-754:2008 (IEC 60559): http://irem.univ-reunion.fr/IMG/pdf/ieee-754-2008.pdf
//  https://en.cppreference.com/




// Cppreference: https://en.cppreference.com/w/c/numeric/math/nextafter
export function nextafter(/*double*/ num : number, /*double*/ toward : number) : /*double*/ number {
	let result = NaN;
	if(!Number.isNaN(num) && !Number.isNaN(toward)) {
		result = toward;
		if(num !== toward) {
			if(num === Infinity || num === -Infinity) {
				result = Number.MAX_VALUE * Math.sign(num);
			} else if(num === 0) {
				result = Math.sign(toward) * Number.MIN_VALUE;
			} else if(Object.is(num, -Number.MIN_VALUE)) {
				result = -0;
			} else {
				let differenceMultiplier = 0.5 * Math.sign(num) * (num < toward ? 1 : -1);
				do {
					result = num + num * (Number.EPSILON * differenceMultiplier);
					differenceMultiplier *= 2;
				} while(result === num);
			}
		}
		if(toward === num) {
			result = toward;
		}
	}
	return result;
}


// Cppreference: https://en.cppreference.com/w/c/numeric/math/pow
// ECMAScript ** operator: https://www.ecma-international.org/ecma-262/9.0/index.html#sec-applying-the-exp-operator
export function pow(/*double*/ base : number, /*double*/ exponent : number) : /*double*/ number {
	let result = base ** exponent;
	if(base === 1 || (base === -1 && (exponent === Infinity || exponent === -Infinity))) {
		result = 1;
	}
	return result;
}

export function signbit(/*double*/ num : number) : boolean {
	return Object.is(num, -0) || num < 0;
}


// Note: Instead of "double frexp(double arg, int* exp)" this is built as "[double, int] frexp(double arg)" due to ECMAScripts's lack of pointers
// A hypothetical issue with this implementation is that the precision the ** operator is not defined in the ECMAScript standard,
// however, sane ECMAScript implementations should give precise results for 2**<integer> expressions
// Cppreference: http://en.cppreference.com/w/c/numeric/math/frexp for a more detailed description
// Object.is(n, frexp(n)[0] * 2 ** frexp(n)[1]) for all number values of n except when Math.isFinite(n) && Math.abs(n) > 2**1023
// Object.is(n, (2 * frexp(n)[0]) * 2 ** (frexp(n)[1] - 1)) for all number values of n
// Object.is(n, frexp(n)[0]) for these values of n: 0, -0, NaN, Infinity, -Infinity
// Math.abs(frexp(n)[0]) is >= 0.5 and < 1.0 for any other number-type value of n
export function frexp(/*double*/ num : number) : [/*double*/ number, /*int*/ number] {
	const result : [number, number] = [num, 0];

	if(num !== 0 && Number.isFinite(num)) {
		const absNum : number = Math.abs(num);

		let exp : number = Math.max(-1023, Math.floor(Math.log2(absNum)) + 1);
		let x : number = absNum * 2 ** -exp;

		// These while loops compensate for rounding errors that sometimes occur because of ECMAScript's Math.log2's undefined precision
		// and also works around the issue of 2 ** -exp === Infinity when exp <= -1024
		while(x < 0.5) {
			x *= 2;
			--exp;
		}
		while(x >= 1) {
			x *= 0.5;
			++exp;
		}

		if(num < 0) {
			x = -x;
		}
		result[0] = x;
		result[1] = exp;
	}
	return result;
}



// ldexp multiplies a floating-point number by an integral power of 2
// ldexp returns factor * 2**exponent
// C spec: https://web.archive.org/web/20181230041359if_/http://www.open-std.org/jtc1/sc22/wg14/www/abq/c17_updated_proposed_fdis.pdf#subsection.7.12.6
// Cppreference: https://en.cppreference.com/w/c/numeric/math/ldexp
// Implementation is complicated by the need to avoid underflow/overflow given a large exponent (-1075< >1023)
export function ldexp(/*double*/ factor : number, /*int*/ exponent : number) : /*double*/ number {
	const halfPowerRoundedTowardZero : number = 2 ** Math.trunc(exponent * 0.5);
	return factor * halfPowerRoundedTowardZero * halfPowerRoundedTowardZero * 2 ** Math.sign(exponent % 2);
}


// copysign produces a value with the magnitude of 'num' and the sign 'sign'
// Note: ECMAScript does not have negative NaNs
// C spec: https://web.archive.org/web/20181230041359if_/http://www.open-std.org/jtc1/sc22/wg14/www/abq/c17_updated_proposed_fdis.pdf#subsection.7.12.11
// Cppreference: https://en.cppreference.com/w/c/numeric/math/copysign
// The implementation is complicated by the need to handle positive and negative zero
export function copysign(/*double*/ num : number, /*double*/ sign : number) : /*double*/ number {
	return Math.abs(num) * (Object.is(0 * Math.sign(sign), -0) ? -1 : 1);
}

// fabs is just like JavaScript's Math.abs
// Cppreference: https://en.cppreference.com/w/c/numeric/math/fabs
export function fabs(/*double*/ num : number) : /*double*/ number {
	return Math.abs(num);
}

// abs is like fabs but for integers
// Cppreference: https://en.cppreference.com/w/c/numeric/math/abs
export function abs(/*int*/ num : number) : /*int*/ number {
	return Math.abs(num);
}


// hypot computes the square root of the sum of the squares of x and y, without undue overflow or underflow
// This implementation allows an optional third argument, as specified in the C++ standard
// C spec: https://web.archive.org/web/20181230041359if_/http://www.open-std.org/jtc1/sc22/wg14/www/abq/c17_updated_proposed_fdis.pdf#subsection.7.12.7
// C spec: https://web.archive.org/web/20181230041359if_/http://www.open-std.org/jtc1/sc22/wg14/www/abq/c17_updated_proposed_fdis.pdf#subsection.13.10.4
// C++ spec for 3-arg version: http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2017/n4659.pdf#subsection.29.9.3
// Cppreference C version (limited to 2 args): https://en.cppreference.com/w/c/numeric/math/hypot
// Cppreference C++ version (2 or 3 args): https://en.cppreference.com/w/cpp/numeric/math/hypot
// ECMAScript's Math.hypot: https://www.ecma-international.org/ecma-262/9.0/index.html#sec-math.hypot
// Complicated by the requirements for implementations for IEC 60559 floating-point environments, which thankfully only apply to the 2-arg (C) version
export function hypot(/*double*/ x : number, /*double*/ y : number, /*double*/ z ?: number) : number {
	let result : number = 0;
	if(z !== undefined) {
		result = Math.hypot(x, y, z);
	} else {
		result = Infinity;
		if(x !== Infinity && x !== -Infinity && y !== Infinity && y !== -Infinity) {
			if(x === 0 || y === 0) {
				result = Math.max(Math.abs(x), Math.abs(y));
			} else {
				result = Math.hypot(x, y);
			}
		}
	}
	return result;
}





/*
	// C's IEEE-754 sqrt differs from ECMAScript's Math.sqrt in that it is guaranteed to be precise
	// Cppreference: https://en.cppreference.com/w/c/numeric/math/sqrt
	// ECMAScript ** operator: https://www.ecma-international.org/ecma-262/9.0/index.html#sec-math.sqrt
	export function sqrt(double num : number) : double number {
		let result = Math.sqrt(num);
		if(num > 0 && num !== Infinity) {
			if(result === Infinity || result <= 0) { // Extremely unlikely, but since the precision is undefined in ECMAScript...
				result = 1;
			}
			//BUG!! num < 1!!!!!!!!!!!!!!!
			while((result * 0.5) * (result * 0.5) > num) {
				result *= 0.5;
			}
			while((result * 2) * (result * 2) < num) {
				result *= 2;
			}
			while((result * 67108863/67108864) * (result * 67108863/67108864) > num) {
				result *= (result * 67108863/67108864);
			}
			
			let suboptimal = false;
			let closestNumber = result;
			let direction = result * result < num ? Infinity : -Infinity;
			do {
				result = closestNumber;
				closestNumber = nextafter(result, direction);
				let imprecision = Math.abs(num - result * result);
				let closestNumberImprecision = Math.abs(num - closestNumber * closestNumber);
				suboptimal = imprecision > closestNumberImprecision || (imprecision === closestNumberImprecision && ((frexp(result)[0] * 0x20000000000000) & 1) === 1);
				console.log(result + "\r\n" + closestNumber + "\r\n" + imprecision + "\r\n" + closestNumberImprecision + " " + suboptimal);
			} while(suboptimal);
		}
		return result;
	}
*/

