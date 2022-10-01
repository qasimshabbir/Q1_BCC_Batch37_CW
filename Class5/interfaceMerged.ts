export {};
interface Human{
    name:string|undefined;
}
interface Human{
    dob: Date;
}

interface Human{
    //name: string; //merging
    age: number|string; //base
}
interface Person extends Human{
    name:string; //overridding
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
