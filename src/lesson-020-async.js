'use strict';

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Is done'), 2000);
//   // setTimeout(() => reject('Something went wrong'), 2000);
// })
// .then((value) => value)//
// .then((result) => result)
// .finally(console.log('The end'))
// .then((res) => console.log(`${res}$`))
// .catch((err) => console.log(err))
// console.log(promise);


function sum(a, b){
  return new Promise((resolve) => {
    const result = a + b;
    resolve(result);
  })
}
console.log(sum(5,7));
sum(5, 7)
  .then((value) => value + '$')
  .then((res) => console.log(res))
