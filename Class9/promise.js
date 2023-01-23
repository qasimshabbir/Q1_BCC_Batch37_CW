function job(status){
    let promise = new Promise((resolve,reject)=>{
        if(status === 'done'){
            resolve(status+" Success");
        }else{
            reject(status+" Failure");
        }
    })
    return promise;
}

//DATABASE- get City informaiton - I will use promise
    //WHEATER API: get Weather condition of City -- I will use promise
        //DATABASE - Save value in database

// promise.then(successCallback(),errorCallback()).then(null,errorCallback());
// 
// promise
//     .then((data)=>{
//         console.log("RESOLVE: "+data);
//     },(err)=>{
//         console.log("ERROR: "+err);
//     });

job("done")
    .then((data)=>{//success
        console.log("RESOLVE: "+data);//this will print
        if(data === 'done Success'){
            throw "Bad World";
        }
        return job('done');  //ingored
    })
    .catch((err)=>{
        console.log("ERROR: "+err); //print
    })
    .then((data)=>{ //done success
        console.log("RESOLVE: 1 "+data); //print
        return "Hello World"
    }).catch((err)=>{
        console.log("ERROR 2 "+err);
    })
    .then((data)=>{ //Hello World
        console.log("RESOLVE: 2 "+data); //ignore
    })
    .then((data)=>{
        console.log("RESOLVE: 3 "+data);//ignore
    })