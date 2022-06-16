// Задание 1

var randObj = {};

function isEmpty(obj) {
  for (var k in obj) {
    return false;
  }
  return true;
}

isEmpty(randObj);

// Задание 2

var x = +prompt("Введите число");
var n = +prompt("Ведите в какую степень возводить число");

function pow(x, n) {
  if (x % 1 == 0 && n % 1 == 0 && (x && n) > 0) {
    var b = x;
    for (var i = 1; i < n; i++) {
      b *= x;
    }
    alert(b);
  } else {
    alert("Ввели некорректное число");
  }
}

pow(x, n);

// Задание 3

// 1 - с использованием цикла
var n = +prompt("Введите число");

function sumTo(n) {
  var sum = 0;
  for (i = 0; i < n; i++) {
    sum += n - i;
  }
  alert(sum);
}

sumTo(n);

// 2 - через рекурсию, sumTo(n) = n + sumTo(n-1) для n > 1

var n = +prompt("Введите число");

function sumTo(n) {
  if (n > 1) {
    return n + sumTo(n - 1);
  } else {
    return n;
  }
}

alert(sumTo(n));

// 3 - с использованием формулы для подсчета суммы арифметической прогрессии

var n = +prompt("Введите число");

function sumTo(n) {
  sum = ((2 + (n - 1)) / 2) * n;
  alert(sum);
}
sumTo(n);

// Какой из вариантов самый медленный я не понял, т.к. vsCode при выполнении везде показывал очень-очень близкие результаты.
// Но ссылаясь на интернет, скажу что метод использования рекруссии медленнее, чем цикл.
// По логике, самым быстрым будет вариант через формулу, т.к. это, по-сути простой подсчет.
// Подсчитать при помощи рекруссии sumTo(100000) не выйдет, её максимальная глубина ограничена на 10000 вложенных вызовов.

// Задание 4

var newArr = [5, 7, [4, [2], 8, [1, 3, "a"], 2], [9, [], [2, [3, [5, 'a']]]], 1, 8, "randomWord"]; // 60

function treeSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object" && arr[i] != null && typeof arr.length == 'number') {
      sum += treeSum(arr[i]);
    } else if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      sum += arr[i];
    }
  }
  
  return sum;
}

treeSum(newArr);
