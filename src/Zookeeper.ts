import Animal from './Animal';
import Logger from './Logger';

class Zookeeper {
    private logger = Logger.getInstance();

    feedAnimal(animal: Animal) {
        const feedTime = new Date().toLocaleDateString();
        const logMessages = (`${this.constructor.name} is feeding ${animal.name} at ${feedTime}.`);


        this.logger.log(logMessages);
    }
}

export default Zookeeper;