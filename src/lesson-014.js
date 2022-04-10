'use strict';
const arr1 = [];
const arr2 = [];

function MyArray() {
	this.length = 0;
	for (let i = 0; i < arguments.length; i++) {
		this.push(arguments[i]);
	}
}
MyArray.prototype = new MyArrayProto();

const myArr1 = new MyArray(1, 3, 'str');
const myArr2 = new MyArray();

// Object with logic
function MyArrayProto() {
  // some
	this.some = function some(fn) {
		for (let i = 0; i < this.length; i++) {
			if (fn(this[i], i, this)) {
				return true;
			}
			return false;
		}
	};
	// push
	this.push = function push() {
		if (arguments) {
			for (let i = 0; i < arguments.length; i++) {
				this[this.length++] = arguments[i];
			}
		}
		return this.length;
	};

	// pop
	this.pop = function pop() {
		if (this.length === 0) {
			return;
		}
		const lastItem = this[this.length - 1];
		delete this[--this.length];
		return lastItem;
	};
	// forEach
	this.forEach = function forEach(fn) {
		for (let i = 0; i < this.length; i++) {
			fn(this[i], i, this);
		}
	};
	
	// filter
	this.filter = function filter(fn) {
		const newArray = new MyArray();
		for (let i = 0; i < this.length; i++) {
			if (fn(this[i], i, this)) {
				newArray.push(this[i]);
			}
		}
		return newArray;
	};
	// map
	this.map = function map(fn) {
		const result = new MyArray();
		for (let i = 0; i < this.length; i++) {
			result.push(fn(this[i], i, this));
		}
		return result;
	};
	
}
// isArray
MyArray.isMyArray = function (obj) {
  return obj instanceof MyArray;
};


// HW country constructor
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
  // this.getCountry = function(){
  //   return this.capital
  // };
}
// ==============================================
// Inheritance
Country.prototype.getCountry = getObj;
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