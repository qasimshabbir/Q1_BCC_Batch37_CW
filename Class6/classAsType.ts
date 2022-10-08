export {}
class Person{
    private name:string;
    private age:number;
    
    constructor(name:string,age:number){
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
const addAsDriver = (driver:Person)=>{
    driver.showPerson();
}


const ali = new Person("Ali",23);
addAsDriver(ali);
