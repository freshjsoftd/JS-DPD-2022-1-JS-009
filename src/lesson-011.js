'use strict';
// let num = Number('123@');
// console.log(num);
// let num1 = parseInt('456');
// console.log(num1);
// let str = String(789);
// console.log(str);
// let bool = 123;
// console.log(!!bool);
// let sum = (2 + 3)/2
// let sum1 = num === 10 ? 20 : 10
// if(num && !bool){
//   console.log(num);
// }else {
//   console.log(false);
// }
// num1 = num1 + 3;
// console.log(num1);
// num1 +=3;
// console.log(++num1);
// num1++;
// num1--;
// ++num1;
// console.log(num || !bool || !!num);
// let num2 = 20;
// for(let i = 0; i < num2; i++) {
//   if(i === 15) break;
//   console.log(i);
// }
// const arrow = (a, b) => a + b;
// console.log(arrow(20, 30));
// const user = {
//   // fName: 'Vasya',
//   lName: 'Pupkin',
//   age: 30,
//   'first name': 'Vasya',
// }
// user.fName ='Yan';
// user.gender = 'Male';
// console.log(user.age);
// delete user.fName;
// console.log(user['first name']);
// for (const key in user) {
//   console.log(`${key} = ${user[key]}`);
// }
// function Person(fName, age){
//   this.fName = fName;
//   this.age = age;
// }
// const vasya = new Person('Vasya', 25);
// console.log(vasya);


function getObj() {
	return this;
}
function Country(
	title = 'Ukraine',
	capital = 'Kiyv',
	area = 8e5,
	population = 4.9e6,
) {
  this.title = title;
  this.capital = capital;
  this.area = area + ' square km';
  this.population = population + ' persons';
  this.getCountry = getObj;
}
// ==============================================
// Inheritance
// Country.prototype.getCountry = getObj;
// ==============================================

const ukraine = new Country();
const usa = new Country('USA', 'Washington', 1e6, 15e6);
function printCountryPropeties(country){
  for(let key in country) {
    if(typeof country[key] !== 'function')
    console.log(`${key}: ${country.getCountry()[key]}`);
  }
}
console.log(usa);

// debugger
printCountryPropeties(usa);
console.log('====================');
printCountryPropeties(ukraine);



