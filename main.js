'use strict';
var cookiesSale = document.getElementById('storeSale');
//var liEl = document.createElement('li');
//liEl.textContent = 'henok ';


var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


var seattle = {
  storeName: 'seattle best cookie',
  minCustomerEachHour: 23,
  maxCustomerEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  calculateCustomers: function () {
    for (var i = 0; i < openHours.length; i++) {
      this.customersEachHour.push(RandomNumber(this.maxCustomerEachHour, this.minCustomerEachHour))
    }
  },

  calculatCookies: function () {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var cookie = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
      console.log(this.totalCookiesForTheDay);
      this.totalCookiesForTheDay += cookie;
      this.cookiesEachHour.push(cookie);
    }

  },


  render: function () {
    this.calculateCustomers();
    this.calculatCookies();
    var ulEl = document.createElement('ul');
    var h2El = document.createElement('h2');
    h2El.textContent = this.storeName;
    storeSale.appendChild(h2El);
    for (var i = 0; i < openHours.length; i++) {
      var array = [openHours[i], this.cookiesEachHour[i]];
      var liEl = document.createElement('li');
      liEl.textContent = `${openHours[i]} : ${this.cookiesEachHour[i]} cookies`;
      storeSale.appendChild(liEl);
      //storeSale.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `total :${this.totalCookiesForTheDay} cookies`;
    ulEl.appendChild(liEl);
    storeSale.appendChild(ulEl);
  }
};

function RandomNumber(max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
  return Math.ceil(Math.random() * (max - min + 1)) + min;
}
//tokyo customers....


var tokyo = {
  storeName: 'tokyo best cookie',
  minCustomerEachHour: 3,
  maxCustomerEachHour: 24,
  averageCookiesPerCustomer: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  calculateCustomers: function () {
    for (var i = 0; i < openHours.length; i++) {
      this.customersEachHour.push(RandomNumber(this.maxCustomerEachHour, this.minCustomerEachHour))
    }
  },

  calculatCookies: function () {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var cookie = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
      console.log(this.totalCookiesForTheDay);
      this.totalCookiesForTheDay += cookie;
      this.cookiesEachHour.push(cookie);
    }

  },


  render: function () {
    this.calculateCustomers();
    this.calculatCookies();
    var ulEl = document.createElement('ul');
    var h2El = document.createElement('h2');
    h2El.textContent = this.storeName;
    storeSale.appendChild(h2El);
    for (var i = 0; i < openHours.length; i++) {
      var array = [openHours[i], this.cookiesEachHour[i]];
      var liEl = document.createElement('li');
      liEl.textContent = `${openHours[i]} : ${this.cookiesEachHour[i]} cookies`;
      storeSale.appendChild(liEl);
      //storeSale.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `total :${this.totalCookiesForTheDay} cookies`;
    ulEl.appendChild(liEl);
    storeSale.appendChild(ulEl);
  }
};

function RandomNumber(max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
  return Math.ceil(Math.random() * (max - min + 1)) + min;
}
//dubai shop 

var Dubai = {
  storeName: 'Dubai best cookie',
  minCustomerEachHour: 3,
  maxCustomerEachHour: 24,
  averageCookiesPerCustomer: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  calculateCustomers: function () {
    for (var i = 0; i < openHours.length; i++) {
      this.customersEachHour.push(RandomNumber(this.maxCustomerEachHour, this.minCustomerEachHour))
    }
  },

  calculatCookies: function () {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var cookie = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
      console.log(this.totalCookiesForTheDay);
      this.totalCookiesForTheDay += cookie;
      this.cookiesEachHour.push(cookie);
    }

  },


  render: function () {
    this.calculateCustomers();
    this.calculatCookies();
    var ulEl = document.createElement('ul');
    var h2El = document.createElement('h2');
    h2El.textContent = this.storeName;
    storeSale.appendChild(h2El);
    for (var i = 0; i < openHours.length; i++) {
      var array = [openHours[i], this.cookiesEachHour[i]];
      var liEl = document.createElement('li');
      liEl.textContent = `${openHours[i]} : ${this.cookiesEachHour[i]} cookies`;
      storeSale.appendChild(liEl);
      //storeSale.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `total :${this.totalCookiesForTheDay} cookies`;
    ulEl.appendChild(liEl);
    storeSale.appendChild(ulEl);
  }
};

function RandomNumber(max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
  return Math.ceil(Math.random() * (max - min + 1)) + min;
}







seattle.render();
tokyo.render();
Dubai.render();













// //dubai customers
// var DubaiCustomers = {
//   minCustomerEachHour: 11,
//   maxCustomerEachHour: 38,
//   averageCookiesPerCustomer: 3.7,
//   customersEachHour: [],
//   cookiesEachHour: [],
//   totalCookiesForTheDay: 0,

// }
// for (var i = 0; i < openHours.length; i++) {
//   var num = Math.ceil(randomNumberDubaiCustomer(DubaiCustomers.maxCustomerEachHour, DubaiCustomers.minCustomerEachHour) * DubaiCustomers.averageCookiesPerCustomer);
//   DubaiCustomers.customersEachHour.push(num);
// }

// function randomeNumberDubaicustomer(max, min) {
//   max = Math.ceil(max);
//   min = Math.floor(min);
//   console.log(Math.ceil(Math.random() * (max - min)) + min);
//   return Math.ceil(Math.random() * (max - min)) + min;
// }
// randomeNumberDubaicustomer(11, 38);
// //paris customers 

// var Pariscustomers = {
//   minCustomerEachHour: 20,
//   maxCustomerEachHour: 38,
//   averageCookiesPerCustomer: 2.3,
//   customersEachHour: [],
//   cookiesEachHour: [],
//   totalCookiesForTheDay: 0,

// }
// for (var i = 0; i < openHours.length; i++) {
//   var num = Math.ceil(randomNumberParisCustomer(Pariscustomers.minCustomerEachHour, Pariscustomers.maxCustomerEachHour) * Pariscustomers.averageCookiesPerCustomer);
//   Pariscustomers.customersEachHour.push(num);
// }

// function randomNumberParisCustomer(max, min) {
//   max = Math.ceil(max);
//   min = Math.floor(min);
//   console.log(Math.ceil(Math.random() * (max - min)) + min);
//   return Math.ceil(Math.random() * (max - min)) + min;
// }
// randomNumberParisCustomer(20, 38);
// //Lima customers
// var LimaCustomers = {
//   minCustomerEachHour: 20,
//   maxCustomerEachHour: 38,
//   averageCookiesPerCustomer: 2.3,
//   customersEachHour: [],
//   cookiesEachHour: [],
//   totalCookiesForTheDay: 0,
// }
// for (var i = 0; i < openHours.length; i++) {
//   var num = Math.ceil(randomNumberLimaCustomers(LimaCustomers.minCustomerEachHour, LimaCustomers.maxCustomerEachHour) * averageCookiesPerCustomer);
//   LimaCustomers.customersEachHour.push(num);
// }

// function randomNumberLimaCustomers(max, min) {
//   max = Math.ceil(max);
//   min = Math.floor(min);
//   console.logMath.ceil((Math.random() * (max - min)) + min);
//   return Math.ceil(Math.random() * (max - min)) + min;
// }
// randomNumberLimaCustomers(2, 16);
