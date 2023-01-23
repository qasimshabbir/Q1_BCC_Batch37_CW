const fs = require('fs');

const file = async ()=>{

    const data = await fs.promises.readFile('test.txt','utf-8');
    console.log(data);
    try{
        const data1 = await fs.promises.readFile('tes.txt','utf-8');
        console.log(data1);
    }catch(err){
        console.log('ERROR Found');
    }
}
file();
