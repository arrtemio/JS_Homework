// Задание 1:

'use strict';

function Animal() {
  this.name = name;

  this._foodAmount = 50;
}

Animal.prototype.formatFoodAmount = function () {
  return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function (amount) {
  if (!arguments.length) return this.formatFoodAmount();

  if (amount < 30 || amount > 100) {
    return 'Недопустимое количество корма.';
  }

  this._foodAmount = amount;
};

Animal.prototype.feed = function () {
  console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

function Cat(name) {
  Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
  Animal.prototype.feed.apply(this);

  console.log('Кот доволен ^_^');

  return this;
};

Cat.prototype.stroke = function () {
  console.log('Гладим кота');

  return this;
};

var barsik = new Cat('Барсик');

// Задание 2:

function deepClone(obj) {
  var newClone = Array.isArray(obj) ? [] : {};

  for (var k in obj) {
    newClone[k] = typeof obj[k] === 'object' && obj[k] ? deepClone(obj[k]) : obj[k];
  }

  return newClone;
}

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
      string2: 'Petrov',
      object2: {
        array2: [{}, {}],
      },
      object3: {},
    },
    method: function () {
      alert('Hello');
    },
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

// Задание 3:

function deepCompare(a, b) {
  if (Object.keys(a).length === Object.keys(b).length) {
    for (var k in b) {
      if (typeof a[k] === 'object' && a[k]) {
        if (
          (typeof a[k] === 'object' &&
           typeof b[k] === 'object' &&
           a[k] &&
           b[k] &&
           Array.isArray(a[k]) === false &&
           Array.isArray(b[k]) === false) ||
          (Array.isArray(a[k]) && Array.isArray(b[k]) && a[k] && b[k])
        ) {
          var compare = deepCompare(a[k], b[k]);

          if (compare === false) {

            return false;
          }
        }
      } else if (typeof a[k] === 'function' && typeof b[k] === 'function') {

          if (a[k].toString() !== b[k].toString()) {

            return false;
        }
      } else if (a[k] !== b[k]) {
        
        return false;
      }
    }
    return true;
  }
  return false;
}

var frst = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
      string2: 'Petrov',
      object2: {
        array2: [{}, {}],
      },
      object3: {},
    },
    method: function () {
      alert('Hello');
    },
};

var sec = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
      string2: 'Petrov',
      object2: {
        array2: [{}, {}],
      },
      object3: {},
    },
    method: function () {
      alert('Hello');
    },
};

console.log(deepCompare(frst, sec));
