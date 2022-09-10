"use strict";
const doAdd = (left, right) => {
    if (typeof left === 'number' && typeof right === 'number') {
        let result = left + right;
        return result;
    }
    else {
        let result = +left + +right;
        return result;
    }
};
doAdd(20, 30);
doAdd("20", "40");
