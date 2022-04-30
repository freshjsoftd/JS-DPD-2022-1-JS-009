// 'use strict';

function random(number) {
  return Math.floor(Math.random()*number);
}

function bgChange() {
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

const container = document.querySelector('#container');
container.addEventListener('click', event => {
  console.log(event.target);
  console.log(event.currentTarget);
  return event.target.style.backgroundColor = bgChange();
}
)
