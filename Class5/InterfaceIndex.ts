export {};

interface Person{
    [a: string]: string|number|Date|boolean|undefined; //SuperSet defination
    name:string;
    age: number;
    dob: Date;
    gender: "Male"|"Female"; //literal type
}

const Man:Person = {
    name: "Qasim",
    age: 223,
    dob: new Date(),
    gender:"Male"
};
Man.address = '503, Flooor'; //dynamic
Man.country = 'Pakistan';


console.log(Man);

interface calc{
    [i:string]:number|Function; //index property
    add():number; //method
    subtract():number; //method
    add1: (a:number,b:number)=>number; //property function type
}
const calculator: calc = {
    add(){
        if(typeof this.a === 'number' && typeof this.b === 'number' )
            return (this.a+this.b);
        else{
            return 0;
        }
    },
    subtract(){
        if(typeof this.left === 'number' && typeof this.right === 'number' )
            return this.left-this.right;
        else
            return 0;
    },
    add1: (a,b) => a +b
}
//calculator.ShowString = 'Hello Calc';
calculator.a= 30
calculator.b = 40
calculator.left= 40;
calculator.right=90;
calculator.multiply = (a:number,b:number)=>a*b;
///calculator.add = ()=>this.left+calculator.right+200;
calculator.add1 = (a,b)=> a+b+200;

console.log(calculator.add(),calculator.subtract());
console.log(calculator.add1(23,23));
console.log(calculator.multiply(40,30));