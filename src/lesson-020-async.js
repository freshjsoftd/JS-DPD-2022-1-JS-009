'use strict';

const myRequest = new Request('https://jsonplaceholder.typicode.com/todos');
fetch(myRequest)
      .then((response) => {
        if(response.ok){
          console.log('Ok');
        }
        return response.json();
      })
      .then((jsonResponse) => localStorage.setItem('todos', JSON.stringify(jsonResponse)))

const todos = JSON.parse(localStorage.getItem('todos'));
console.log(todos);

