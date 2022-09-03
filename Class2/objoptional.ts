type Address = {
    address1: string, 
    address2 ?: string,
    zip ?: number, 
    city ?:string,
    country:string 
};
type Person =  
{
    name: string, 
    age: number, 
    address ?: Address //nested object
};

const firstPerson : Person = {
    name: "Qasim",
    age: 20,
    address: {
        address1: 'Address 1',
        country: 'Pakistan'
    }
};

console.log(firstPerson);