class Animal{
    showAnimal(){
        console.log("Animal Class");
    }
}
const aAnimal = new Animal()//default constrcutor
aAnimal.showAnimal(); 



new Animal().showAnimal(); 

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
const ali = new Person("Ali",23);
const shahid = new Person("Shahid",60);
const umair  = new Person("Umair",16);
ali.showPerson();
shahid.showPerson();
umair.showPerson();

ali.showPersons();
shahid.showPersons();
umair.showPersons();