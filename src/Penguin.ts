import SleepAndWalkAnimal from './SleepAndWalkAnimal';


class Penguin extends SleepAndWalkAnimal {

    maxSpeed: number;
    origin: string;
    constructor(name: string, age: number, maxSpeed: number, origin: string) {
        super(name, age);
        this.maxSpeed = maxSpeed;
        this.origin = origin;
    }

}

export default Penguin;