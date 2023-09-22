class Elephant extends Animal {
    name: string;
    age: number;


    constructor(name: string, age: number) {
        super(name, age);

    }

    makeSound() {
        console.log(`${this.name}`);
    }
}