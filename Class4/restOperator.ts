export {};
let person: number[] = [20.545,30.25,40]; //js way
let cities: string[] = ['Karachi','Lahore','Islamabad']; //typescript
let countries: Array<string> = ['Pakistan','India','Iran'];

function sum(...nos:number[]){
    return nos.reduce((total,no)=>total+no);
}

console.log(sum(23,34,23,423,23,42,32,23,234));
