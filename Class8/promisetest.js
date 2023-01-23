function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise
.then(function(data) {
    console.log(data+" 1");
    if(data !== 'vic'){
        throw 'Dict';
    }
    return job(true);
})
.catch(function(error) {
    console.log(error+" 1");

    return 'Error caught';
})

.then(function(data) {
    
    console.log(data+" 2");


    //return job(false);
})
.catch(function(error) {
    console.log(error +" 2");
})
.then(function(data){
    console.log(data+" 3")
});