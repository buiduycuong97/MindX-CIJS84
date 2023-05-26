// 1. so sánh let và const
// let a = 1;
// console.log(a);
// a = 2;
// console.log(a);

// const b = 1;
// console.log(b);
// b = 2;
// console.log(b);

// scope global
// let c = 1;
// const d = 2;

// scope code block, hàm
// {
//   let c = 1;
//   const d = 2;
// }
// console.log(c, d);

// const myFunc = () => {
//   let c = 1;
//   const d = 2;
// };
// myFunc();
// console.log(c, d);

// 2. arrow function
// const myFunc = () => {};
// // declaration function
// function myFunc() {}
// // expression function
// const myFunc = function () {};

// 3. module import export
// - module la 1 file js
// - package = nhieu module
// export, export default

// // 4.Spread & Rest Operator
// // spread
// const obj = {
//   0: "Nguyen van a",
//   1: 20,
// };
// // name: "Nguyen van a",age: 20,
// const arr = [1, 2, 3, "a", { sex: "male" }];
// // const newObj = { ...obj, address: "HN" };
// // const newObj = { name: "Nguyen van b",age: 20,  };
// // console.log(newObj);
// console.log({ ...arr });
// //deep copy & shallow copy

// //rest
// function sum(a, b, ...params) {
//   console.log(params);
//   let total = 0;
//   for (let i = 0; i < params.length; i++) {
//     total += params[i];
//   }
//   return total + a + b;
// }
// console.log(sum(1));

// 5.Reference & Primitive Data Types
// // Primitive
// "String,Number,Boolean,null,undefined,Symbol";
// "";
// const a = { name: "HN" };

// // console.log(a);
// // Reference
// const b = [1, 2];
// // Object
// // console.log(typeof a, typeof b);
// console.log(Array.isArray(b));

// 6. Array method
// const arr = [1, 2, 3];
// arr.map((curValue, index, curArr) => {
//   console.log("map", curArr);
// });

// for (let i = 0; i < arr.length; i++) {
//   console.log("for", arr[i]);
// }

// 7.Components, JSX, props, Children
