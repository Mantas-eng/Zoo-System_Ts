import Animal from './Animal';

class SleepAndWalkAnimal extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);

    }

    walk() {
        console.log(`${this.name} is walking`);
    }
}

export default SleepAndWalkAnimal;