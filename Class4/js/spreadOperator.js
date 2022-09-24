"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person = [20.545, 30.25, 40]; //js way
let cities = ['Karachi', 'Lahore', 'Islamabad']; //typescript
let countries = ['Pakistan', 'India', 'Iran'];
let CityCont = [...cities, ...countries];
let CityPop = [...cities, ...person];
//let [,,CountryIran] = ...countries;
console.log(CityCont);
console.log(CityPop);
