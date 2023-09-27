const Lion = require('./dist/Lion').default;
const Elephant = require('./dist/Elephant').default;
const Penguin = require('./dist/Penguin').default;
const Zookeeper = require('./dist/Zookeeper').default;

// Create instances of Lion and Penguin
const lion = new Lion("Simba", 5,);
const penguin = new Penguin("Penguin", 4, 10, "Antarctica");

// Make sounds for Lion and Penguin
lion.makeSound();
penguin.makeSound();

// Create an instance of Elephant
const elephant = new Elephant("Elephant", 20, 5000);

// Create an instance of Zookeeper
const zookeeper = new Zookeeper();

// Perform actions specific to each animal
penguin.sleep();
lion.jump();
elephant.hunt();

// Feed the animals
zookeeper.feedAnimal(penguin);
zookeeper.feedAnimal(lion);
zookeeper.feedAnimal(elephant);