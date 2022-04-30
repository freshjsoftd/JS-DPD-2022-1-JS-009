'use strict';
const body = document.body;
const rootSquare = document.getElementById('square1');
const secondSquare = document.getElementById('square2');
const thirdSquare = document.getElementById('square3');

rootSquare.addEventListener('click', () => console.log('1'), true);
secondSquare.addEventListener('click', (e) => {
	// e.stopPropagation();
	// e.stopImmediatePropagation();
	console.log('2')
});
secondSquare.addEventListener('click', (e) => {
	// e.stopPropagation();
	// e.stopImmediatePropagation();
	console.log('2-2')
});
thirdSquare.addEventListener('click', (e) => {
	// e.stopPropagation();
	console.log('3');
});
body.addEventListener('click', () => console.log(`body`), true);
