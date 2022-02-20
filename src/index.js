// const year = Number(prompt('Enter an year'));

// if (isNaN(year)) {
// 	console.log('Enter number, please');
// } else {
// 	year % 4 === 0 &&
// 		(year % 100 !== 0 || year % 400 === 0) &&
// 		console.log('year is leap');
// 	(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ||
// 		console.log('year is not leap');
// }
// outer:
// for(let i = 2; i < 10; i++) {
//   for(let j = 2; j < 10; j++){
//     if(i === 5) continue outer;
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }
// let a = Number(prompt('Enter number'));
// if(isNaN(a)){
//   console.log('Wrong number');
// }else{
//   let result = 0;
//   for(; a <= 400; a++){
// result += a;
//   }
//   console.log(result);
// }
// console.log(sum());

// function sum(a = 10, b = 15) {
//   return a + b;
// }

// const divide = () => 6 / 2;

// console.log(divide(12, 3));

// console.log(divide(20, 10));
// function foo(){
// return bar();
// }
// function bar(){
// return foo();
// }
// console.log('foo is first', foo());

// function printFizzBuzz(n) {
//   let res;
// 	for (let i = 0; i <= n; i++) {
// 		if (i % 3 === 0 && i % 5 === 0) {
// 			res = 'fizzbuzz';
// 		}else
// 		if (i % 3 === 0) {
// 			res ='fizz';
// 		}else
// 		if (i % 5 === 0) {
// 			res ='buzz';
// 		}else{
//       res = i;
//     }
//     console.log(res);
// 	}
// }
// printFizzBuzz(50);

// let res = 0;
// for (let i = 1; i < 20; i++) {
// 	const s = 0.02;
// 	const d = 0.5;
// 	let rad = 0;
// 	if (i === 1) {
// 		rad = d/2;
// 	} else {
// 		rad += 0.02;
// 	}
// 	let volume = 4/3*Math.PI*rad**3
// 	res += volume;
// }
// console.log(res);

