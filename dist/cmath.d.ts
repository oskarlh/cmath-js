export declare function nextafter(/*double*/ num: number, /*double*/ toward: number): number;
export declare function pow(/*double*/ base: number, /*double*/ exponent: number): number;
export declare function signbit(/*double*/ num: number): boolean;
export declare function frexp(/*double*/ num: number): [/*double*/ number, /*int*/ number];
export declare function ldexp(/*double*/ factor: number, /*int*/ exponent: number): number;
export declare function copysign(/*double*/ num: number, /*double*/ sign: number): number;
export declare const fabs: (x: number) => number;
export declare const abs: (x: number) => number;
export declare function hypot(/*double*/ x: number, /*double*/ y: number, /*double*/ z?: number): number;
