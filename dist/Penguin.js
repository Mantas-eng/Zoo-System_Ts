"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Penguin {
    constructor(name, age, maxSpeed, origin) {
        this.name = name;
        this.age = age;
        this.maxSpeed = maxSpeed;
        this.origin = origin;
    }
    swim() {
        console.log(`${this.name} is swimming`);
    }
    hunt() {
        console.log(`${this.name} is hunting`);
    }
    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
}
exports.default = Penguin;
