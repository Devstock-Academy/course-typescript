// TypeScript - typed syntactic superset of JavaScript
// Compiles to JS
// build time vs runtime

function add(a: number, b: number) {
  console.log(a + b);
  return a + b;
}

add(10, 20);

add(10, "20");

add(10, null);

add(undefined, null);

add(() => {}, "null");
