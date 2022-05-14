'use strict';
// POST
const postRequest = async () => {
	const url = 'https://jsonplaceholder.typicode.com/users';
	const body = {
		name: 'John Doe',
		username: 'John',
		email: 'john@typicode.com',
	};
	const headers = new Headers();
	headers.append('Content-Type', 'application/json');
	const init = {
		method: 'POST',
		body: JSON.stringify(body),
		headers: headers,
	};
	const request = new Request(url, init);
	try {
		const response = await fetch(request);
		if (!response.ok) throw new Error(response.statusText);
		const json = await response.json();
		console.log(json.id);
	} catch (error) {
    console.log(error);
  }
};
postRequest();
// PUT
const putRequest = async () => {
	const url = 'https://jsonplaceholder.typicode.com/users/1';
	const body = {
		name: 'Jane Smith',
		username: 'Jane',
		email: 'jane@typicode.com',
	};
	const headers = new Headers();
	headers.append('Content-Type', 'application/json');
	const init = {
		method: 'PUT',
		body: JSON.stringify(body),
		headers: headers,
	};
	const request = new Request(url, init);
	try {
		const response = await fetch(request);
		if (!response.ok) throw new Error(response.statusText);
		const json = await response.json();
		console.log(json);
	} catch (error) {
    console.log(error);
  }
};
putRequest();
// PATCH
const patchRequest = async () => {
	const url = 'https://jsonplaceholder.typicode.com/users/1';
	const body = {
    name: 'Jane Smith',
		email: 'jane-smith@typicode.com',
	};
	const headers = new Headers();
	headers.append('Content-Type', 'application/json');
	const init = {
		method: 'PATCH',
		body: JSON.stringify(body),
		headers: headers,
	};
	const request = new Request(url, init);
	try {
		const response = await fetch(request);
		if (!response.ok) throw new Error(response.statusText);
		const json = await response.json();
		console.log(json);
	} catch (error) {
    console.log(error);
  }
};
patchRequest();
// DELETE
const delRequest = async () => {
	const url = 'https://jsonplaceholder.typicode.com/users/2';
	const request = new Request(url);
	try {
		const response = await fetch(request);
		if (!response.ok) throw new Error(response.statusText);
		// const json = await response.json();
		console.log(response);
	} catch (error) {
    console.log(error);
  }
};
delRequest();
// GET
const getRequest = async () => {
	const url = 'https://jsonplaceholder.typicode.com/users/';
	
	const headers = new Headers();
	headers.append('Content-Type', 'application/json');
	const init = {
		method: 'GET',
		headers: headers,
	};
	const request = new Request(url, init);
	try {
		const response = await fetch(request);
		if (!response.ok) throw new Error(response.statusText);
		const json = await response.json();
    localStorage.setItem('users', JSON.stringify(json));
		console.log(json);
	} catch (error) {
    console.log(error);
  }
};
getRequest();
const users = JSON.parse(localStorage.getItem('users'));
console.log(users);
// Filter albums by username
const filterRequest = async () => {
	const url = 'https://jsonplaceholder.typicode.com/albums?userId=1';
	const request = new Request(url);
	try {
		const response = await fetch(request);
		if (!response.ok) throw new Error(response.statusText);
		const json = await response.json();
		console.log(json);
	} catch (error) {
    console.log(error);
  }
};
filterRequest();
// Nested resources
const nestedRequest = async () => {
	const url = 'https://jsonplaceholder.typicode.com/albums/2/photos';
	const request = new Request(url);
	try {
		const response = await fetch(request);
		if (!response.ok) throw new Error(response.statusText);
		const json = await response.json();
		console.log(json);
	} catch (error) {
    console.log(error);
  }
};
nestedRequest();