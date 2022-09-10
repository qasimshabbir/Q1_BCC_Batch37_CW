function add(left: number|string, right: number|string, returnType:'text'|'nos') :string|number {
    let result;
    if((typeof left==='number' && typeof right === 'number')){
        result= left+right;
    }else{
        result= left +' '+ right;
    }
    if(returnType==='nos'){
        return +result;
    }
    return result;
}
console.log(add("20","30",'text')); 
console.log(add(20,30,'nos'));
console.log(add("20","40",'nos')); 