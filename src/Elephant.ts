import Animal from './Animal';
import SwimAndHuntAnimal from './SwimAndHuntAnimal';

class Elephant extends SwimAndHuntAnimal {
    name: string;
    age: number;
    weight: number;


    constructor(name: string, age: number, weight: number) {
        super(name, age);
        this.weight = weight;
    }

}
export default Elephant;