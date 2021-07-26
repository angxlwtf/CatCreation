import { Animal, Person } from "./Classes";
import { Classification, Type } from "./Enums";

/*
I made a ton of animals and only ended up using 1, beautiful!
*/

export class Cat extends Animal {
  constructor(Name: string, Age?: number, Class?: Classification, Type?: Type) {
    super(Name, Class, Type, Age);
  }
}

export class Dog extends Animal {
  constructor(Name: string, Age?: number, Class?: Classification, Type?: Type) {
    super(Name, Class, Type, Age);
  }
}

export class Snake extends Animal {
  constructor(Name: string, Age?: number, Class?: Classification, Type?: Type) {
    super(Name, Class, Type, Age);
  }

  bite(target: Person) {
    console.log(`${this.Name} bit ${target.Name}!`);
  }
}
