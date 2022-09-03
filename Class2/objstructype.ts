//type Person = {name: string, age: number, address: string }; //usage tracking
type Person = {name: string, age: number}; //Excess property checking
const Person1 : Person = { //Excess property checking
    name: 'Qasim',
    age: 30,
    address: "Karachi"
};

const Person2 : Person = { //Excess property checking
    name: 'Qasim1',
    age: 30,
    address: "Karachi"
};

const Person3 : Person = { //usage error
    name: 'Qasim2',
    age: 30
};


console.log(Person1.name +" is "+Person1.age+" Years old");
console.log(Person2.name +" is "+Person2.age+" Years old");
console.log(Person3.name +" is "+Person3.age+" Years old");