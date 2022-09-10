"use strict";
function add(left, right) {
    if (typeof left === 'number' && typeof right === 'number') {
        let result = left + right;
        return result;
    }
    else {
        let result = +left + +right;
        return result;
    }
}
console.log(add("20", "30"));
console.log(add(20, 30));
