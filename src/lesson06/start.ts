// union OR
// intersection AND

// Evens = { 2, 4, 6, 8 }
// Numbers = { 1, 2, 3, 4, 5 }

// type Evens = 2 | 4 | 6 | 8;
// type OneThroughSix = 1 | 2 | 3 | 4 | 5 | 6;

// Evens | Numbers => pipe operator, union
// Evens & Numbers => ampersand operator, intersection

// Union types often appear where control flow can produce a different value for different code paths.

// heads or tails, orzeł czy reszka
// function flipCoin() {
//   if (Math.random() > 0.5) return "heads"; // the "heads" branch
//   return "tails"; // the "tails" branch
// }

// const outcome = flipCoin();

// let's combine it with tuple, [0] - heads/success or tails/error, [1] - user, error
// const success = [
//   "success",
//   { name: "Bart", email: "xxx@gmail.com" },
// ] as const;
// const fail = ["error", new Error("Something went wrong!")] as const;

// function maybeGetUserInfo() {
//   if (flipCoin() === "heads") {
//     return success;
//   } else {
//     return fail;
//   }
// }

// const outcome2 = maybeGetUserInfo();
// destructure outcome, and check autocomplete

//  union
function printEven(even: Evens): void {}
function printLowNumber(lowNum: OneThroughSix): void {}
function printEvenNumberUnder5(num: 2 | 4): void {}
function printNumber(num: number): void {}

let x = 5 as Evens | OneThroughSix;

// What does Evens | OneThroughSix accept as values?
let evenOrLowNumber: Evens | OneThroughSix;
evenOrLowNumber = 6; //✔️ An even
evenOrLowNumber = 3; //✔️ A low number
evenOrLowNumber = 4; //✔️ A even low number

// asymmetry
printEven(x);
printLowNumber(x);
printEvenNumberUnder5(x);
printNumber(x);

// const outcome = maybeGetUserInfo();
// const [first, second] = outcome;

// if (first === "error") {
//     // magic
// } else {
//     // magic?
// }

// intersection
// function printEven(even: Evens): void {}
// function printLowNumber(lowNum: OneThroughSix): void {}
// function printEvenNumberUnder5(num: 2 | 4 | 6): void {}
// function printNumber(num: number): void {}

// let y = 4 as Evens & OneThroughSix;

// // let y: 2 | 4

// // What does Evens & OneThroughSix accept as values?
// let evenAndLowNumber: Evens & OneThroughSix;
// evenAndLowNumber = 6 //✔️ An even
// evenAndLowNumber = 3 //✔️ A low number
// evenAndLowNumber = 4 //✔️ A even low number

// // What requirements can `Evens & OneThroughSix` meet?
// // asymmetry
// printEven(y)
// printLowNumber(y)
// printEvenNumberUnder5(y)
// printNumber(y)
