//   Задание 1:

function filterNumbersArr(numbers) {
  var newArr = [];

  var positiveArr = numbers.filter(function (number) {
    return number > 0;
  });

  return (newArr = positiveArr);
}

filterNumbersArr([-1, 0, 2, 34, -2]);

//   Задание 2:
// 1

function firstPositive(numbers) {
  var positive = [];

  var returnFirstPos = numbers.filter(function (number) {
    return number > 0;
  });

  return (positive = returnFirstPos[0]);
}

firstPositive([-1, 0, 2, 34, -2]);

// 2
function firstPositive(numbers) {
  var num;
  var foundObj = numbers.find(function (number) {
    return number > 0;
  });
  return (num = foundObj);
}

firstPositive([-1, 0, 2, 34, -2]);

//   Задание 3:

function isPalindrome(word) {
  return (word.toLowerCase().split("").reverse().join("") === word.toLowerCase().split("").join(""));
}

isPalindrome("Шалаш");

//   Задание 4:

function isAnagram(word1, word2) {
  return (word1.toLowerCase().split("").sort().join("") === word2.toLowerCase().split("").sort().join(""));
}

isAnagram("кот", "ток");

//   Задание 5:
function divideArr(arr, num) {
  var newArr = [];
  if (num > 1) {
    for (let i = 0; i < arr.length; i += num) {
      var divide = arr.slice(i, i + num);
      newArr.push(divide);
    }
  } else {
    return arr;
  }
  return newArr;
}

divideArr([1, 2, 3, 4], 2);
