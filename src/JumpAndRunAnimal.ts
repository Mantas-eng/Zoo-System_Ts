import Animal from './Animal';


class JumpAndRunAnimal extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }

    jump(): void {
        console.group(`$[this.name] is jumping`);
    }

    run() {
        console.log(`${this.name} is running`);
    }

}

export default JumpAndRunAnimal;