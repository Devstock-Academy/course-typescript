// Callable types
// interface TwoNumberCalc {
//   (x: number, y: number): number;
// }

// type TwoNumberCalc2 = (x: number, y: number) => number;

// const add: TwoNumberCalc = (a, b) => a + b;

// const subtract: TwoNumberCalc2 = (x, y) => x - y;

// void - means ignore, it's not udefined...

// function printNames(names: string[]) {
//   console.log(names.join(","));
// }

// const x = printNames(["hello", "world"]);

// function invokeIn2(callback: () => undefined) {
//   setTimeout(callback, 2000);
// }
// function invokeIn3(callback: () => void) {
//   setTimeout(callback, 3000);
// }

// const values: number[] = [];
// invokeIn2(() => values.push(4));
// invokeIn3(() => values.push(4));

// function overload

// <iframe src="https://example.com" />
// <!-- // -->
// <form>
//   <input type="text" name="name" />
//   <input type="text" name="email" />
//   <input type="password" name="password" />
//   <input type="submit" value="Login" />
// </form>

// type FormSubmitHandler = (data: FormData) => void
// type MessageHandler = (evt: MessageEvent) => void

// function handleMainEvent(
//   elem: HTMLFormElement,
//   handler: FormSubmitHandler
// )
// function handleMainEvent(
//   elem: HTMLIFrameElement,
//   handler: MessageHandler
// )
// function handleMainEvent(
//   elem: HTMLFormElement | HTMLIFrameElement,
//   handler: FormSubmitHandler | MessageHandler
// ) {}

// const myFrame = document.getElementsByTagName("iframe")[0]

// const myForm = document.getElementsByTagName("form")[0]

// handleMainEvent(myFrame, (val) => {

// })
// handleMainEvent(myForm, (val) => {

// })

// handleMainEvent()

// this
// <button onClick="myClickHandler">Click Me!</button>

// function myClickHandler(event: Event) {
//   this.disabled = true;
// }
// myClickHandler(new Event("click")) // maybe ok?

// function myClickHandler(this: HTMLButtonElement, event: Event) {
//   this.disabled = true;
// }
// const myButton = document.getElementsByTagName("button")[0];
// const boundHandler = myClickHandler.bind(myButton);
// boundHandler(new Event("click")); // bound version: ok
// myClickHandler.call(myButton, new Event("click")); // also ok

// functions return types
// Promise<{ properties: string[] }

// async function getData(url: string) {
//   const resp = await fetch(url);
//   if (resp.ok) {
//     const data = (await resp.json()) as {
//       properties: string[];
//     };
//     return data;
//   }

//   //   return { properties: []}
// }

// function loadData() {
//   getData("https://example.com").then((result) => {
//     console.log(result.properties.join(", "));
//   });
// }
