import Animal from './Animal';
import Lion from './Lion';
import Penguin from './Penguin';
import Elephant from './Elephant';
const lion = new Lion("Simba", 5, true);
lion.makeSound();

const penguin = new Penguin("penguin", 4, 10, "Antarctica");
penguin.makeSound();

const genericAnimal = new Animal("Generic Animal", 3);
genericAnimal.makeSound();

const elephant = new Elephant("Elephant", 20, 5000);

penguin.sleep();
lion.jump();
elephant.hunt();
