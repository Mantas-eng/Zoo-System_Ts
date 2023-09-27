"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JumpAndRunAnimal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    jump() {
        console.log(`${this.name} is jumping`);
    }
    run() {
        console.log(`${this.name} is running`);
    }
    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
}
class Lion extends JumpAndRunAnimal {
    constructor(name, age, outsideStatus) {
        super(name, age);
        this.outsideStatus = outsideStatus;
    }
}
exports.default = Lion;
