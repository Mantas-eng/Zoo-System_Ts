class Animal {
    name: string;
    age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }


    makeSound() {
        console.log(`${this.name}makes a sound.`);
    }

}

