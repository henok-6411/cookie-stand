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
  minCustomerEachHour: 11,
  maxCustomerEachHour: 38,
  averageCookiesPerCustomer: 3.7,
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
//paris shop

var paris = {
  storeName: 'Paris best cookie',
  minCustomerEachHour: 20,
  maxCustomerEachHour: 38,
  averageCookiesPerCustomer: 2.3,
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
//lima shop

var Lima = {
  storeName: 'Lima best cookie',
  minCustomerEachHour: 2,
  maxCustomerEachHour: 16,
  averageCookiesPerCustomer: 4.6,
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
paris.render();
Lima.render();



var table = document.getElementById('cookiesTable');
var tbodyEl = document.createElement('tbody');
var trEl = document.createElement('tr');
var thEl = document.createElement('th');
var tdEl = document.createElement('td');

trEl = document.createElement('tr');
thEl = document.createElement('th');
thEl.textContent = '     ';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = '6:00 am';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = '7:00 am';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = '8:00 am';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = '9:00 am';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = '10:00 am';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = '11:00 am';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = '12:00 pm';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = '1:00 pm';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = '2:00 pm';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = '3:00 pm';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = '4:00 pm';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = '5:00 pm';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = '6:00 pm';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = '7:00 pm ';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = 'Daily Location Total';
trEl.appendChild(thEl);
tbodyEl.appendChild(trEl);

trEl = document.createElement('tr');
thEl = document.createElement('th');
thEl.textContent = 'Seattle';
trEl.appendChild(thEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[0];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[1];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[2];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[3];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[4];
trEl.appendChild(tdEl);
tbodyEl.appendChild(trEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[5];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[6];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[7];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[8];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[9];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[10];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[11];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[12];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[13];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.totalCookiesForTheDay;
trEl.appendChild(tdEl);
trEl = document.createElement('tr');
thEl = document.createElement('th');
thEl.textContent = 'Tokyo';
trEl.appendChild(thEl);
tdEl = document.createElement('td');
tdEl.textContent = tokyo.cookiesEachHour[0];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = tokyo.cookiesEachHour[1];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = tokyo.cookiesEachHour[2];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = tokyo.cookiesEachHour[3];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = tokyo.cookiesEachHour[4];
trEl.appendChild(tdEl);
tbodyEl.appendChild(trEl);
tdEl = document.createElement('td');
tdEl.textContent = tokyo.cookiesEachHour[5];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = tokyo.cookiesEachHour[6];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = tokyo.cookiesEachHour[7];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = tokyo.cookiesEachHour[8];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = tokyo.cookiesEachHour[9];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = tokyo.cookiesEachHour[10];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = tokyo.cookiesEachHour[11];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = tokyo.cookiesEachHour[12];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = tokyo.cookiesEachHour[13];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = tokyo.totalCookiesForTheDay;
trEl.appendChild(tdEl);

tbodyEl.appendChild(trEl);

trEl = document.createElement('tr');
thEl = document.createElement('th');
thEl.textContent = 'Dubai';
trEl.appendChild(thEl);
tdEl = document.createElement('td');
tdEl.textContent = Dubai.cookiesEachHour[0];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Dubai.cookiesEachHour[1];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Dubai.cookiesEachHour[2];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Dubai.cookiesEachHour[3];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Dubai.cookiesEachHour[4];
trEl.appendChild(tdEl);
tbodyEl.appendChild(trEl);
tdEl = document.createElement('td');
tdEl.textContent = Dubai.cookiesEachHour[5];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Dubai.cookiesEachHour[6];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Dubai.cookiesEachHour[7];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Dubai.cookiesEachHour[8];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Dubai.cookiesEachHour[9];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Dubai.cookiesEachHour[10];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Dubai.cookiesEachHour[11];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Dubai.cookiesEachHour[12];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Dubai.cookiesEachHour[13];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Dubai.totalCookiesForTheDay;
trEl.appendChild(tdEl);

tbodyEl.appendChild(trEl);

trEl = document.createElement('tr');
thEl = document.createElement('th');
thEl.textContent = 'Lima';
trEl.appendChild(thEl);
tdEl = document.createElement('td');
tdEl.textContent = Lima.cookiesEachHour[0];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Lima.cookiesEachHour[1];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Lima.cookiesEachHour[2];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Lima.cookiesEachHour[3];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Lima.cookiesEachHour[4];
trEl.appendChild(tdEl);
tbodyEl.appendChild(trEl);
tdEl = document.createElement('td');
tdEl.textContent = Lima.cookiesEachHour[5];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Lima.cookiesEachHour[6];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Lima.cookiesEachHour[7];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Lima.cookiesEachHour[8];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Lima.cookiesEachHour[9];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Lima.cookiesEachHour[10];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Lima.cookiesEachHour[11];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Lima.cookiesEachHour[12];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Lima.cookiesEachHour[13];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = Lima.totalCookiesForTheDay;
trEl.appendChild(tdEl);
tbodyEl.appendChild(trEl);

trEl = document.createElement('tr');
thEl = document.createElement('th');
thEl.textContent = 'Totals';
trEl.appendChild(thEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[0] + tokyo.cookiesEachHour[0] + Dubai.cookiesEachHour[0] + Lima.cookiesEachHour[0];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[1] + tokyo.cookiesEachHour[1] + Dubai.cookiesEachHour[1] + Lima.cookiesEachHour[1];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[2] + tokyo.cookiesEachHour[2] + Dubai.cookiesEachHour[2] + Lima.cookiesEachHour[2];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[3] + tokyo.cookiesEachHour[3] + Dubai.cookiesEachHour[3] + Lima.cookiesEachHour[3];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[4] + tokyo.cookiesEachHour[4] + Dubai.cookiesEachHour[4] + Lima.cookiesEachHour[4];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[5] + tokyo.cookiesEachHour[5] + Dubai.cookiesEachHour[5] + Lima.cookiesEachHour[5];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[6] + tokyo.cookiesEachHour[6] + Dubai.cookiesEachHour[6] + Lima.cookiesEachHour[6];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[7] + tokyo.cookiesEachHour[7] + Dubai.cookiesEachHour[7] + Lima.cookiesEachHour[7];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[8] + tokyo.cookiesEachHour[8] + Dubai.cookiesEachHour[8] + Lima.cookiesEachHour[8];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[9] + tokyo.cookiesEachHour[9] + Dubai.cookiesEachHour[9] + Lima.cookiesEachHour[9];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[10] + tokyo.cookiesEachHour[10] + Dubai.cookiesEachHour[10] + Lima.cookiesEachHour[10];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[11] + tokyo.cookiesEachHour[11] + Dubai.cookiesEachHour[11] + Lima.cookiesEachHour[11];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[12] + tokyo.cookiesEachHour[12] + Dubai.cookiesEachHour[12] + Lima.cookiesEachHour[12];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.cookiesEachHour[13] + tokyo.cookiesEachHour[13] + Dubai.cookiesEachHour[13] + Lima.cookiesEachHour[13];
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = seattle.totalCookiesForTheDay + tokyo.totalCookiesForTheDay + Dubai.totalCookiesForTheDay + Lima.totalCookiesForTheDay;
trEl.appendChild(tdEl);

tbodyEl.appendChild(trEl);

table.appendChild(tbodyEl);






