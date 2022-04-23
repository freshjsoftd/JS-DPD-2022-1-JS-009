const body = document.body;
const html = document.documentElement;
const imgs = document.images;
// const body = document.body;
const headerOne = document.getElementsByTagName('h1');
const divWr = document.getElementsByClassName('wrapper');
const idPar = document.getElementById('first-par');
const wrap = document.querySelector('.wrapper');
const wraps = document.querySelectorAll('.wrapper');
const container = document.querySelector('div.container');
// Create
// header
const div = document.createElement('div');
const h1 = document.createElement('h1');
h1.textContent = 'CREATE AN ACCOUNT';
h1.style.color = 'white';
// const divText = document.createTextNode('Hi everybody')
// div.appendChild(divText);
div.textContent = 'Hi everybody';
div.className = 'wrapper';
div.classList.add('article', 'section');
div.classList.toggle('article');
div.classList.toggle('article');
div.classList.toggle('article');
// container.appendChild(div);
// Replace
// container.replaceChild(div, idPar);
container.insertBefore(div, idPar);
body.style.background = 'teal';
idPar.style.color = 'red'
idPar.style.fontSize = '40px'
console.log(headerOne);
console.dir(body);
console.log(wrap);
console.log(wraps);
console.log(divWr);
console.dir(idPar);
console.log(imgs);

console.log();
// update
// Append