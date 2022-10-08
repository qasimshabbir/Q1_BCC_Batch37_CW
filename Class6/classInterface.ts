export {};
interface Species{
    noOfHands:number;
    noOfLegs:number;
    name:string;
    print():void;
}
interface SeaSpecies{
    noOfFins:number;
    waterType:"Salt"|"River";
    type:"Mamel"|"Fish";
}
class Whales implements Species,SeaSpecies{
    noOfFins:number;
    waterType:"Salt"|"River";
    type:"Mamel"|"Fish";
    noOfHands:number = 0;
    noOfLegs:number = 0;
    name:string;

    constructor(name:string,fins:number,wtType:"Salt"|"River",type:"Mamel"|"Fish"){
        this.name=name;
        this.noOfFins = fins;
        this.waterType = wtType;
        this.type = type;
    }
    print(): void {
        console.log(`This is whale ${this.name}`);
    }
}
new Whales("Blue Whale",2,"Salt","Mamel").print();

class Animal implements Species{
    noOfHands: number;
    noOfLegs:number;
    name:string;
    skinType:string;
    constructor(name:string,legs:number,hands:number){
        this.name=name;
        this.noOfHands = hands;
        this.noOfLegs = legs;
        this.skinType="Furr";
    }

    print(){
        console.log("This is animal class "+this.name);
    }
    showAnimal(){
        console.log("This is show Animal "+this.name);
    }
}
new Animal('Cat',4,0).print();
new Animal('Monkey',2,2).showAnimal();

class Person implements Species{
    public name:string;
    public noOfHands= 2;
    public noOfLegs = 2;
    private age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age = age;
    }
    print(){
        console.log(`${this.name} is ${this.age} years old`);
    }
}
const ali = new Person("Ali",23);
ali.print();
