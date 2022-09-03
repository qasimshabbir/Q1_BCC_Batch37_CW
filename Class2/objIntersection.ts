//Explicit intersection
type Male = {name: string, age: number, beared: boolean }
type Female = { makeup: boolean }
type Person =  Male & Female;

const firstPerson : Person = {
    name: "Kashif Rida",
    age: 20,
    beared: true,
    makeup: false
}
console.log(firstPerson);
