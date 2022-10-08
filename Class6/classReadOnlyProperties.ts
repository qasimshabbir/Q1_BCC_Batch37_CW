export {};

class Person{
    private name:string;
    private age:number;
    readonly noOfHands:number;
    readonly noOfFace=1;
    
    constructor(name:string,age:number){
        this.name=name;
        this.age = age;
        this.noOfHands = 2;
    }
    
    showPerson(){
        
        console.log(`ShowPerson: ${this.name} is ${this.age} years old`);
    }
    showPersons = ()=>{
        console.log(`ShowPersons: ${this.name} is ${this.age} years old`);
    }
}
const ali = new Person("Ali",23);
ali.showPerson();
ali.showPersons();
