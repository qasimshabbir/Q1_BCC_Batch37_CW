//function overloading
function createDate(timestamp:number): Date;
function createDate(day:number,month:number,year:number): Date;
function createDate(timestampMonth:number,day?:number,year?:number){
    if(day===undefined || year===undefined){
        return new Date(timestampMonth);
    }else{
        return new Date(year,timestampMonth,day);
    }
}
console.log(createDate(1231231));
console.log(createDate(7,27,1979));


function add(a:number,b:number) :number;
function add(first:number,second:number,third:number): number;
function add(first:number,second:number,third:number,forth:number): number;
function add(first:number,second:number,third?:number,forth?:number){
    if(third===undefined && forth===undefined)
        return first+second;
    else if(third!==undefined && forth==undefined)
        return first+second+third;
    else if(third!==undefined && forth!==undefined)
        return first+second+third+forth;
}

console.log(add(20,30));
console.log(add(20,30,40));
console.log(add(20,30,40,50));