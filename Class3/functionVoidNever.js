"use strict";
let result;
function addOnResult(left, right) {
    if (left === undefined || right === undefined) {
        return;
    }
    else if (typeof left === 'number' && typeof right === 'number') {
        result = left + right;
    }
    else {
        result = undefined;
    }
}
function printResult() {
    console.log(result);
}
addOnResult();
printResult();
addOnResult(20, 30);
printResult();
addOnResult("20", "30");
printResult();
function neverReturned() {
    throw new Error("ERROR");
}
