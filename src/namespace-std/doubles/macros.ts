// From https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf#section.7.12
export const FP_INFINITE = 0;
export const FP_NAN = 1;
export const FP_NORMAL = 2;
export const FP_SUBNORMAL = 3;
export const FP_ZERO = 4;

export type FPClassification =
	| typeof FP_INFINITE
	| typeof FP_NAN
	| typeof FP_NORMAL
	| typeof FP_SUBNORMAL
	| typeof FP_ZERO;
