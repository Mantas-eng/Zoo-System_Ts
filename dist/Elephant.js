"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Elephant {
    constructor(name, age) {
        this.name = name;
        this.age = age;
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
exports.default = Elephant;
