let arNumString = [
    23,
    'str',
    342,
    [
        23,
        20,
        23
    ],
    ["aa",'bb','cc']
];

let a = [];
a.push('astr');

a[1]=20;


let b:number[][] = [
//   0 1 2 3 4
    [1,2,3,4,5], //0
    [11,22,33,44,55], //1
    [21,22,23,24,25], //2
];

console.log(b[0][1]) //2
console.log(b[0][4]) //2
b.push([41,42,43,44]);//b[3]
console.log(b[3])