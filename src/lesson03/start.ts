// declaration and inference

// let temperature: number | "COLD";
let temperature = 90 as const;

// temperature = "aaaaa".toUpperCase() as "COLD";

// const speedOfWind = 80

// // literal types

// think of type as a set of allowed values (temperature, speedOfWind)

// let speedOfWind = 90 as const
// speedOfWind = 91

// temperature = 23; // (1) OK, as before
// temperature = speedOfWind; // (2) OK
// speedOfWind = temperature; // (3) ❌ ERROR

// speedOfWind = 79; // (4) OK
// speedOfWind = 78; // (5) ❌ ERROR

// rule x = y, does y fit into x?

// Implicit any, declare variable before initialization

// between 100 and 1100
// const RANDOM_WAIT_TIME =
//   Math.round(Math.random() * 100) + 1000

// let startTime = new Date()
// let endTime: Date

// setTimeout(() => {
//   endTime = new Date()
// }, RANDOM_WAIT_TIME)

// type casting - we know better than compiler :)

let devstockFounding = new Date("Aug 22, 2021");
let date1 = devstockFounding;
let date2 = devstockFounding as any; // force the type to be `any`
// date2 = 'a'
// const speedOfWind = 80 as number; // safe!
// speedOfWind = 79

// let date3 = "asdasdasdadasd" as Date;
// let date4 = "not safe" as any as Date;
// date4.toISOString();

// function add(a: number, b: number) {
//   return a + b; // strings? numbers? a mix?
// }

// const result = add(3, "4");
// // const p = new Promise(result);

function add(a: number, b: number): number {
  return 1;
}
