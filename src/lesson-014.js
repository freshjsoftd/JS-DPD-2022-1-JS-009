'use strict';
const arr1 = [];
const arr2 = [];

function MyArray(){
  this.length = 0;
  this.push = function push(item) {
    this[this.length] = item;
    return ++this.length;
  }
}

const myArr1 = new MyArray();
const myArr2 = new MyArray();

// Object with logic
function MyArrayProto(){
  // push
  this.push = function push() {
    if(arguments){
      for(let i = 0; i < arguments.length; i++){
        this[this.length++] = arguments[i];
      }
    }
    return this.length;
  }
}
// pop
this.pop = function pop() {
  if(this.length === 0){
    return;
  }
  const lastItem = this[this.length -1];
  delete this[--this.length];
  return lastItem;
}
// forEach
this.forEach = function forEach(fn) {
  for(let i = 0; i < this.length; i++){
    fn(this[i], i, this)
  }
}
// some
this.some = function some(fn){
  for(let i = 0; i < this.length; i++){
    if(fn(this[i], i, this)){
      return true;
    }
    return false;
  }
}
// filter
this.filter = function filter(fn){
  const newArray = new MyArray();
  for(let i = 0; i < this.length; i++){
    if(fn(this[i], i, this)){
      newArray.push(this[i]);
    }
  }
  return newArray;
}

