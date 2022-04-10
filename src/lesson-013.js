'use strict';
import hiJS from "./lesson-014.js";

const arr = [1, 2, 3, 4, 5, 2, 5, 1];
const setArr = new Set(arr);
console.log(arr);
setArr.add('Donic');
console.log(setArr.has('Donic'));
console.log(Array.from(setArr.values()));

const obj = {
  lName: 'Pup',
  fName: 'Vas',
  age: 40,
  age: 25,
};

// obj.age = 30;
console.log(obj);
hiJS();