'use strict';
Store.indexStore = document.getElementById('storeSale');

Store.tableEl = document.getElementById('cookiesTable');

Store.openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

Store.allStoresTotal = 0;
Store.allStores = [];
function Store(storeName, minCustomersPerHour, maxCustomersPerHour, averageCookiesPerCustomer) {
  this.storeName = storeName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.cookiesSoldEachHourArray = [];
  this.totalCookiesPerDay = 0;
  this.calculateCookiesHourly();
  this.renderShopeRow();
  Store.allStores.push(this);


}

var getRandome = function (min, max) {
  return Math.ceil(Math.random() * (max - min + 1)) + min;
}

Store.prototype.calculateCookiesHourly = function () {
  for (var i = 0; i < Store.openHours.length; i++) {
    var cookis = Math.ceil(this.averageCookiesPerCustomer * getRandome(this.minCustomersPerHour, this.maxCustomersPerHour));
    this.cookiesSoldEachHourArray.push(cookis);
    this.totalCookiesPerDay += cookis;
    Store.allStoresTotal += this.totalCookiesPerDay;     //cookis
  }
}
var renderHeaderRow = function () {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  for (var i = 0; i < Store.openHours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = Store.openHours[i];
    trEl.appendChild(tdEl);
  }
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total'
  trEl.appendChild(tdEl);
  Store.tableEl.appendChild(trEl);
}
Store.prototype.renderShopeRow = function () {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.storeName;
  trEl.appendChild(thEl);
  for (var i = 0; i < this.cookiesSoldEachHourArray.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldEachHourArray[i];
    trEl.appendChild(tdEl);
  }
  var tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesPerDay;
  trEl.appendChild(tdEl);
  Store.tableEl.appendChild(trEl);

}
var renderFooterRow = function () {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly total'
  trEl.appendChild(thEl);
  for (var i = 0; i < Store.openHours.length; i++) {
    var hourlyTotal = 0;
    var tdEl = document.createElement('td');
    for (var j = 0; j < Store.allStores.length; j++) {

      hourlyTotal += Store.allStores[j].cookiesSoldEachHourArray[i];

    }
    tdEl.textContent = hourlyTotal;
    trEl.appendChild(tdEl);


  }
  var tdEl = document.createElement('td');
  tdEl.textContent = Store.allStoresTotal;
  trEl.appendChild(tdEl);
  Store.tableEl.appendChild(trEl);
}
renderHeaderRow();



new Store('seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);


renderFooterRow();

var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var minCustomersPerHour = event.target.inputMinCustomer.value;
  var maxCustomersPerHour = event.target.inputMaxCustomer.value;
  var averageCookiesPerCustomer = event.target.AverageCookieElem.value;
  var storeName = event.target.LocationNameEle.value;


  // console.log('minCustomers:', mincust);
  // console.log('maxCustomers:', maxCust);
  // console.log('Ave Cookies', AveCookie);
  //console.log('Location name:', locaName);
  if (!minCustomersPerHour || !minCustomersPerHour || !averageCookiesPerCustomer || !storeName) {
    return alert(' field must be answerd');
  }
  if (isNaN(minCustomersPerHour)) {
    event.target.inputMinCustomer.value = null;
    return alert('please enter a number for min customer');
  }
  if (isNaN(maxCustomersPerHour)) {
    event.target.inputMaxCustomer.value = null;
    return alert('please enter a number for max customer');
  }
  if (isNaN(averageCookiesPerCustomer)) {
    event.target.AverageCookieElem.value = null;
    return alert('please enter a number for average cookies');
  }
  if (minCustomersPerHour > maxCustomersPerHour) {
    event.target.inputMinCustomer.value = null;
    return alert('your min customer must be less than max customer');
  }
  if (minCustomersPerHour < 0 || maxCustomersPerHour < 0 || averageCookiesPerCustomer < 0) {
    event.target.inputMinCustomer.value = null;
    event.target.inputMaxCustomer.value = null;
    event.target.AverageCookieElem.value = null;
    return alert('your number answer must be positive');
  }
  Store.tableEl.deleteRow(-1);
  new Store(storeName, +minCustomersPerHour, +maxCustomersPerHour, +averageCookiesPerCustomer);

  renderFooterRow();
  event.target.LocationNameEle.value = null;
  alert(`this are ${storeName}'s ${minCustomersPerHour}min customers , ${maxCustomersPerHour}max customers  and ${averageCookiesPerCustomer}average cookies sold.`);


}




