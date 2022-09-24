export {};

function add(a:number,b:number):[string,number]{
    return ['Sum of',a+b];
}

console.log(add(39,40));

let [label,result] = add(40,20);
//label = "AABC";


const [label1,result1] = add(40,20);
//label1 = label; //error generated

console.log(`${label} return result is ${result}`);



const days=['Sun','Mon','Tue'];
days[0]='Wed';
console.log(days);

//readonly
const workingDays=['Sun','Mon','Tue'] as const;
//workingDays[0]='Fri'; error

console.log(workingDays)
