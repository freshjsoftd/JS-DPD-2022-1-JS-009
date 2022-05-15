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
// const button = document.querySelector('button');
// console.log(button);
async function asyncFetch() {
	const url2 = 'https://api.privatbank.ua/p24api/pboffice?json&city=Днепропетровск&address=Карла Маркса';
	const headers = new Headers();
	headers.append('Accept', 'application/json');
	headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	const mode = 'no-cors';

	const init = {
		method: 'GET',
		headers: headers,
		mode: mode,
		credentials: 'same-origin',
	}
	const request = new Request(url2, init);
	try {
		const response = await fetch(request);
		if(!response.ok) throw new Error(response.statusText);
		const officies = await response.json();
		localStorage.setItem('officies', JSON.stringify(officies));
		console.log(officies);
	} catch (error) {
		console.log(error);
	} 
}
asyncFetch();
// const date = new Date().toLocaleDateString('uk');
// console.log(date);
// button.textContent = date
// button.addEventListener('click', asyncFetch);
// localStorage.clear();

// {
//   "name": "Филиал \"Запорожское РУ\", Преображенское отделение",
//   "state": "Запорожская",
//   "id": "1591",
//   "country": "Украина",
//   "city": "Запорожье",
//   "index": "69035",
//   "phone": "8(061) 213-09-18, 289-85-25",
//   "email": "julija.tjuleneva@pbank.com.ua",
//   "address": "ул Мира 10"
// }