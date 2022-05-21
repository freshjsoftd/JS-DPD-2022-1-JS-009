'use strict';

// //Create data for testing
class Predators {
	constructor(age, name, weight, limbAmount) {
		this.age = age;
		this.name = name;
		this.weight = weight;
		this.limbAmount = limbAmount;
	}
	move() {
		console.log('I can run and climb trees');
	}
	say() {
		console.log('I can speak and scream');
	}
	eat() {
		console.log('I like vegetables and fruits');
	}
}

class Dogs extends Predators {
	constructor(age, name, weight, limbAmount, breed) {
		super(age, name, weight, limbAmount);
		this.breed = breed;
	}
  say() {
		console.log('I can speak gaw');
	}
	eat() {
		console.log('I like bones');
	}
}
const flags = {
  writable: false,
  enumerable: true,
  configurable: false,
}

const markiz = new Dogs(5, 'Markiz', 20, 4, 'Pudel');
// Object.defineProperty(markiz, 'breed', flags);
// Object.defineProperty(markiz, 'say', flags);
// // Object.defineProperty(markiz, 'smart', {value: 'true',
// //                                        writable: true, 
// //                                        enumerable: true,
// //                                       configurable: true});
// Object.defineProperties(markiz, {
//   smart: {value: true, writable: true},
//   height: {value: 30, enumerable: true }
// })
// //  delete markiz.breed;
// console.log(markiz);
// for (const prop in markiz) {
  
//     console.log(`${prop} is ${markiz[prop]}`);
  
// }
const obj = {
  fName: 'vas',
  age: 25,
}
// console.log(Object.getOwnPropertyDescriptor(markiz, 'breed'));

// const mark1 = Object.assign({}, markiz);
// console.log(mark1);
// console.log(Object.getOwnPropertyDescriptor(mark1, 'breed'));
// const mark2 = Object.defineProperties({}, 
//       Object.getOwnPropertyDescriptors(markiz));
// console.log(Object.getOwnPropertyDescriptors(mark2));

const arr = Object.create(new Dogs(), {breed: {value: 'dog', writable:true},
            age: {value: 17}});
const arr1 = []
console.log(obj);
console.log(Object.getOwnPropertyDescriptors(arr));
// Object.preventExtensions(markiz);
Object.seal(markiz);
// markiz.nik = 'Sobak'
// delete markiz.age
markiz.age = 2

