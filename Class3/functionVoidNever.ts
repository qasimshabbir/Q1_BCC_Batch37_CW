let result:number|undefined;
function addOnResult(left?:any,right?:any){
    if(left===undefined || right===undefined){
        return;
    }else if(typeof left==='number' && typeof right==='number'){
        result = left+right;
    }else{
        result = undefined;
    }
}
function printResult(){
    console.log(result);
}
addOnResult();
printResult();
addOnResult(20,30);
printResult();
addOnResult("20","30");
printResult();

function neverReturned(): never{
    throw new Error("ERROR");
}

