type Address = {address1: string, address2: string,zip: number, city:string,country:string };
type Person =  
{
    name: string, 
    age: number, 
    address:Address //'nested object
};

let addressQasim: Address = {
        address1: "address 1",
        address2: "address 2",
        zip: 74300,
        city: "Karachi",
        country: 'Pakistan'
};
let personQasim: Person = 
{
    name: 'Qasim',
    age: 30,
    address:addressQasim

}

const Car : {
    make: string,
    model: string,
    owner: Person, //nested object
    ownerAddress: Address, //nested object
} = {
    make: "Mehran",
    model: "2020",
    owner: personQasim,
    ownerAddress: addressQasim
}




console.log(Car);
