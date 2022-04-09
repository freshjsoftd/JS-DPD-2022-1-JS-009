'use strict';

function getArg(a){
  let arg = arguments;
  return arg;
}
console.log(getArg(1,2,5,6, 'str'));
const arr = [];
console.log(arr);
for (const val of getArg(1,2,5,6, 'ste')) {
  console.log(val);
}
const arrArg = Array.from(getArg(1,2,5,6, 'str'));
console.log(arrArg);