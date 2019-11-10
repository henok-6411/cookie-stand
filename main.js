'use strict';
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


var seattleCustomers = {
  minCustomerEachHour: 23,
  maxCustomerEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

}
//randomcustomers of seattle
for (var i = 0; i < openHours.length; i++) {
  var num = Math.ceil(randomNumberCustomer(seattleCustomers.maxCustomerEachHour, seattleCustomers.minCustomerEachHour) * seattleCustomers.averageCookiesPerCustomer);
  seattleCustomers.customersEachHour.push(num);
}
for (var i = 0; i < openHours.length; i++) {
  var num
}
//seattle location 
function randomNumberCustomer(max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log(Math.floor(Math.random() * (max - min)) + min);
  return Math.floor(Math.random() * (max - min)) + min;

}
randomNumberCustomer(65, 23);
console.log(seattleCustomers.customersEachHour);