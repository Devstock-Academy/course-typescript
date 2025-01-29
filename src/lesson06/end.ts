// union OR
// intersection AND

// Evens = { 2, 4, 6, 8 }
// Numbers = { 1, 2, 3, 4, 5 }

// Evens | Numbers => pipe operator, union
// Evens & Numbers => ampersand operator, intersection

// Union types often appear where control flow can produce a different value for different code paths.

// heads or tails, orzeł czy reszka
type Coin = "heads" | "tails";
function flipCoin(): Coin {
  return Math.random() > 0.5 ? "heads" : "tails";
}

// const outcome = flipCoin();

// let's combine it with tuple, [0] - heads/success or tails/error, [1] - user, error
const success = ["success", { name: "Bart", email: "xxx@gmail.com" }] as const;

const fail = ["error", new Error("Something went wrong!")] as const;

function maybeGetUserInfo() {
  if (flipCoin() === "heads") {
    return success;
  } else {
    return fail;
  }
}

// const outcome2 = maybeGetUserInfo();

// if (outcome2[1] instanceof Error) {

// } else {
//     outcome2[1].email;
// }
// destructure outcome, and check autocomplete

type Evens = 2 | 4 | 6 | 8;
type OneThroughSix = 1 | 2 | 3 | 4 | 5 | 6;

//  union
// function printEven(even: Evens): void {}
// function printLowNumber(lowNum: OneThroughSix): void {}
// function printEvenNumberUnder5(num: 2 | 4): void {}
// function printNumber(num: number): void {}

// let n = 5 as Evens
// What does Evens | OneThroughSix accept as values?
// let evenOrLowNumber2: Evens | OneThroughSix;
// evenOrLowNumber2 = 9; //✔️ An even
// evenOrLowNumber2 = 3; //✔️ A low number
// evenOrLowNumber2 = 4; //✔️ A even low number

// asymmetry
// printEven(n);
// printLowNumber(n);
// printEvenNumberUnder5(n);
// printNumber(n);

const outcome = maybeGetUserInfo();
const [first, second] = outcome;

if (first === "error") {
  second;
  // magic
} else {
  second;
  // magic?
}

// intersection
function printEven(even: Evens): void {}
function printLowNumber(lowNum: OneThroughSix): void {}
function printEvenNumberUnder5(num: 2 | 4 | 6): void {}
function printNumber(num: number): void {}

let y = 4 as Evens & OneThroughSix;

// let y: 2 | 4

// What does Evens & OneThroughSix accept as values?
let evenAndLowNumber: Evens & OneThroughSix;
evenAndLowNumber = 6; //✔️ An even
evenAndLowNumber = 3; //✔️ A low number
evenAndLowNumber = 4; //✔️ A even low number

// What requirements can `Evens & OneThroughSix` meet?
// asymmetry
printEven(y);
printLowNumber(y);
printEvenNumberUnder5(y);
printNumber(y);
