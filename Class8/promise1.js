const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Hello Wrold');
    },2000)//after 2 sec
})

promise.then((data,err)=>{
    console.log(data+' 1');
})

const promise1 = new Promise((resolve,reject)=>{
    const nos = Math.floor(Math.random()*2);
    if(nos == 0){
        resolve("Hello World Resolve");
    }else{
        reject("Hello Wrold Rejected");
    }
    
})

promise1.then((data)=>{
    console.log(data+' 1');
}).catch((error)=>console.log('ERROR '+error));
