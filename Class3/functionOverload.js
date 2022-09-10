function createDate(timestampMonth, day, year) {
    if (day === undefined || year === undefined) {
        return new Date(timestampMonth);
    }
    else {
        return new Date(year, timestampMonth, day);
    }
}
console.log(createDate(1231231));
console.log(createDate(7, 27, 1979));
function add(first, second, third, forth) {
    if (third === undefined && forth === undefined)
        return first + second;
    else if (third !== undefined && forth == undefined)
        return first + second + third;
    else if (third !== undefined && forth !== undefined)
        return first + second + third + forth;
}
console.log(add(20, 30));
console.log(add(20, 30, 40));
console.log(add(20, 30, 40, 50));
