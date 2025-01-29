function timeout(n: number) {
  return new Promise((res) => setTimeout(res, n));
}

export async function addNumbers(a: number, b: number) {
  await timeout(500);
  return a + b;
}

const a: number = 10;
const b: number = 10;

class Foo {
  static #bar = 3;
  static getValue() {
    return Foo.#bar;
  }
}

//== Run the program ==//
(async () => {
  console.log(await addNumbers(Foo.getValue(), 4));
})();
