"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSound() {
        console.log(`${this.name}makes a sound.`);
    }
}
exports.default = Animal;
