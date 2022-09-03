type PersonBase = {name: string};
type Male = PersonBase & {type: "Male", beared: boolean & string }; //never
type Female = PersonBase & {type: "Female", makeup: boolean };

type Person = Male | Female;

const firstPerson : Person = {
    name: "Saqib",
    type: "Male",
    makeup: false
}
console.log(firstPerson);
