class Calculator{
    x:number = 0; //Properties
    y:number = 0; //State
    //functions
    //behaviour
    add(){
        return this.x+this.y;
    }
}

class Car{
    model:string;
    color:string;
    private speed:number;
    engine:string;
    private make:string;
    
    constructor(make:string,model:string,color:string,engine:string) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.engine = engine;
        this.speed = 0;
        
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
    }
    break(){
        this.speed = 0;
    }
}

const mehran:Car = new Car('Suzuki Mehran','2003','White','800CC');
const civic:Car = new Car('Honda Civic','2020','White','1300CC');
const city:Car = new Car('Honda City','2023','White','1300CC');

mehran.start();
//mehran.make = 'Suzuki Cultus';
mehran.Make = 'Honda Civic';
//mehran.speed = -20;
mehran.Speed = -20;
console.log(mehran);
mehran.accelerate();
mehran.accelerate();
mehran.accelerate();
mehran.accelerate();
mehran.accelerate();




const add:Calculator = new Calculator(); //default constructor
add.x = 20;
add.y = 20;
console.log(add.add());

const addTwice:Calculator = new Calculator();
addTwice.x-40;
addTwice.y=40;
console.log(addTwice.add())