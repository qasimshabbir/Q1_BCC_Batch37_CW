export {};
let person: number[] = [20.545,30.25,40]; //js way
let cities: string[] = ['Karachi','Lahore','Islamabad']; //typescript
let countries: Array<string> = ['Pakistan','India','Iran'];

let CityCont = [...cities,...countries];
let CityPop = [...cities,...person];

//let [,,CountryIran] = ...countries;

console.log(CityCont);
console.log(CityPop);
