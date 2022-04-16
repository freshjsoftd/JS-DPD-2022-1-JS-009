// 'use strict';

class Transport{

  constructor(brand, model){
    this.brand = brand;
    this.model = model;
  }
  move(){
    console.log('I can move');
  }
}

class Plaine extends Transport{
  move(){
    console.log('I can fly');
  }
}
class Ship extends Transport{

}


class Car extends Transport{

  static isCar(obj){
    return obj instanceof this;
  }

  // #price = 1000; 
 constructor(brand, model, price, engineVolume){
   super(brand, model);
   this.brand = brand;
   this.model = model;
   this.price = price;
   this.engineVolume = engineVolume;
 }

 getPrice(){
   return this.#addPriceUnit();
 }

 setPrice(price){
   if(price > 0){
     this.price = price;
   }
 }

 #addPriceUnit(){
   return `${this.price} $`
 }

 drive(city){
  console.log(`I drive ${city}`);
 }

 move(){
   super.move()
   console.log('I can drive');
 }
}

const honda = new Car('Honda', 'CR-V', 42000, 2);
const toyota = new Car('Toyota', 'Camry', 46000, 2.5);
const bmw = new Car('BMW', 'X5', 80000, 3.5);
const audi = new Car('Audi', 'A6', 53000, 3);

const boing = new Plaine('Boing', "747")

const cars =[honda, toyota, bmw, audi];
console.log(cars.sort((a, b) => a.price > b.price ? 1 : -1));


console.log(honda);

honda.drive('Kiev');

honda.setPrice(-50000);
console.log(honda.getPrice());
audi.move();

console.log(Car.isCar(honda));

console.log(boing);



