interface Person{
    name:string;
    age: number;
    dob: Date;
    gender: "Male"|"Female"; //literal type
    address?:{
        building: string,
        area:string,
        zip: number,
        province: string,
    }
}

const Man:Person = {
    name: "Qasim",
    age: 223,
    dob: new Date(),
    gender:"Male",
    address:{
        building:'AABC Tower',
        area:'Shahr-e-Faisal',
        zip: 22221,
        province: 'Sind'
    }
};
console.log(Man);
