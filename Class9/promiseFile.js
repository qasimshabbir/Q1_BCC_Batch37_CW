const fs = require('fs');

// //fs.readFile('tet.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log("ERROR");
//     }else{
//         console.log(data);
//     }
// });


fs.promises.readFile('tet.txt','utf-8')
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err));
fs.promises.readFile('text.txt','utf-8')
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err));