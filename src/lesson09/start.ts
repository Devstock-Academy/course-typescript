// Type queries - obtain type from value

// keyof - obtain type of all prop keys on a given interface
// not all keys are strings. e.x. Date
// & number | & number | & symbol

// typeof - extract type from a value
// async function main() {
//     const response = await Promise.all([
//         fetch("https://xxx.com"),
//         Promise.resolve("Interesting"),
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

// try also with union

// type registry pattern, almost like with global

// module declaration
// declare module "./lib/registry" {}

// use case
// we are building data library and fetch function, but we don't know what kind of data will be fetched
import { fetchRecord } from "./src/lib/registry";
// returns a Book
fetchRecord("book", "bk_123");
// returns a Magazine
fetchRecord("video", "mz_456");
// maybe should refuse to compile
fetchRecord("article", "a_123");
