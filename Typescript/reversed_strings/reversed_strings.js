"use strict";
/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/
function solution(str) {
    let revstr = "";
    for (let char of str) {
        revstr = char + revstr;
    }
    return revstr;
}
//# sourceMappingURL=reversed_strings.js.map