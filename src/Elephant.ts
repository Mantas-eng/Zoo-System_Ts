import SwimAndHuntAnimal from './SwimAndHuntAnimal';

class Elephant implements SwimAndHuntAnimal {


    constructor(public name: string, public age: number) { }

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
export default Elephant;

