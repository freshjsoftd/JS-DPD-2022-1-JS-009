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

// const numb = [1,2,3,8,9,256,3167];
// console.log(numb.filter((elem) => elem % 2 === 0));
// //  Our implement
// function myFilter(arr, callback, thisArg){
//   const result = [];
//   for(let i = 0; i < arr.length; i++){
//     if(callback.call(thisArg, arr[i], i, arr)){
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// const evenArray = myFilter(numb, (elem) => elem % 2 === 0);
// console.log(evenArray);

// const arrNumb = [1,3,8,9];
// console.log(arrNumb.some((elem) => elem % 2 === 0));
// // =================================
// const mySome = (arr, callback, thisArg) => {
//   for(let i = 0; i < arr.length; i++){
//     if(callback.call(thisArg, arr[i], i, arr)){
//       return true;
//     }
//   }
//   return false;
// }
// console.log(mySome(arrNumb, (elem) => elem % 2 === 0));

const matrix = [
  [0, 1],
  [2, 3],
  [4, 5]
];
console.log(matrix.reduce((acum, curr) => acum.concat(curr)));
// impl
const myReduce = (arr, callback, startValue) => {
  let result = startValue || arr[0];
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i], i, arr);
  }
  return result;
}
console.log(myReduce(matrix, (acum, curr) => acum.concat(curr), []));