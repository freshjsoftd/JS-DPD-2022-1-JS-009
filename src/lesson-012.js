'use strict';

// const obj = {
//   fName: 'vasya',
//   lName: 'pupkin',
//   age: 30,
// }

// const numArr = [1,3,7,5,9,12];
// for (let i = 0; i < numArr.length; i++) {
//   numArr[i] +=3;
// }
// console.log(numArr);
// const result = [];
// numArr.forEach((elem) => {
//   result.push(elem + 10)
// });
// console.log(result);
// const words = ['one', 'two','three', 'four', 'five', 'six', 'seven'];
// words.forEach((word, index) => console.log(`Index of ${word} is ${index}`));
// ================= 
// function myForEach(arr, callback, thisArg) {
//   for(let i = 0; i < arr.length; i++) {
//     callback.call(thisArg, arr[i], i, arr)
//   }
// }
// myForEach(words, (word, index) => console.log(`Index of ${word} is ${index}`));

// const strArray = ['1', '2', '3', '4', '5', '6'];
// const returnInt = (elem) => parseInt(elem);
// const integerArray = strArray.map(returnInt);
// console.log(integerArray);

// function myMap(arr, callback, thisArg) {
//   const result = [];
//   for(let i = 0; i < arr.length; i++) {
//     result.push(callback.call(thisArg, arr[i], i, arr));
//   }
//   return result;
// }

// const arr1 = [10,20,30];
// console.log(myMap(arr1, (elem) => elem/2));
// console.log(arr1.map((elem) => elem/2));