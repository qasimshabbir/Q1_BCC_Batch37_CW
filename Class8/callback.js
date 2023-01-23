const fs = require('fs');

fs.readFile('test.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

const checkEven = (no)=>console.log(no%2);
checkEven(2);
checkEven(32);
checkEven(33);
checkEven(9);