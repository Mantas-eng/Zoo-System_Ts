import Animal from './Animal';
import Lion from './Lion';
import Penguin from './Penguin';
import Elephant from './Elephant';


const simba = new Lion("Simba", 5);
simba.makeSound();

const penguin = new Penguin("penguin", 10);
penguin.makeSound();

const genericAnimal = new Animal("Generic Animal", 3);
genericAnimal.makeSound();

const elephant = new Elephant("Elephant", 20);

