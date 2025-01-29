// type guards and narrowing
// built-in
// let value:
//   | Date
//   | null
//   | undefined
//   | "orange"
//   | [number]
//   | { dateRange: [Date, Date] };

// // instanceof
// if (value instanceof Date) {
//   value;
// }
// // typeof
// else if (typeof value === "string") {
//   value;
// }
// // Specific value check
// else if (value === null) {
//   value;
// }
// // Truthy/falsy check
// else if (!value) {
//   value;
// }
// // Some built-in functions
// else if (Array.isArray(value)) {
//   value;
// }
// // Property presence check
// else if ("dateRange" in value) {
//   value;
// } else {
//   value;
// }

// not working
// interface CarLike {
//   make: string;
//   model: string;
//   year: number;
// }

// let maybeCar: any;

// // the user defined guard is
// // return : valueToTest is CarLike
// // :valueToTest is CarLike
// function isCarLike(valueToTest: any) {
//   return (
//     valueToTest &&
//     typeof valueToTest === "object" &&
//     "make" in valueToTest &&
//     typeof valueToTest["make"] === "string" &&
//     "model" in valueToTest &&
//     typeof valueToTest["model"] === "string" &&
//     "year" in valueToTest &&
//     typeof valueToTest["year"] === "number"
//   );
// }

// // using the guard
// if (isCarLike(maybeCar)) {
//   maybeCar;
// } else {
//   maybeCar;
// }

// todo asserts, satisfies
