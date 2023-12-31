class JumpAndRunAnimal {
    constructor(public name: string, public age: number) { }

    jump() {
        console.log(`${this.name} is jumping`);
    }

    run() {
        console.log(`${this.name} is running`);
    }

    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
}

class Lion extends JumpAndRunAnimal {
    outsideStatus: boolean;

    constructor(name: string, age: number, outsideStatus: boolean) {
        super(name, age);
        this.outsideStatus = outsideStatus;
    }
}

export default Lion;


