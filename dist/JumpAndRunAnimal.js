"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
class JumpAndRunAnimal extends Animal_1.default {
    constructor(name, age) {
        super(name, age);
    }
    jump() {
        console.group(`$[this.name] is jumping`);
    }
    run() {
        console.log(`${this.name} is running`);
    }
}
exports.default = JumpAndRunAnimal;
