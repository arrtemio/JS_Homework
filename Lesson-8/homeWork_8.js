"use strict";

function Animal() {
  var self = this;
  this._foodAmount = 50;
  this.name = name;

  this.formatFoodAmount = function () {
    return this._foodAmount + " гр.";
  };

  self.dailyNorm = function (amount) {
    if (!arguments.length) return this.formatFoodAmount();

    if (amount < 30 || amount > 100) {
      return "Недопустимое количество корма.";
    }

    this._foodAmount = amount;
  };

  self.feed = function () {
    console.log("Насыпаем в миску " + self.dailyNorm() + " корма.");
  };
}

function Cat(name) {
  Animal.apply(this, arguments);

  var animalFeed = this.feed;

  this.feed = function () {
    animalFeed();
    console.log("Кот доволен ^_^");
    return this;
  };

  this.stroke = function () {
    console.log("Гладим кота");
    return this;
  };
}

var barsik = new Cat("Барсик");
