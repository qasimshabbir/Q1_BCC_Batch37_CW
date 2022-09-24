"use strict";
//function type variable that returns array type.
let showTable; //type define
let showTables = () => {
    return [20, 302, 230];
};
showTable = () => [2, 4, 8, 10, 12]; //function define
let results = showTable(); //execute
console.log(results);
showTable = () => [3, 6, 9, 12, 15];
results = showTable(); //execute
console.log(results);
//Array of function type
let calc = [];
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
calc.push(add);
calc.push(subtract);
calc.push(multiply);
calc.push((a, b) => a / b);
console.log(calc[0](20, 30)); //add 50
console.log(calc[1](60, 20)); //subtract 40
console.log("For loop");
for (let i = 0; i < calc.length; i++) {
    console.log(calc[i](40, 30));
}
// iterator method ( callback )
console.log("For EAch Iterator");
calc.forEach(method => console.log(method(23, 30)));
