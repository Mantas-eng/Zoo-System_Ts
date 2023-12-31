import SwimAndHuntAnimal from "./SwimAndHuntAnimal";

class Penguin implements SwimAndHuntAnimal {
    name: string;
    age: number;
    maxSpeed: number;
    origin: string;

    constructor(name: string, age: number, maxSpeed: number, origin: string) {
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
export default Penguin;