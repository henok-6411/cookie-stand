'use strict';

// var salmonCookiesElement = document.getElementById('salmonCookies');

// var liEl = document.CreatElement('li')
// liEl.textContent = 'salmonCookies';
// SalmonCookiesElement.appendChild(liEl);









var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// var seattleCustomers = {
//   minCustomerEachHour: 23,
//   maxCustomerEachHour: 65,
//   averageCookiesPerCustomer: 6.3,
//   customersEachHour: [],
//   cookiesEachHour: [],
//   totalCookiesForTheDay: 0,

// }
// //randomcustomers of seattle
// for (var i = 0; i < openHours.length; i++) {
//   var num = Math.ceil(randomNumberCustomer(seattleCustomers.maxCustomerEachHour, seattleCustomers.minCustomerEachHour) * seattleCustomers.averageCookiesPerCustomer);
//   seattleCustomers.customersEachHour.push(num);
// }

// //seattle location 
// function randomNumberCustomer(max, min) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   console.log(Math.floor(Math.random() * (max - min)) + min);
//   return Math.ceil(Math.random() * (max - min)) + min;
// }
// randomNumberCustomer(65, 23);
// console.log(seattleCustomers.customersEachHour)
//Tokyo shope customers
var tokyoCustomers = {
  minCustomerEachHour: 3,
  maxCustomerEachHour: 24,
  averageCookiesPerCustomer: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  tokyoCustomers: 0,
}
for (var i = 0; i < openHours.length; i++) {
  var num = Math.ceil(randomNumberTokyoCustomer(tokyoCustomers.maxCustomerEachHour, TokyoCustomer.minCustomerEachHour) * tokyoCustomers.averageCookiesPerCustomer);
  tokyoCustomers.customersEachHour.push(num);
}
function randomNumberTokyoCustomer(max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log(Math.ceil(Math.random() * (max - min)) + min);
  return Math.ceil(Math.random() * (max - min)) + min;
}
randomNumberTokyoCustomer(3, 24);

//dubai customers
var DubaiCustomers = {
  minCustomerEachHour: 11,
  maxCustomerEachHour: 38,
  averageCookiesPerCustomer: 3.7,
  customersEachHour: [],
  cookiesEachHour: [],
  tokyoCustomers: 0,

}
for (var i = 0; i < openHours.length; i++) {
  var num = Math.ceil(randomNumberDubaiCustomer(DubaiCustomers.maxCustomerEachHour, DubaiCustomers.minCustomerEachHour) * DubaiCustomers.averageCookiesPerCustomer);
  DubaiCustomers.customersEachHour.push(num);
}

function randomeNumberDubaicustomer(max, min) {
  max = Math.ceil(max);
  min = Math.floor(min);
  console.log(Math.ceil(Math.random() * (max - min)) + min);
  return Math.ceil(Math.random() * (max - min)) + min;
}
randomeNumberDubaicustomer(11, 38);
//paris customers 

var Pariscustomers = {
  minCustomerEachHour: 20,
  maxCustomerEachHour: 38,
  averageCookiesPerCustomer: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  tokyoCustomers: 0,

}
for (var i = 0; i < openHours.length; i++) {
  var num = Math.ceil(randomNumberParisCustomer(Pariscustomers.minCustomerEachHour, Pariscustomers.maxCustomerEachHour) * Pariscustomers.averageCookiesPerCustomer);
  Pariscustomers.customersEachHour.push(num);
}

function randomNumberParisCustomer(max, min) {
  max = Math.ceil(max);
  min = Math.floor(min);
  console.log(Math.ceil(Math.random() * (max - min)) + min);
  return Math.ceil(Math.random() * (max - min)) + min;
}
randomNumberParisCustomer(20, 38);
//Lima customers
var LimaCustomers = {
  minCustomerEachHour: 20,
  maxCustomerEachHour: 38,
  averageCookiesPerCustomer: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  tokyoCustomers: 0,
}
for (var i = 0; i < openHours.length; i++) {
  var num = Math.ceil(randomNumberLimaCustomers(LimaCustomers.minCustomerEachHour, LimaCustomers.maxCustomerEachHour) * averageCookiesPerCustomer);
  LimaCustomers.customersEachHour.push(num);
}

function randomNumberLimaCustomers(max, min) {
  max = Math.ceil(max);
  min = Math.floor(min);
  console.logMath.ceil((Math.random() * (max - min)) + min);
  return Math.ceil(Math.random() * (max - min)) + min;
}
randomNumberLimaCustomers(2, 16);
