export {};
interface Human{
    name:string|undefined;
    age: number|string; //base
    
}
interface BornHuman{
    dob: Date;
}
interface Person extends Human,BornHuman{
    name:string;
    age:string; //overidden property
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
    age: '223',
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
