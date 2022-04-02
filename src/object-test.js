'use strict';

let title;
let rate = 40;
if(rate >= 40 && rate < 60){
  title = 'kms';
}else{
  title = 'ms'
}
// Creation object by leteral
const user = {
  firstName: 'John',
  'last Name': 'Doe',
  display: false,
  0: true,
  break: 20,
  [title]: 30,
  6: 50,
  1: 15,
  say: function(){
    console.log('Hello');
  },
  obj: [1,2,3, [1,2,]],
};
const say = function(){
  console.log('Hello');
}
//  Copy object
const student = user;
const person = Object.assign(user, {firstName: 'Jane'});
// console.table(person);

// for(let key in user) {
//   console.log(`${key}: ${user[key]}`);
// }
// Delete property
delete user.display ;
console.log(user);
// console.log(user['last Name']);
// console.table(user)
// console.log('break' in user);
// console.log(student);

// console.dir(user);

// console.error('Something went wrong');
// console.warn('Something went wrong');
// console.info('Something went wrong');
// const cat = {
//   name: 'Vasya',
//   breed: 'sphinx',
//   isSleeping: true,
//   age: 5,
// }
// Constructor
function Cat(name, age, breed) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.myau = function(){
    console.log(`I am ${this.name}`);
  }
}
// Creation of objects by constructor
const myCat = new Cat('Sonya', 6, 'pers');
const herCat = new Cat('Skilsy', 10, 'sphinx')
console.log(myCat);
console.log(herCat);
// Call method on object
herCat.myau();
myCat.myau();

function getThis(){
  console.log(`My this is ${this}`);
}
getThis();

// console.log(myCat.myau());
// console.log(user);
const dog = {
  name: 'Dog',
  gav(){
    console.log(`${this} say gav`);
  }
}
dog.gav();