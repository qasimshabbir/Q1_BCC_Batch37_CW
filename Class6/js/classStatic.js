"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SuzukiCar {
    constructor(make, model, color, engine, doors) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.engine = engine;
        this.speed = 0;
        this.doors = doors;
    }
    ;
    set Make(make) {
        this.make = make;
    }
    get Make() {
        return this.make;
    }
    set Speed(speed) {
        if (speed > 0)
            this.speed = speed;
        else
            this.speed = 0;
    }
    start() {
        this.speed = 10;
    }
    accelerate() {
        this.speed += 10;
        return this.speed;
    }
    break() {
        this.speed = 0;
    }
    static getCompany() {
        return SuzukiCar.company;
    }
}
SuzukiCar.company = "Suzuki";
class Mehran extends SuzukiCar {
    constructor(model, color, doors) {
        super("Suzuki Mehran", model, color, "800 CC", doors);
        this.make = SuzukiCar.company + " Mehran";
    }
}
class Alto extends SuzukiCar {
    constructor(model, color, doors) {
        super(SuzukiCar.company + " Alto", model, color, "800 CC", doors);
    }
}
class Cultus extends SuzukiCar {
    constructor(model, color) {
        super(SuzukiCar.company + " Cultus", model, color, "1000 CC", 4);
    }
    start() {
        this.speed = 20;
    }
    accelerate() {
        this.speed += 20;
        return this.speed;
    }
}
const custus1 = new Cultus('2023', 'blue');
console.log(Cultus.getCompany());
