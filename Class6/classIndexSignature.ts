export {};
class Calculator{
    [n:string]:number | ((n:number)=>void);
    a:number = 20;
    b:number = 40
    

    show(n:number){
        console.log("this number is "+this.n);
    }
    add(){
        return this.a+this.b;
    }
    divide(){
        return "aaa";
    }
    multiply(a:number){
        return this.a*this.b;
    }
}

const calc:Calculator = new Calculator();

calc.x = 20;
calc.y = 20;
calc.z = 20;
calc.a = 30

calc.show(calc.x);
