'use strict';
// Tasks for practice
// Task#1
// Return array with max elements from every subarray
const matrix = [
  [1, 2, 3, 4], 
  [5, 18, 0, 112], 
  [3, 5, 12, 5], 
  [28, 9, 2, 34],
];
// console.log(matrix.map((elem) => elem.sort((a, b) => a > b ? 1 : -1)[elem.length - 1]));
//
// =============================================================================
// Task#2
// Create function return definite props from array of objects (person for example)
// Вернуть все определенные однотипные свойства из массива объектов,
// созданных одним конструктором.
// class Person {
//   constructor(name = 'John', age = 30, salary = 100){
//     this.name = name;
//     this.age = age;
//     this.salary = `${salary}$`;
//   }
// }
// const john = new Person();
// const julia = new Person('Julia', 25, 200);
// const ian = new Person('Ian', 40, 300);

// const arrayPersons = [john, julia, ian];

// const getPersonProps = (arr, prop) => {
//   // arr.forEach(person => console.log(`${person[prop]}`));
//   return arr.map((person => person[prop]))
// }
// console.log(getPersonProps(arrayPersons, 'salary'));

// Task#3
// Check string on polyndrom
// Написать функцию - проверку на полиндром.
// Пробелы в любой части фразы не участвуют в проверке.
// Функция не должна зависить от регистра букв.
// // 
const str = 'Аргентина манdfdит негра';
function checkPolyndrom(str){
  const regexp = /\s/ig;
  const newStr = str.trim().replace(regexp, '').toLowerCase();
  console.log(newStr);
  const result = newStr.split('').reverse().join('');
  console.log(result);
  if(newStr === result){
    return true;
  }
  return false;
}
console.log(checkPolyndrom(str));