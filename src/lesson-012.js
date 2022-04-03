'use strict';

const obj = {
  fName: 'vasya',
  lName: 'pupkin',
  age: 30,
}

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
const words = ['one', 'two','three', 'four', 'five', 'six', 'seven'];
// words.forEach((word, index) => console.log(`Index of ${word} is ${index}`));
// ================= 
function myForEach(arr, callback, thisArg) {
  for(let i = 0; i < arr.length; i++) {
    callback.call(thisArg, arr[i], i, arr)
  }
}
myForEach(words, (word, index) => console.log(`Index of ${word} is ${index}`));
