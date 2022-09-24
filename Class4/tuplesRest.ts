export {}

function add(a:number,b:number){
    return a+b;
}
let nums:[number,number][] = [
    [23,23],
    [50,60],
    [70,80],
];
//let [d,e] = ...nums;
function show(nos:[number,number][]){
    nos.forEach(item=>{
        console.log(add(...item));
    })

}
show(nums);