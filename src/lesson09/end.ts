// Type queries - obtain type from value

// keyof - obtain type of all prop keys on a given interface
// not all keys are strings. e.x. Date
// & number | & number | & symbol

// Date & string

// type DateType = Date

// type DateType = keyof Date & string
// type DateNumber = keyof Date & number;
// const x: DateNumber =
// type DateSymbol = keyof Date & symbol;

// let dateVal: DateType = 'getMonth'
// let dateValue: DateSymbol
// dateValue = Symbol.toPrimitive

// const date = new Date()
// type newDateType = keyof Date

// typeof - extract type from a value
// async function main() {
//     const response = await Promise.all([
//         fetch("https://xxx.com"),
//         Promise.resolve(222),
//     ])

//     type ResponseType = typeof response
// }

// Indexed Access Types, access parts of other types

// interface Car {
//   make: string;
//   model: string;
//   year: number;
//   color: {
//     red: string;
//     green: string;
//     blue: string;
//   };
// }

// let color: Car['color'] | Car['year'] | Car['color']['green']
// color = {
//     red: '1',
//     green: '2',
//     blue: '2'
// }
// color = 100

// try also with union

// type registry pattern, almost like with global

// module declaration
// declare module "./lib/registry" {}

// use case
// we are building data library and fetch function, but we don't know what kind of data will be fetched
// import { fetchRecord } from "./src/lib/registry";
// // returns a Book
// fetchRecord("book", "bk_123");
// // returns a Magazine
// fetchRecord("video", "mz_456");
// // maybe should refuse to compile
// fetchRecord("article", "a_123");
