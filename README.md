# cmath-js
Implementation of parts of C's & C++'s numerics libraries in TypeScript/JavaScript.

## Floating-point functions
- [`copysign`](https://en.cppreference.com/w/c/numeric/math/copysign)
- [`fabs`](https://en.cppreference.com/w/c/numeric/math/fabs)
- [`frexp`](https://en.cppreference.com/w/c/numeric/math/frexp)
- [`hypot`](https://en.cppreference.com/w/cpp/numeric/math/hypot)
- [`ldexp`](https://en.cppreference.com/w/c/numeric/math/ldexp)
- [`nan`](https://en.cppreference.com/w/c/numeric/math/nan)
- [`nextafter`](https://en.cppreference.com/w/c/numeric/math/nextafter)
- [`pow`](https://en.cppreference.com/w/c/numeric/math/pow)

## Integer functions
These functions accept either a `bigint` or an integer `number`:
- [`abs`](https://en.cppreference.com/w/c/numeric/math/abs)
- [`countl_one`](https://en.cppreference.com/w/cpp/numeric/countl_one) as `create_countl_one`, which is used this way:
	```ts
	import { create_countl_one } from "cmath-js";
	const countl_one_u16 = create_countl_one({ bits: 16 });
	const integer = 0xF0_00;
	// Prints "1111000000000000 has 4 leading one bits."
	console.log(`${integer.toString(2).padStart(16, "0")} has ${countl_one_u16(integer)} leading one bits.`);
	```
- [`countl_zero`](https://en.cppreference.com/w/cpp/numeric/countl_zero) as `create_countl_zero`
- [`countr_one`](https://en.cppreference.com/w/cpp/numeric/countr_one) as `create_countr_one`
- [`countr_zero`](https://en.cppreference.com/w/cpp/numeric/countr_zero) as `create_countr_zero`
- [`div`](https://en.cppreference.com/w/cpp/numeric/math/div)
- [`gcd`](https://en.cppreference.com/w/cpp/numeric/gcd). Example:
	```ts
	import { gcd } from "cmath-js";
	// Prints "The greatest common divisor of 24 and 32 is 8."
	console.log(`The greatest common divisor of 24 and 32 is ${gcd(24, 32)}.`);
	```
- [`lcm`](https://en.cppreference.com/w/cpp/numeric/lcm)
- [`popcount`](https://en.cppreference.com/w/cpp/numeric/popcount)

## Functions for both floats and ints
- [`iota`](https://en.cppreference.com/w/cpp/algorithm/iota)
- [`signbit`](https://en.cppreference.com/w/c/numeric/math/signbit)

## Mathematical constants
- Constants in [the `std::numbers` namespace](https://en.cppreference.com/w/cpp/numeric/constants) are available from the `numbers.js` subpath export. Example:
	```ts
	import { sqrt3 } from "cmath-js/numbers.js";
	console.log(`The square root of 3 is ${sqrt3}.`);
	```

## Test coverage
The test coverage is a perfect 100% and enforced by the publishing and pull request verification workflows.

## Contributing
Contributions are welcomed! Feel free to make a pull request. Please add your name to `contributors` in `package.json` and run `npm run build-and-verify` before submitting your PR. By making a pull request you agree to license your contribution under [the CC0 license](https://creativecommons.org/publicdomain/zero/1.0/legalcode.en#legal-code-title) unless otherwise specified.

ESLint is used to enforce code quality and consistent formatting (with the help of Prettier). If ESLint complains when you run `npm run build-and-verify`, you can run `npm run lint-fix` to apply automatic fixes and then fix the rest of the errors manually. I recommend configuring your IDE for ESLint and Prettier. If you are using Visual Studio Code, simply installing [Microsoft's ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [the official Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) takes care of that.
