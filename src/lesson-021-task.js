'use strict';

const form = document.querySelector('form');
const inputBuy = document.querySelector('#input-buy');
const inputSale = document.querySelector('#input-sale');
const curChoiceRButton = Array.from(document.getElementsByName('curr'));
const spanDate = document.querySelector('.date');

let date = new Date().toLocaleDateString('uk');

spanDate.textContent = ` ${date}`;
const getCurrencyPBank = async () => {
  const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
  const currency = await response.json();
  localStorage.setItem(date, JSON.stringify(currency));
}
getCurrencyPBank();
const currencies = JSON.parse(localStorage.getItem(date));
// Currencies factors
// const usdAvarege = (parseFloat(currencies[0]['buy']) + parseFloat(currencies[0]['sale']))/2
const averageCurrencyValues = currencies.map(currency => {
  return ((parseFloat(currency['buy']) + parseFloat(currency['sale']))/2).toFixed(2);
})
const usdToEuroFactor = (averageCurrencyValues[0]/averageCurrencyValues[1]).toFixed(2);
const usdToBTCFactor = (averageCurrencyValues[0]/averageCurrencyValues[2]).toFixed(5);
const euroToBTCFactor = (averageCurrencyValues[1]/averageCurrencyValues[2]).toFixed(5);
console.log(euroToBTCFactor);
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
  console.log(currencies);
}
form.addEventListener('click', setCurrencyToInput);