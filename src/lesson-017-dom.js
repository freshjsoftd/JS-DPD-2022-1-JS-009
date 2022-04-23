const body = document.body;
const h1 = document.createElement('h1');
h1.className = 'header';
h1.textContent = 'CREATE ACCOUNT';
h1.id = 'header';
// Update
// h1.style.color = 'blue';
// h1.style.margin = 'auto';

// Append
body.appendChild(h1);
let htmlText = '<h1>Create smth</h1>';
body.innerHTML = htmlText