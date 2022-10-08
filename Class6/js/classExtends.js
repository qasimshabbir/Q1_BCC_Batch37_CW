"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.noOfHands = 2;
        this.noOfLegs = 2;
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
class Teacher extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.name = name;
        this.course = course;
    }
    print() {
        console.log(`${this.name} is takeing ${this.course}`);
    }
}
class Student extends Person {
    //default constructor
    constructor(name, age) {
        super(name, age);
    }
}
class AnonymousStudent extends Student {
    constructor() {
        //this.name="Ali";
        super("Ali", 30);
        this.name = "Sajjad";
    }
}
class TSClass {
    constructor(teacher) {
        this.students = [];
        this.name = "Typescript";
        this.teacher = teacher;
    }
    register(student) {
        this.students.push(student);
    }
    print() {
        console.log(`${this.name} class Teacher is ${this.teacher.name}`);
        console.log(`${this.name} class has ${this.students.length} students are registered`);
    }
}
const Umair = new Teacher("Umair", 33, "Typescript");
Umair.print();
const ali = new Student("Ali", 23);
ali.print();
const Hamzah = new Student("Hamza", 21);
Hamzah.print();
const Jawed = new Student("Jawed", 21);
Jawed.print();
const tsClass = new TSClass(Umair);
tsClass.register(ali);
tsClass.register(Hamzah);
tsClass.register(Jawed);
tsClass.print();
