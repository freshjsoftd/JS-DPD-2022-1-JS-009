'use strict';

// get elements
const body = document.body;
const mainContainer = document.querySelector('.container');
const requiredElements = document.getElementsByClassName('required-field');
// create elements
const header = document.createElement('header');
const squadHelpLogoImg = document.createElement('img');
const loginBtn = document.createElement('button');
const divTitle = document.createElement('div');
const divFormContainer = document.createElement('div');
const divInputName = document.createElement('div');
const divInputEmail = document.createElement('div');
const divInputPassword = document.createElement('div');
const loginForm = document.createElement('form');
const titleHead = document.createElement('h1');
const titleParagraph = document.createElement('p');
const firstNameInput = document.createElement('input');
const lastNameInput = document.createElement('input');
const displayNameInput = document.createElement('input');
const emailInput = document.createElement('input');
const passwordInput = document.createElement('input');
const passwordConfirmInput = document.createElement('input');
// update elements
// header
header.className = 'header';
// logo
squadHelpLogoImg.setAttribute('src', './assets/imgs/squadhelp-logo.png');
squadHelpLogoImg.setAttribute('alt', 'logo');
squadHelpLogoImg.className = 'logo';
// Login button
loginBtn.textContent = 'Login';
loginBtn.id = 'login-btn';
// form
loginForm.className = 'form';
// div
divTitle.className = 'title';
divFormContainer.className = 'form-container';
// title
titleHead.textContent = 'CREATE AN ACCOUNT';
titleHead.className = 'title-head';
titleParagraph.textContent =
	'We always keep your name and email address private.';
titleParagraph.className = 'title-paragraph';
// input
firstNameInput.classList.add('text-type', 'required-field');
lastNameInput.classList.add('text-type', 'required-field');
displayNameInput.className = 'text-type';
passwordInput.classList.add('secure', 'required-field');
passwordConfirmInput.classList.add('secure', 'required-field');
emailInput.classList.add('email', 'required-field');
emailInput.setAttribute('type', 'email');
divInputName.className = 'input-wrapper';
divInputEmail.className = 'input-wrapper';
divInputPassword.className = 'input-wrapper';
// placeholder
firstNameInput.setAttribute('placeholder', 'First name');
firstNameInput.setAttribute('name', 'first-name');
// firstNameInput.value = 'My name';
lastNameInput.setAttribute('placeholder', 'Last name');
lastNameInput.setAttribute('name', 'last-name');
displayNameInput.setAttribute('placeholder', 'Display name');
displayNameInput.setAttribute('name', 'display-name');
// event with HTML attributes
// displayNameInput.setAttribute('onblur', 'displayMessage(this)');

emailInput.setAttribute('placeholder', 'Email Address');
emailInput.setAttribute('name', 'email');
passwordInput.setAttribute('placeholder', 'Password');
passwordInput.setAttribute('name', 'password');
passwordConfirmInput.setAttribute('placeholder', 'Password Confirmation');
passwordConfirmInput.setAttribute('name', 'password-confirmation');

// set attribute function
function setMultypleAttrubute(className, attributeName, attributeValue) {
	const elements = document.getElementsByClassName(className);
	for (let element of elements) {
		element.setAttribute(attributeName, attributeValue);
	}
}
// //function for HTML attribute
// function displayMessage(obj){
//   alert(`This field is ${obj}`);
//   return false;
// }

mainContainer.appendChild(header);
mainContainer.appendChild(divFormContainer);
divFormContainer.appendChild(divTitle);
divFormContainer.appendChild(loginForm);
divTitle.appendChild(titleHead);
divTitle.appendChild(titleParagraph);
header.appendChild(squadHelpLogoImg);
header.appendChild(loginBtn);
divInputName.append(firstNameInput, lastNameInput);
divInputEmail.append(displayNameInput, emailInput);
divInputPassword.append(passwordInput, passwordConfirmInput);
loginForm.appendChild(divInputName);
loginForm.appendChild(divInputEmail);
loginForm.appendChild(divInputPassword);
// loginForm.appendChild(emailInput);
// loginForm.appendChild(passwordInput);
// loginForm.appendChild(passwordConfirmInput);

setMultypleAttrubute('required-field', 'required', '');
setMultypleAttrubute('secure', 'type', 'password');

// function validateField(){
//   if(!this.value && this.classList.contains('required-field')){
//     loginForm.insertBefore(fnAlarm, this.nextSibling);
//   }else{
//     fnAlarm.remove();
//   }
// }

// for(let element of requiredElements) {
//   element.addEventListener('blur', validateField);
// }
const fnAlarm = document.createElement('div');
fnAlarm.className = 'alert';

loginForm.addEventListener('focusout', (event) => {
	fnAlarm.textContent = `field ${event.target.name} cannot be empty`;
	const nextElement = event.target.parentNode.nextSibling;
	// console.log(nextElement);
	if (
		!event.target.value &&
		event.target.classList.contains('required-field')
	) {
		loginForm.insertBefore(fnAlarm, nextElement);
		// divInputName.appendChild(fnAlarm);
	} 
});

loginForm.addEventListener('focusin', () => fnAlarm.remove());

// displayNameInput.addEventListener('click', (e) => e.target.hidden = true);
// displayNameInput.addEventListener('click', function(){this.hidden = true});

function openWiki (){
  const pop =  open('https://wikipedia.org', '_blank', 'width=400');
	const timeId = setTimeout(() => pop.close(), 3000);
}

// loginBtn.addEventListener('click', openWiki)