// generics - parametrize types

// const phones: {
//   [k: string]: {
//     customerId: string;
//     areaCode: string;
//     num: string;
//   };
// } = {};

// phones.home;
// phones.work;
// phones.fax;
// phones.mobile;

// const phoneDict = {
//   "0001": {
//     customerId: "0001",
//     areaCode: "321",
//     num: "123-4566",
//   },
//   "0002": {
//     customerId: "0002",
//     areaCode: "174",
//     num: "142-3626",
//   },
//   /*... */
// };

interface PhoneInfo {
  customerId: string;
  areaCode: string;
  num: string;
}

interface PhoneInfo2 {
  id: string;
  code: string;
  number: string;
}

const phoneList: PhoneInfo[] = [
  { customerId: "0001", areaCode: "321", num: "123-4566" },
  { customerId: "0002", areaCode: "174", num: "142-3626" },
  { customerId: "0003", areaCode: "192", num: "012-7190" },
  { customerId: "0005", areaCode: "402", num: "652-5782" },
  { customerId: "0004", areaCode: "301", num: "184-8501" },
];

const phoneList2: PhoneInfo2[] = [
  { id: "0001", code: "321", number: "123-4566" },
  { id: "0002", code: "174", number: "142-3626" },
  { id: "0003", code: "192", number: "012-7190" },
  { id: "0005", code: "402", number: "652-5782" },
  { id: "0004", code: "301", number: "184-8501" },
];

// console.log("results1", result1);
// console.log("results", result);

function listToDict2<T>(
  list: T[],
  idGen: (arg: T) => string
): { [k: string]: T } {
  const dict: { [k: string]: T } = {};
  return dict;
}

function listToDict<T>(
  list: T[], // take the list as an argument
  idGen: (arg: T) => string // a callback to get Ids
): { [k: string]: T } {
  // create an empty dictionary
  const dict: { [k: string]: T } = {};

  // Loop through the array
  list.forEach((element) => {
    const dictKey = idGen(element);
    dict[dictKey] = element; // store element under key
  });

  // return the dictionary
  return dict;
}

const result = listToDict(phoneList, (item) => item.customerId);
const result1 = listToDict(phoneList2, (item) => item.id);
// const result2 = listToDict([{ name: "Bart" }, { name: "Bartlomiej", age: 'a' }], (item) => item.name)

function wrapInArray<T>(arg: T): [T] {
  return [arg];
}

wrapInArray(10);
wrapInArray("11");
wrapInArray(new Date());
