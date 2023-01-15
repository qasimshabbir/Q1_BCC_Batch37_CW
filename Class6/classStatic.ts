
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

class SuzukiCar implements ICar{
    private static company:string = "Suzuki";
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

    static getCompany():string{
        return SuzukiCar.company
    }
}

class Mehran extends SuzukiCar{
    make:string = SuzukiCar.company+" Mehran";
    constructor(model:string,color:string,doors:number){
        super("Suzuki Mehran",model,color,"800 CC",doors);

    }
}

class Alto extends SuzukiCar{
    constructor(model:string,color:string,doors:number){
        super(SuzukiCar.company+" Alto",model,color,"800 CC",doors);
        
    }
}

class Cultus extends SuzukiCar{
    constructor(model:string,color:string){
        super(SuzukiCar.company+" Cultus",model,color,"1000 CC",4);
    }
    start(){
        this.speed = 20;
    }
    accelerate(){
        this.speed +=20;
        return this.speed;
    }
}

const custus1:Cultus = new Cultus('2023','blue');
console.log(Cultus.getCompany());