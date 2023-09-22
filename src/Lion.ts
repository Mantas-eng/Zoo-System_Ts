import JumpAndRunAnimal from './JumpAndRunAnimal';

class Lion extends JumpAndRunAnimal {

    outsideStatus: boolean;

    constructor(name: string, age: number, outsideStatus: boolean) {
        super(name, age);
        this.outsideStatus = outsideStatus;
    }

}

export default Lion;