import Animal from './Animal';
import Lion from './Lion';
import Penguin from './Penguin';
import Elephant from './Elephant';
import Zookeeper from './Zookeeper';

const lion = new Lion("Simba", 5, true);
lion.makeSound();

const penguin = new Penguin("penguin", 4, 10, "Antarctica");
penguin.makeSound();

const genericAnimal = new Animal("Generic Animal", 3);
genericAnimal.makeSound();

const elephant = new Elephant("Elephant", 20, 5000);

const zookeeper = new Zookeeper();
penguin.sleep();
lion.jump();
elephant.hunt();

zookeeper.feedAnimal(penguin);
zookeeper.feedAnimal(lion);
zookeeper.feedAnimal(elephant);
