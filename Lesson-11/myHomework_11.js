// Задание 1:

'use strict';

var nameArr = ['Vasiliy', 'Pavel', 'Alex'];

function mapNamesArr(names) {
  return names.map(function (name) {
    return { name: name };
  });
}

mapNamesArr(nameArr);

// Задание 2:

var currentArr = ['00', '13', '24'];

function arrToTime(arr) {
  var time = 'Текущее время';

  var currentTime = arr.reduce(function (prev, item) {
    return prev + ' : ' + item;
  }, time);

  return currentTime;
}

arrToTime(currentArr);

// Задание 3:

var text = prompt('Введите предложение');

function getVowels(text) {
  var vowels = ['а', 'у', 'о', 'ы', 'э', 'е', 'ё', 'и', 'ю', 'я', 'a', 'e', 'i', 'o', 'u', 'y'];
  var newArr = [];
  var textArr = text.toLowerCase().split('');

  textArr.map(function (letter) {
    vowels.find(function (vowelsLetter) {
      if (letter === vowelsLetter) {
        return newArr.push(letter);
      }
    });
  });

  return newArr.length;
}

getVowels(text);

// Задание 4:

var text = prompt('Введите ваш текст');

function countSentencesLetters(someText) {
  var arr = [];
  var textArr = someText.split(/[.?!]+/);

  for (var k in textArr) {
    if (textArr[k]) {
      arr.push(textArr[k]);
    }
  }

  arr.forEach(function (item) {
    var lettersLength = item
      .trim()
      .split(/[" ",]/)
      .join('').length;

    return console.log(item.trim() + ' : Letters quantity is: ' + lettersLength);
  });
}

countSentencesLetters(text);
