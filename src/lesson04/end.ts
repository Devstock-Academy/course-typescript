// Collections

// Objects
// names of the properties and types of the properties

// {
//   make: "Ford",
//   model: "Mustang",
//   year: 2016
// }

// let car: {
//   make: string;
//   model: string;
//   year: number;
//   spareWheel?: number;
// };

// car = {
//   make: "ford",
//   model: "mustang",
//   year: 2016,
// };

// function produceCar(car: {
//   make: string;
//   model: string;
//   year: number;
//   spareWheel?: number;
// }): void {
//   console.log(
//     `${car.make} ${car.model} ${car.year} ${car.spareWheel} !!!`
//   );
// }

// produceCar(car);

// 1. declare variable car : {}
// 2. declare function produceCar which takes car and concatenates string in console.log
// 3. see completions
// 4. optional param
// 5. extra property
// 6. dictionaries and index signature [key: string]:

let students: {
  [k: string]: {
    age: number;
    gender: "male" | "female";
  };
};

students = {
  bartek: {
    age: 35,
    gender: "male",
  },
  paulina: {
    age: 33,
    gender: "female",
  },
};

let singleStudentArray: {
  age: number;
  gender: "male" | "female";
  kids?: number;
}[];

singleStudentArray = [
  {
    age: 33,
    gender: "female",
  },
  {
    age: 33,
    gender: "female",
    kids: 3,
  },
];

// Arrays
// 1. add [] to the type
// 2. apply it to cars

// Tuples - multi-element, ordered structure, i.e. array with 2 or 3 elements
//          [Year, Make,     Model    ]

// const [year, make, model] = myCar;
// console.log("year", year);
// console.log("make", make);
// console.log("model", model);
// - we need to be more specific than typescript with it in order to create a tuple
// - check length of tuple and array
// - try to push or assign new values to tuple, no protection around pop and push?
// - length can lie?
// - solution readonly, const x : readonly [number, number] = [4, 5]

let myCar: readonly [string, string, number];
// let myCar = [2016, "Ford", "Mustang"];
myCar = ["Ford", "Mustang", 2015];
console.log(myCar.length, myCar);
