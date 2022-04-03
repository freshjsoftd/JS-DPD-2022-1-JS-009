'use strict';

const arr = [1, 'TSP', null, NaN, Infinity, -Infinity, test, {}];
const obj = {
  fName: 'vasya',
  lName: 'pupkin',
  age: 30,
}
console.log(arr);
console.log(obj);
let n = arr[5];
console.log(n);

function test(){
  return 'test';
}
const arr1 = Array(20, 10, 'str');
console.log(arr1);
const numArr = [1,3,7,5,9,12];
console.log(numArr.push(14,16));
console.log(numArr);
console.log(numArr.unshift(-1, 0));
console.log(numArr);
console.log(numArr.pop());
console.log(numArr);
console.log(numArr.shift());
console.log(numArr);

let str2 = arr.join();
console.log(str2);
// console.log(arr.reverse());
console.log(numArr.sort((a, b) => a - b));

const newArr = arr.splice(2, 4, 25, 'Malong', true);
console.log(newArr);
console.log(arr);
