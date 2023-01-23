var counter = 0;
function job1(callback1){
    callback1();
}
function job2(callback1){
    callback1();
}
function doSomething1(){
    console.log('do something1');
}
function doSomething2(){
    console.log('Do Something2');
}
job1(function() {
    doSomething1();

    counter += 1;

    if (counter == 2) {
        done();
    }
});

job2(function() {
     doSomething2();

    counter += 1;

    if (counter == 2) {
        done();
    }
});

function done() {
    console.log('done');
}
const fs = require('fs');
// const fetch = require('node-fetch');

let file = fs.promises.readFile('classAbstract.ts','utf-8',displayFile);
function displayFile(error,data){
    console.clear();
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
}
// const https://pokeapi.co/api/v2/pokemon/ditto
