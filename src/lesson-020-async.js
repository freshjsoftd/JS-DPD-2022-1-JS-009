'use strict';

// const myRequest = new Request('https://jsonplaceholder.typicode.com/todos');
// fetch(myRequest)
//       .then((response) => {
//         if(response.ok){
//           console.log('Ok');
//         }
//         return response.json();
//       })
//       .then((jsonResponse) => localStorage.setItem('todos', JSON.stringify(jsonResponse)))
//       .catch((error) => {
//         console.log(error);
//       })

// const todos = JSON.parse(localStorage.getItem('todos'));
// console.log(todos);

// function sum(a,b){
//   return new Promise((resolve) =>{
//     const result = a + b;
//     resolve(result);
//   })
// }
const button = document.querySelector('button');
async function asyncFetch() {
	try {
		const response = await fetch(
			'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
		);
		const currency = await response.json();
		localStorage.setItem('currency', JSON.stringify(currency));
		console.log(currency);
	} catch (error) {
		console.log(error.name);
		console.log(error.message);
	} finally {
		console.log('Hello');
	}
}
// asyncFetch();
button.addEventListener('click', asyncFetch);
// localStorage.clear();
const date = new Date().toLocaleDateString('us');
console.log(date);
button.textContent = date