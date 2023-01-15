export {};

interface ICar{
    doors:number
    make:string;
    model:string;
    speed:number;

    start():void;
    break():void;
    accelerate():number;
}

class Car implements ICar{
    model:string;
    color:string;
    speed:number;
    engine:string;
    make:string;
    doors:number;
    
    constructor(make:string,model:string,color:string,engine:string,doors:number) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.engine = engine;
        this.speed = 0;
        this.doors = doors;
        
    };

    set Make(make:string){
        this.make = make;
    }
    get Make(){
        return this.make;
    }

    set Speed(speed:number){
        if(speed>0)
            this.speed = speed;
        else   
            this.speed=0;
    }

    start(){
        this.speed = 10;
    }
    accelerate(){
        this.speed +=10;
        return this.speed;
    }
    break(){
        this.speed = 0;
    }
}

class Mehran extends Car{
    make:string = "Suzuki Mehran";
    constructor(model:string,color:string,doors:number){
        super("Suzuki Mehran",model,color,"800 CC",doors);

    }
}

class Alto extends Car{
    constructor(model:string,color:string,doors:number){
        super("Suzuki Alto",model,color,"800 CC",doors);
    }
}

class Cultus extends Car{
    constructor(model:string,color:string){
        super("Suzuki Cultus",model,color,"1000 CC",4);
    }
    start(){
        this.speed = 20;
    }
    accelerate(){
        this.speed +=20;
        return this.speed;
    }
}

const mehran2023:Mehran = new Mehran("2023","Black",4);
const mehran2020:Mehran = new Mehran("2023","Black",2);
mehran2020.start(); //speed 10
console.log(mehran2020.accelerate()); //speed 20
const cultus1:Cultus = new Cultus("2020","Blue");
cultus1.start(); //speed 20
console.log(cultus1.accelerate()); //speed 40


//Another example.



interface Species{
    noOfHands:number;
    noOfLegs:number;
    name:string;
    print():void;
}
interface SeaSpecies {
    noOfFins:number;
    waterType:"Salt"|"River";
    type:"Mamel"|"Fish";
}
class Fish implements Species,SeaSpecies{
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
class Whales extends Fish{
    direction:string = 'south'
    swim(direction:string):void{
        this.direction = direction;
    }
}
new Whales("Blue Whale",2,"Salt","Mamel").print();

class Animal implements Species{
    noOfHands: number; //interface properties
    noOfLegs:number;
    name:string;
    skinType:string; //additional
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
