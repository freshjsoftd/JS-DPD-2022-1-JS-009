'use strict';

// let age = Symbol('age');
// let age1 = Symbol('age');



// user[age] = 50;
// console.log(user.age);
// console.log(user[age]);

// for (const key in user) {
//   console.log(key);
//   }
// console.log(Object.keys(user));
function getArgs(){
  return arguments;
}

const user = {
  fName: 'Vasya',
  lName: 'Pupkin',
  age: 30,
}
const person = {
  fName: 'Petya',
  lName: 'Pyatov',
  age: 20}

const getArrowArgs = (...args) => args;
console.log(getArgs());
const arrFromArgs = getArrowArgs(1, 56, 'str')
const arr1 = ['Domic', 'Stiga']
const sumArray = [...arrFromArgs, ...arr1];
console.log(sumArray);
const user1 = {...user};

let {fName: firstName, lName: lastName, age} = user;
let {fName: personName, lName: pesonName, age: pAge} = person;


let [oneTr, two,,three] = sumArray;

console.log(firstName, lastName, age);
console.log(personName, pesonName, pAge);
console.log(two, oneTr,  three);

let x = 20;
let y = 30;
[x, y] = [y, x];

// let temp = x;
// x = y;
// y = 20;
console.log(x, y);
console.log(`X + Y = ${x + y}`);