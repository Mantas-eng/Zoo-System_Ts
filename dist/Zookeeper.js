"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("./Logger");
class Zookeeper {
    constructor() {
        this.logger = Logger_1.default.getInstance();
    }
    feedAnimal(animal) {
        const feedTime = new Date().toLocaleDateString();
        const logMessages = (`${this.constructor.name} is feeding ${animal.name} at ${feedTime}.`);
        this.logger.log(logMessages);
    }
}
exports.default = Zookeeper;
