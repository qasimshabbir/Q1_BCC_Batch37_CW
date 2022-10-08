export {};

class Person{
    public name:string|undefined;
    public noOfHands= 2;
    public noOfLegs = 2;
    private age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age = age;
    }
    print(){
        console.log(`${this.name} is ${this.age} years old`);
    }
}
class Teacher extends Person{
    name:string;
    course:string;
    constructor(name:string,age:number,course:string){ //overriding of constructor
        super(name,age);
        this.name = name;
        this.course = course;
    }

    print(): void { //nethod overriding
        console.log(`${this.name} is takeing ${this.course}`);
    }

}
class Student extends Person{
    //default constructor
    constructor(name:string,age:number){
        super(name,age);
    }
}

class AnonymousStudent extends Student{
    constructor(){
        //this.name="Ali";
        super("Ali",30);
        this.name="Sajjad";
    }
}

class TSClass{
    students:Student[] = [];
    teacher:Teacher;
    readonly name="Typescript";
    constructor(teacher:Teacher){
        this.teacher = teacher;
    }
    register(student:Student){
        this.students.push(student);
    }
    print(){
        console.log(`${this.name} class Teacher is ${this.teacher.name}`);
        console.log(`${this.name} class has ${this.students.length} students are registered`);

    }
}

const Umair = new Teacher("Umair",33,"Typescript");
Umair.print();
const ali = new Student("Ali",23);
ali.print()
const Hamzah = new Student("Hamza",21);
Hamzah.print();
const Jawed = new Student("Jawed",21);
Jawed.print();

const tsClass = new TSClass(Umair);
tsClass.register(ali);
tsClass.register(Hamzah);
tsClass.register(Jawed);

tsClass.print();