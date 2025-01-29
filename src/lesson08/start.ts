type JSONObject = any;
type JSONArray = any;
type JSONValue = Primitives;

function isValidJSON(arg: JSONValue) {}

// NEGATIVE test cases (must fail)
// @ts-expect-error
isValidJSON(Symbol("symbol"));
// @ts-expect-error
isValidJSON(new Date());
// @ts-expect-error
isValidJSON(/regex/);
// @ts-expect-error
isValidJSON(new Map());
// @ts-expect-error
isValidJSON(new Set());

// POSITIVE test cases
isValidJSON([{ id: 1 }, { id: 2 }]); // Array of objects
isValidJSON("A valid JSON string");
isValidJSON(3.14159); // Number
isValidJSON(false); // Boolean
isValidJSON(true); // Boolean
isValidJSON(null); // Null
isValidJSON({ name: "ChatGPT", features: ["language", "knowledge"] }); // Nested object

// Additional Test Cases

// NEGATIVE
// @ts-expect-error
isValidJSON(function () {
  return "not JSON";
});
// @ts-expect-error
isValidJSON(undefined);
// @ts-expect-error
isValidJSON(new Error("Error object"));
// @ts-expect-error
isValidJSON(Buffer.from("buffer data")); // Node.js Buffer
// @ts-expect-error
isValidJSON(document.createElement("div")); // DOM element (in browser environment)

// POSITIVE
isValidJSON({ nested: { level1: { level2: "deep" } } });
isValidJSON([1, "two", null, { three: 3 }]); // Mixed array
isValidJSON({ emptyObject: {}, emptyArray: [] });
isValidJSON({ number: 0, string: "", nullValue: null });
