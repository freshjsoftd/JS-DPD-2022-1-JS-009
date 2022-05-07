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
const cancel = document.createElement('button');
const submit = document.createElement('button');
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
firstNameInput.classList.add('text-type', 'required-field', 'collect');
lastNameInput.classList.add('text-type', 'required-field', 'collect');
displayNameInput.classList.add('text-type',  'collect') ;
passwordInput.classList.add('secure', 'required-field');
passwordConfirmInput.classList.add('secure', 'required-field');
emailInput.classList.add('email', 'required-field', 'text-type', 'collect');
emailInput.setAttribute('type', 'email');
divInputName.className = 'input-wrapper';
divInputEmail.className = 'input-wrapper';
divInputPassword.className = 'input-wrapper';
// placeholder
firstNameInput.setAttribute('placeholder', 'First name');
firstNameInput.setAttribute('name', 'firstName');
// firstNameInput.value = 'My name';
lastNameInput.setAttribute('placeholder', 'Last name');
lastNameInput.setAttribute('name', 'lastName');
displayNameInput.setAttribute('placeholder', 'Display name');
displayNameInput.setAttribute('name', 'nikName');
// event with HTML attributes
// displayNameInput.setAttribute('onblur', 'displayMessage(this)');

emailInput.setAttribute('placeholder', 'Email Address');
emailInput.setAttribute('name', 'email');
passwordInput.setAttribute('placeholder', 'Password');
passwordInput.setAttribute('name', 'password');
passwordConfirmInput.setAttribute('placeholder', 'Password Confirmation');
passwordConfirmInput.setAttribute('name', 'password-confirmation');

function createRadioInput(tag, attrId, attrName, attrType) {
	tag.setAttribute('id', attrId);
	tag.setAttribute('name', attrName);
	tag.setAttribute('type', attrType);
}

const wrapForInputRadio1 = document.createElement('div');
wrapForInputRadio1.classList.add('wrap-radio-input');
const inputRadio1 = document.createElement('input');
createRadioInput(inputRadio1, `join-buyer`, `join-to-us`, `radio`);
const labelForRadio1 = document.createElement('label');
labelForRadio1.setAttribute('for', 'join-buyer');
labelForRadio1.innerText = 'Join As a Buyer';
const spanForRadio1 = document.createElement('span');
spanForRadio1.textContent = 'I am looking for a Name, Logo or Tagline for my business, brand or product.';
const innerWrapForInputRadio1 = document.createElement('div');
wrapForInputRadio1.append(inputRadio1, innerWrapForInputRadio1);
innerWrapForInputRadio1.append(labelForRadio1, spanForRadio1);

const wrapForInputRadio2 = document.createElement('div');
wrapForInputRadio2.classList.add('wrap-radio-input');
const inputRadio2 = document.createElement('input');
createRadioInput(inputRadio2, `join-seller`, `join-to-us`, `radio`);
const labelForRadio2 = document.createElement('label');
labelForRadio2.setAttribute('for', 'join-seller');
labelForRadio2.innerText = 'Join As a Creative or Marketplace Seller ';
const spanForRadio2 = document.createElement('span');
spanForRadio2.textContent = 'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.';
const innerWrapForInputRadio2 = document.createElement('div');
wrapForInputRadio2.append(inputRadio2, innerWrapForInputRadio2);
innerWrapForInputRadio2.append(labelForRadio2, spanForRadio2);


cancel.id = 'cancel';
submit.id = 'submit';
cancel.textContent = 'Cancel'
submit.textContent = 'Submit'

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
loginForm.appendChild(wrapForInputRadio1);
loginForm.appendChild(wrapForInputRadio2);
loginForm.appendChild(cancel)
loginForm.appendChild(submit)

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
	} 
});

loginForm.addEventListener('focusin', () => fnAlarm.remove());

class Person {
  constructor(firstName, lastName, nikName, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.nikName = nikName;
		this.email = email;
  }
}
const arrObjects = [];

function collectProps(e){

	const user = new Person();
	e.preventDefault();
	const inputCollection = Array.from(document.getElementsByClassName('collect'));
	console.log(inputCollection);
	// const values =  inputCollection.map((elem) => elem.value);
	inputCollection.forEach((elem) => {
	user[elem.name] = elem.value;
	})
	arrObjects.push(user);

	// localStorage.setItem(`${user.lastName}`, JSON.stringify(user));
	localStorage.setItem(`users`, JSON.stringify(arrObjects));
}

submit.addEventListener('click', collectProps);
const pup = JSON.parse(localStorage.getItem('Pupkin'))

// displayNameInput.addEventListener('click', (e) => e.target.hidden = true);
// displayNameInput.addEventListener('click', function(){this.hidden = true});
