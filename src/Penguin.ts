class Penguin extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }

    makeSound(): void {
        console.log(`${this.name} makes a cute honking sound!`);
    }
}