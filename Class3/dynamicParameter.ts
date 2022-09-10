function concat(first:string,...second: string[]){
    return first.concat(",",second.join(","));
}

console.log(concat('a','b','c','d','e','f','g'));
//console.log(concat('a','b','c','d',2,3,4));
