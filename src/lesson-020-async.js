'use strict';

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.responseType = 'application/json';
xhr.send();
xhr.onload = () => {
  console.log(xhr.response);
}

