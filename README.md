# cmath-js
Implementations of some of C's math functions in TypeScript/JavaScript.

## Floating-point functions 
- [`copysign`](https://en.cppreference.com/w/c/numeric/math/copysign)
- [`fabs`](https://en.cppreference.com/w/c/numeric/math/fabs)
- [`frexp`](http://en.cppreference.com/w/c/numeric/math/frexp)
- [`hypot`](https://en.cppreference.com/w/cpp/numeric/math/hypot)¹
- [`ldexp`](https://en.cppreference.com/w/c/numeric/math/ldexp)
- [`nextafter`](https://en.cppreference.com/w/c/numeric/math/nextafter)
- [`pow`](https://en.cppreference.com/w/c/numeric/math/pow)
- [`signbit`](https://en.cppreference.com/w/c/numeric/math/signbit)

### Notes
1: `hypot` is the C++ version which works just like the C version but accepts an optional third value.

## Integer functions
This function accepts either a `number` or a `bigint`:
- [`abs`](https://en.cppreference.com/w/c/numeric/math/abs)

## Test coverage
The test coverage is a perfect 100% and enforced by the publishing and pull request verification workflows.

## Contributing
Contributions are welcomed! Feel free to make a pull request. Please add your name to `contributors` in `package.json` and run `npm run build-and-verify` before submitting your PR. By making a pull request you agree to license your contribution under [the CC0 license](https://creativecommons.org/publicdomain/zero/1.0/legalcode.en#legal-code-title) unless otherwise specified.

ESLint is used to enforce code quality and consistent formatting (with the help of Prettier). If ESLint complains when you run `npm run build-and-verify`, you can run `npm run lint-fix` to apply automatic fixes and and then fix the rest of the errors manually. I recommend configuring your IDE for ESLint and Prettier. If you are using Visual Studio Code, simply installing [Microsoft's ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [the official Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) takes care of that.
