"use strict";
/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
Examples

n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/
powersOfTwo(1);
function powersOfTwo(n) {
    const newAr = [];
    for (let i = 0; i <= n; i++) {
        newAr.push(Math.pow(2, 2));
    }
    console.log(newAr);
    return newAr;
}
//# sourceMappingURL=hello.js.map