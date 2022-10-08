export {};

class Person{
    private name!:string;
    private age!:number;
    
    
    init(name:string,age:number){
        this.name=name;
        this.age = age;
    }
    showPerson(){
        console.log(`ShowPerson: ${this.name} is ${this.age} years old`);
    }
    showPersons = ()=>{
        console.log(`ShowPersons: ${this.name} is ${this.age} years old`);
    }
}
const ali = new Person();
ali.init("Ali",23);
ali.showPerson();

ali.showPersons();
