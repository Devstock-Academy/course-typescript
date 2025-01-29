// Collections

// Objects
// names of the properties and types of the properties

// {
//   make: "Ford",
//   model: "Mustang",
//   year: 2016
// }

// 1. declare variable car : {}
// 2. declare function produceCar which takes car and concatenates string in console.log
// 3. see completions
// 4. optional param
// 5. extra property
// 6. dictionaries and index signature [key: string]:

// Arrays
// 1. add [] to the type
// 2. apply it to cars

// Tuples - multi-element, ordered structure, i.e. array with 2 or 3 elements
//          [Year, Make,     Model    ]
// let myCar = [2016, "Ford", "Mustang"]
// const [year, make, model] = myCar;
// - we need to be more specific than typescript with it in order to create a tuple
// - check length of tuple and array
// - try to push or assign new values to tuple, no protection around pop and push?
// - length can lie?
// - solution readonly, const x : readonly [number, number] = [4, 5]
