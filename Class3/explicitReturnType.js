"use strict";
function add(left, right) {
    if (typeof left === 'number' && typeof right === 'number') {
        let result = left + right;
        return result;
    }
    else if (typeof left === 'string' && typeof right === 'string') {
        let result = left + ' ' + right;
        return result;
    }
    else {
        return undefined;
    }
}
console.log(add("20", "30"));
console.log(add(20, 30));
console.log(add("20"));
