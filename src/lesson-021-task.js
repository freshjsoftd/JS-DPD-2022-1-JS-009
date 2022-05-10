'use strict';
// buy-sale elements
const form = document.querySelector('form');
const inputBuy = document.querySelector('#input-buy');
const inputSale = document.querySelector('#input-sale');
const curChoiceRButton = Array.from(document.getElementsByName('curr'));
const spanDate = document.querySelector('.date');
// convert elements
const inputSrc = document.querySelector('#input-src');
const inputAim = document.querySelector('#input-aim');
const convertLeftRButton = Array.from(document.getElementsByName('conv-left'));
const convertRightRButton = Array.from(document.getElementsByName('conv-right'));
const equalButton = document.querySelector('.equal');



let date = new Date().toLocaleDateString('uk');

spanDate.textContent = ` ${date}`;
const getCurrencyPBank = async () => {
  const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
  const currency = await response.json();
  localStorage.setItem(date, JSON.stringify(currency));
}
getCurrencyPBank();
const currencies = JSON.parse(localStorage.getItem(date));
// Currencies names list
const firstCurr = currencies[0]['ccy'].toLowerCase();
const secondCurr = currencies[1]['ccy'].toLowerCase();
const thirdCurr = currencies[2]['ccy'].toLowerCase();
const FOURTH_CURR = 'uah';//It is constant
console.log(thirdCurr);
// Currencies factors
const averageCurrencyValues = currencies.map(currency => {
  return ((parseFloat(currency['buy']) + parseFloat(currency['sale']))/2).toFixed(2);
})
const usdToEuroFactor = (averageCurrencyValues[0]/averageCurrencyValues[1]).toFixed(2);
const usdToBTCFactor = (averageCurrencyValues[0]/averageCurrencyValues[2]).toFixed(10);
const euroToBTCFactor = (averageCurrencyValues[1]/averageCurrencyValues[2]).toFixed(10);
function findChecked(arr){
  let checkedValue = '';
  arr.forEach((item) => {
    if(item.checked){
      checkedValue = item.value;
    }
  })
  return checkedValue;
}
function convertCurrency(e){
  e.preventDefault();
  const leftChecked = findChecked(convertLeftRButton).toLowerCase();
  const rightChecked = findChecked(convertRightRButton).toLowerCase();
  const srcValue = inputSrc.value;
  
  if(leftChecked === firstCurr && rightChecked === secondCurr){
    return inputAim.value = srcValue * usdToEuroFactor;
  }
  if(leftChecked === firstCurr && rightChecked === thirdCurr){
    return inputAim.value = srcValue * usdToBTCFactor;
  }
  if(leftChecked === firstCurr && rightChecked === FOURTH_CURR){
    return inputAim.value = srcValue * averageCurrencyValues[0];
  }
  if(leftChecked === secondCurr && rightChecked === firstCurr){
    return inputAim.value = (srcValue * usdToEuroFactor**-1).toFixed(2);
  }
  if(leftChecked === secondCurr && rightChecked === thirdCurr){
    return inputAim.value = srcValue * euroToBTCFactor;
  }
  if(leftChecked === secondCurr && rightChecked === FOURTH_CURR){
    return inputAim.value = srcValue * averageCurrencyValues[1];
  }
  if(leftChecked === thirdCurr && rightChecked === firstCurr){
    return inputAim.value = (srcValue * usdToBTCFactor**-1).toFixed(2);
  }
  if(leftChecked === thirdCurr && rightChecked === secondCurr){
    return inputAim.value = (srcValue * euroToBTCFactor**-1).toFixed(2);
  }
  if(leftChecked === thirdCurr && rightChecked === FOURTH_CURR){
    return inputAim.value = (srcValue * averageCurrencyValues[2]).toFixed(2);
  }
  if(leftChecked === FOURTH_CURR && rightChecked === firstCurr){
    return inputAim.value = (srcValue * averageCurrencyValues[0]**-1).toFixed(2);
  }
  if(leftChecked === FOURTH_CURR && rightChecked === secondCurr){
    return inputAim.value = (srcValue * averageCurrencyValues[1]**-1).toFixed(2);
  }
  if(leftChecked === FOURTH_CURR && rightChecked === thirdCurr){
    return inputAim.value = (srcValue * averageCurrencyValues[2]**-1).toFixed(2);
  }
  if(leftChecked === rightChecked){
    throw new TypeError('You are comparing the same currency');
  }
  
}
function setCurrencyToInput(){
  const radioValue = findChecked(curChoiceRButton);
  currencies.forEach((currency) => {
    if(radioValue.toLowerCase() === currency['ccy'].toLowerCase()){
      inputBuy.value = parseFloat(currency['buy']).toFixed(3);
      inputSale.value = parseFloat(currency['sale']).toFixed(3);
    }
  })
}
form.addEventListener('click', setCurrencyToInput);
equalButton.addEventListener('click', convertCurrency);