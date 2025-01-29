// 2 ways of defining types
// type aliases and interfaces

import { Person } from "./types";

// 1. type aliases
// reusability, one source of through
// import export
// meaningful name

let person: Person;

// Inheritance in type aliases, intersection works as extension
// let person2: Person

type Person2 = {
  gender: string;
  name: string;
};

type Person3 = Person & Person2;
type Person4 = Person | Person2;
let p: Person3;
let p2: Person4;

// p2 = {
//     email: 'aaa',
//     gender: 'a'
// }

// p = {
//     gender: 'aaa',
//     age: 12,
//     email: 'aaa',
//     name: 'aaa'
// }

// type SpecialDate = Date & { getDescription(): string };

// const newYearsEve: SpecialDate = Object.assign(new Date(), {
//   getDescription: () => "Last day of the year",
// });

// newYearsEve.getDescription()

// 2. interfaces - define object types
type Numberos = {
  num: number;
};
// interface Numberos2
interface Numberos2 {
  num: number;
}

// a)
class AnimalThatEats {
  eat(food) {
    console.log(`eats ${food}`);
  }
}
class Cat extends AnimalThatEats {
  meow() {
    return "meow";
  }
}

const c = new Cat();
c.eat;
c.meow();

// b)
interface Animal {
  isAlive(): boolean;
}
interface Mammal extends Animal {
  getFurOrHairColor(): string;
}
interface Hamster extends Mammal {
  squeak(): string;
}
function careForHamster(h: Hamster) {
  h.getFurOrHairColor();
  h.squeak();
}

// c) implements
// interface AnimalLike {
//   eat(food): void;
// }

// class Dog implements AnimalLike {
//   bark() {
//     return "woof";
//   }
//   eat(food) {
//   }
// }

// classes extends only 1, implements multiple
class LivingOrganism {
  isAlive() {
    return true;
  }
}
// type AnimalLike = {
//   eat(food): void;
// }

// type AnimalLike = {
//   count: number;
// }

// interface CanBark {
//   bark(): string;
// }

// class Dog2 extends LivingOrganism implements AnimalLike, CanBark {
//     count = 1
//   bark() {
//     return "woof";
//   }
//   eat(food) {
//     console.log(`eats ${food}`);
//   }
// }

// we can also implements type which is object

// interfaces are open, if you use the same name few times it will be merged

// window.exampleProperty = 12

// interface globalThis {
//   exampleProperty: number;
// }

// this.exampleProperty = 12

// when use which
// if it's not an object => type
// in context of classes, implements => interface
// if you want allow consumers to augment => interface

// window.document; // an existing property

declare global {
  interface Window {
    exampleProperty: number;
  }
}

// window.exampleProperty = 42;

// tells TS that `exampleProperty` exists
