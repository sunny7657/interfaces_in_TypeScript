class Key {
  private signature: number = Math.random();

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("The door is open");
    } else {
      console.log("The door is closed");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Welcome!");
    } else {
      console.log("Who are you?");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey()); // Welcome!

house.comeIn(person); // The door is open

const key1 = new Key();
const key2 = new Key();

const house1 = new MyHouse(key1);
const person2 = new Person(key2);

house1.openDoor(person2.getKey()); // Who are you?

house1.comeIn(person2); // The door is closed

export {};
