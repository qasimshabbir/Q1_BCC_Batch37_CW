interface calc{
    left: number;
    right: number;
    add():number; //method
    subtract():number; //method
    add1: (a:number,b:number)=>number; //property function type
}

let calculator: calc = {
    left:0,
    right:0,
    add(){
        return this.left+this.right;
    },
    subtract(){
        return this.left-this.right;
    },
    add1: (a,b) => a +b
}
calculator['left']=40;

calculator.left= 40;
calculator.right=90;
console.log(calculator.add(),calculator.subtract());
console.log(calculator.add1(23,23));

