'use strict';

function Player(fName, lName, rate, age, city){
  this.fName = fName;
  this.lName = lName;
  this.rate = rate;
  this.age = age;
  this.city = city;
}
const maLong = new Player('Ma', 'Long', 3000, 35, 'Odessa');
const xuXin = new Player('Xu', 'Xin', 2500, 30, 'Kiev');
const kokiNiva = new Player('Koki', 'Niva', 2000, 25, 'Zaporozhie');
const players = [maLong, xuXin, kokiNiva];
function getProps(limAge){
  if(this.age > limAge){
    console.log(`${this.fName} ${this.lName} is too mutch old`);
  }else{
    for(const key in this){
      console.log(`${key} = ${this[key]}`);
    }
  }
}
// call(), apply(), bind()
const limAge = 30;
for(let i = 0; i < players.length; i++){
  getProps.apply(players[i], [limAge])
  console.log('=================');
}
const getPropsWithBind = getProps.bind(maLong);

getPropsWithBind()


