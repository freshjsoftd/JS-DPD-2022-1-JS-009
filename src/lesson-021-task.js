'use strict';

const form = document.querySelector('form');
const inputBuy = document.querySelector('#input-buy');
const inputSale = document.querySelector('#input-sale');
const curChoiceRButton = Array.from(document.getElementsByName('curr'));
const spanDate = document.querySelector('.date');

// fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
// .then((response) => response.json())
// .then((res) => localStorage.setItem('currency', JSON.stringify(res)));
let date = new Date().toLocaleDateString('uk');
spanDate.textContent = ` ${date}`;
const getCurrencyPBank = async () => {
  const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
  const currency = await response.json();
  localStorage.setItem(date, JSON.stringify(currency));
}
getCurrencyPBank();
// console.log(date);

const currencies = JSON.parse(localStorage.getItem(date));
console.log(currencies);
function setCurrencyToInput(){
  let radioValue = '';
  curChoiceRButton.forEach((radio) => {
    if (radio.checked){
      radioValue = radio.value;
    }
  })
  currencies.forEach((currency) => {
    if(radioValue.toLowerCase() === currency['ccy'].toLowerCase()){
      inputBuy.value = currency['buy'];
      inputSale.value = currency['sale'];
    }
  })
  // console.log(radioValue);
  console.log(currencies);
}
form.addEventListener('click', setCurrencyToInput);