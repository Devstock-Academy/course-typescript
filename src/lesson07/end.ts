// 2 ways of defining types
// type aliases and interfaces

// 1. type aliases
// reusability, one source of through
// import export
// meaningful name

let person: {
  email: string;
  age: number;
  // ...
};

// Inheritance in type aliases, intersection works as extension
// let person2: Person

type Person2 = {
  gender: string;
};

// type Person3 = Person & Person2
// type Person4 = Person | Person2;
// let p: Person3
// let p2: Person4;

// type SpecialDate = Date & { getDescription(): string };

// const newYearsEve: SpecialDate = Object.assign(new Date(), {
//   getDescription: () => "Last day of the year",
// });

// 2. interfaces - define object types
// type Numberos = 1 | 2
// interface Numberos2 = 1 | 2
// interface Numberos2 {
//     num: 1 | 2
// }

// a)
// class AnimalThatEats {
//   eat(food) {
//     console.log(`eats ${food}`);
//   }
// }
// class Cat extends AnimalThatEats {
//   meow() {
//     return "meow";
//   }
// }

// const c = new Cat();
// c.eat;
// c.meow();

// b)
// interface Animal {
//   isAlive(): boolean;
// }
// interface Mammal extends Animal {
//   getFurOrHairColor(): string;
// }
// interface Hamster extends Mammal {
//   squeak(): string;
// }
// function careForHamster(h: Hamster) {
//   h.getFurOrHairColor();
//   h.squeak();
// }

// c) implements
// interface AnimalLike {
//   eat(food): void
// }

// class Dog implements AnimalLike {
//   bark() {
//     return "woof"
//   }
// }

// classes extends only 1, implements multiple
// class LivingOrganism {
//   isAlive() {
//     return true;
//   }
// }
// interface AnimalLike {
//   eat(food): void;
// }
// interface CanBark {
//   bark(): string;
// }

// class Dog2 extends LivingOrganism implements AnimalLike, CanBark {
//   bark() {
//     return "woof";
//   }
//   eat(food) {
//     console.log(`eats ${food}`);
//   }
// }

// we can also implements type which is object

// interfaces are open, if you use the same name few times it will be merged

// window.document // an existing property
// window.exampleProperty = 42
// interface Window {
//   exampleProperty: number
// }

// when use which
// if it's not an object => type
// in context of classes, implements => interface
// if you want allow consumers to augment => interface
