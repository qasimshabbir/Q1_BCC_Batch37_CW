 //inferred union
const firstPerson  = Math.random() > 0.5? //ternary operator
    {name: "Umair", age: 20}:
    {name: "Qasim", address: "Karachi"};

console.log(firstPerson);

/*
//Explicit union
type Person =  
{
    name: string, 
    age: number, 
    address ?: string
} | {
    name: string, 
    age ?: number, //optional
    address : string 
};

const firstPerson : Person  = Math.random() > 0.5? //ternary operator
    {name: "Umair", age: 20}:
    {name: "Qasim", address: "Karachi"};

console.log(firstPerson);
*/