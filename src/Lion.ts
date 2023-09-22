class Lion extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }

    makeSound() {
        console.log(`${this.name}`);
    }
}