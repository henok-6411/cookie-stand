'use strict';
var indexStore = document.getElementById('storeSale');

// var table = document.getElementById('cookiesTable');
// var tbody = document.getElementById('tbody');
// var trEl = document.getElementById('tr');
// var thEl = document.getElementById('th');
//var liEl = document.createElement('li');
//liEl.textContent = 'henok ';


var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//   ..........................writing constructor 
function getRandome(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// function creatHeader() {
//   thEl = document.createElement('th');
//   tableEl.appendChild(thEl);

//   for (var i = 0; i < openHours.length; i++) {
//     var tdEl = document.createElement('td');
//     tdEl.textContent = openHours[i];
//     thEl.appendChild(tdEl);
//   };
var table = document.getElementById('cookiesTable');
var tbody = document.getElementById('tbody');

var thEl = document.getElementById('th');
var tdEl = document.getElementById('td');
var liEl = document.createElement('li');



var allStores = [];
function Store(storeName, minCustomersPerHour, maxCustomersPerHour, averageCookiesPerCustomer) {
  this.storeName = storeName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.CustomersEachHourArray = [];
  this.cookiesSoldEachHourArray = [];
  this.totalCookiesPerDay = 0;
  this.render = function () {
    this.calculateCustomers();
    this.calculateCookies();
    var ulEl = document.createElement('ul');
    var h2El = document.createElement('h2');
    h2El.textContent = `${this.storeName} store`
    indexStore.appendChild(h2El);
    for (var i = 0; i < openHours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${openHours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`
      ulEl.appendChild(liEl);
    }
    console.log(this.cookiesSoldEachHourArray);
    liEl = document.createElement('li');
    liEl.textContent = `total: ${this.totalCookiesPerDay} cookies`
    ulEl.appendChild(liEl);
    indexStore.appendChild(ulEl);
  }


  allStores.push(this);


}


Store.prototype.calculateCustomers = function () {
  for (var i = 0; i < openHours.length; i++) {
    this.CustomersEachHourArray.push(getRandome(this.minCustomersPerHour, this.maxCustomersPerHour))
  }
}
Store.prototype.calculateCookies = function () {
  for (var i = 0; i < this.CustomersEachHourArray.length; i++) {
    var cookis = Math.round(this.CustomersEachHourArray[i] * this.averageCookiesPerCustomer)
    this.cookiesSoldEachHourArray.push(cookis)
    this.totalCookiesPerDay += cookis;
  }
}

new Store('seattle', '23', '65', '6.3');
new Store('Tokyo', '3', '24', '1.2');
new Store('Dubai', '11', '38', '3.7');
new Store('Paris', '20', '38', '2.3');
new Store('Lima', '2', '16', '4.6');
for (var i = 0; i < allStores.length; i++) {
  allStores[i].render();
}


