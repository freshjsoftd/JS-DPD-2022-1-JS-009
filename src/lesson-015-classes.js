// 'use strict';

class Car {

 constructor(brand, model){
   this.brand = brand;
   this.model = model;
 }

 drive(city){
  console.log(`I drive ${city}`);
 }
}

const honda = new Car('Honda', 'CR-V');
console.log(honda);

honda.drive('Kiev')



