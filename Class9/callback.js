const fs = require('fs');

// fs.readFile('text.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log("ERROR");
//     }else{
//         console.log(data);
//     }
// });

fs.readFile('tet.txt','utf-8',(err,data)=>{
    if(err){
        console.log("ERROR");
    }else{
        console.log(data);
    }
});