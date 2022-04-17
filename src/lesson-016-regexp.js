'use strict';
let regex = /lo/ig;
// regex.lastIndex = 5
let str = 'Trololo rrr';

// let reg = new RegExp(`${str}`, 'gi')

console.dir(regex);
// console.dir(reg);
// match()
// console.log(str.match(regex));
// console.log(regex.lastIndex);
// search()
// console.log(str.search(regex));
// replace()
// let str2 = 'Donic Stiga DHS TSP donic';
// console.log(str2.replace(/D/gi, 'B'));
// console.log(str2.toLowerCase())
// test()
// console.log(regex.test(str));
// console.log(regex.lastIndex);
// exec()
// const arrReg = regex.exec(str);
// regex.exec(str);
// console.log(arrReg);
const reg = /s?/ig;
// Metasymbol
// \d - numbers = [0-9]
// \D - no numbers [^0-9]
// \w - соответствует любой букве, цифре или 
//      символу подчеркивания ([A-Za-z0-9_]) 
// \W - соответствует любому символу, который 
//  не является буквой, цифрой или символом 
//  подчеркивания ([^A-Za-z0-9_])
// \s - соответствует пробелу
// \S - соответствует любому символу, 
// который не является пробелом
// \b
// . - соответствует любому символу (
  // зависит от наличия флага s).
// Modificators
// {n} - n - любое целое число.
// {n,} - соответствует n и более количеству 
// повторений предыдущего символа
// {n,m} - соответствует от n до m повторений 
// предыдущего символа
// ? - соответствует одному вхождению предыдущего
//  символа в подстроку или его отсутствию в подстроке
//  + - соответствует одному и более повторений 
// предыдущего символа
// ^ - соответствует началу строки
// $ - соответствует концу строки.
// console.log(reg.test(str));
// Practice#1
// const pasCheck = /^\w{8,15}[^\W]$/ig;
// let password = 'Vasysdsdsd'
// console.log(pasCheck.test(password));
// let strLang = 'Java C++ JavaScript'
// const regLang = /Java\B/ig;
// console.log(strLang.replace(regLang, 'Type'));
// Practice #2
// let email = 'vasya.pupkin25@gmail.com';
// const regEmail = /^\w+\.?\w+@[a-z]{3,8}\.[a-z]{2,5}$/gi;
// console.log(regEmail.test(email));
//Groups in RegExp
// let htmlText = '<img src="picture.png">';
// const exp = /[a-z]+\.(png|jpg)/i;
// const result = htmlText.match(exp);
// console.log(exp.exec(htmlText));
// console.log(result);
// result.forEach((item) => {
//   console.log(item);
// })
// Getting groups value Naming Groups
// const exp1 = /(?<year>\d{4})-(?<month>\d{2})-(?<days>\d{2})/;
// let date = '2022-04-17'
// const result1 = exp1.exec(date);

// console.log(result1);
// console.log(result1.groups);
// console.log(result1.groups.year);
// console.log(result1.groups.month);
// console.log(result1.groups.days);
// console.log(`${result1.groups.days}-${result1.groups.month}-${result1.groups.year}`);

// // console.log(result1[0]);
// console.log(result1[1]);
// console.log(result1[2]);
// console.log(result1[3]);
// Assertions
const text1 = "All costs: $10.53";
const text2 = "All costs: €10.53";

const regAs = /(?<=€|\$)(\d)+(\.\d*)?/;
console.log(regAs.exec(text1));
console.log(regAs.exec(text2));
let tel = '+380(66)-745-22-44'
// 380667452244
const telReg = /\d/g
console.log(tel.match(telReg).join(''));

