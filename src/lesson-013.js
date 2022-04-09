'use strict';

const arr1 = [1, 2, 3, 4];
arr1.fName = 'Vasya';
for (const val in arr1) {
  console.log(val);
  console.log(typeof val);

}