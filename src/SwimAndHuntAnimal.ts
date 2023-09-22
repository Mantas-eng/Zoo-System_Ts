import Animal from './Animal';

class SwimAndHuntAnimal extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }


    swim(): void {
        console.log(`${this.name} is swimming`);

    }

    hunt() {
        console.log(`${this.name} is hunting`);
    }

}


export default SwimAndHuntAnimal;