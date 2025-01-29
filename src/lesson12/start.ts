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

// const phoneList = [
//   { customerId: "0001", areaCode: "321", num: "123-4566" },
//   { customerId: "0002", areaCode: "174", num: "142-3626" },
//   { customerId: "0003", areaCode: "192", num: "012-7190" },
//   { customerId: "0005", areaCode: "402", num: "652-5782" },
//   { customerId: "0004", areaCode: "301", num: "184-8501" },
// ];

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

// interface PhoneInfo {
//   customerId: string;
//   areaCode: string;
//   num: string;
// }

// function listToDict(
//   list: PhoneInfo[], // take the list as an argument
//   idGen: (arg: PhoneInfo) => string // a callback to get Ids
// ): { [k: string]: PhoneInfo } {
//   // create an empty dictionary
//   const dict: { [k: string]: PhoneInfo } = {};

//   // Loop through the array
//   list.forEach((element) => {
//     const dictKey = idGen(element);
//     dict[dictKey] = element; // store element under key
//   });

//   // return the dictionary
//   return dict;
// }

// const result = listToDict(phoneList, (item) => item.customerId);

// console.log("results", result);

// function listToDict2<T>(
//   list: T[],
//   idGen: (arg: T) => string
// ): { [k: string]: T } {
//   const dict: { [k: string]: T } = {};
//   return dict;
// }

// function wrapInArray<T>(arg: T): [T] {
//   return [arg];
// }

//   [{ name: "Bart" }, { name: "Bartlomiej" }], (item) => item.name;
