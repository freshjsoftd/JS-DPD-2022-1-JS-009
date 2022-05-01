'use strict';
// console.log(navigator);
// console.log(history);
// console.log(location);
// location.href = "https://wikipedia.org";
// history.back()
// history.go(-2)
// function openWiki (){
//   open('https://wikipedia.org', '_self');
// }
// openWiki();
// const now = new Date();
// console.log(now.getDay());
function updateTime(){
  const time = document.getElementById('time');
  const now = new Date();
  // time.style.fontSize = '30px';
  time.textContent = `${now.getHours()}:
   ${now.getMinutes()}:
   ${now.getSeconds() < 10 ? ('0' + now.getSeconds()) : now.getSeconds()}`

}
const interId = setInterval(updateTime, 1000);
// clearInterval(interId);
const exp = new Date('05/05/22').toUTCString();
console.log(exp);
document.cookie = `login=master;expires=${exp}`
const object = {
  fName: 'Vasya',
  lName: 'Pupkin',
}

const arr = [1,2,9,7, undefined, undefined]

localStorage.setItem('login', 'master');
localStorage.setItem('signup', 'slave');
localStorage.setItem('vasya', JSON.stringify(object));

console.log(localStorage.getItem('login'));
console.log(JSON.parse(localStorage.getItem('vasya')));
localStorage.removeItem('si')
localStorage.removeItem('sign')
console.log(JSON.stringify(arr));
console.log(arr.join(','));
localStorage.clear();

class Person {
  constructor(name = 'John', age = 30, salary = 100){
    this.name = name;
    this.age = age;
    this.salary = `${salary}$`;
  }
}
const john = new Person();
const julia = new Person('Julia', 25, 200);
const ian = new Person('Ian', 40, 300);

const arrayPersons = [john, julia, ian];
console.log(JSON.stringify(arrayPersons));
localStorage.setItem('arrObj',JSON.stringify(arrayPersons))
console.log(JSON.parse(localStorage.getItem('arrObj')));
// let fName = elem.value


