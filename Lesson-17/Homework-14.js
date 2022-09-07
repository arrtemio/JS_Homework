// Задание 1:

{
  let { a, b, ...obj } = { a: 1, b: 2, c: 3, d: 4 };
}

//   Задание 2:

{
  let name = prompt('Введите ваше имя');

  const obj = {
    name,
    sayHi() {
      return `Hi, ${obj.name}!`;
    },
  };
}

//   Задание 3

{
  const multiplyPow = ({ a: x, b: y }, z = 1) => {
    return x ** y * z;
  };

  multiplyPow({ a: 2, b: 3 }, 2);
}

// Задание 4

{
  const arr = ['Vasya', 44];

  const getText = (name, age) => {
    return `Hello, I'm ${name} and I'm ${age} years old.`;
  };

  getText(...arr);
}

//   Задание 5

{
  const showNum = (...numbers) => {
    for (let number of numbers) {
      console.log(number);
    }
  };

  showNum(4, 3, 5);
}

//   Задание 6

{
  const countVowelLetters = (text) => {
    text = text.toLowerCase().split('');

    let vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];

    let counter = 0;

    text.forEach(element => vowelLetters.includes(element) && counter++);
    return counter;
  };

  countVowelLetters('Шла Саша по шоссе И сосала сУшку');
}

//   Задание 7

{
  const getUsers = (arr) => {
    const obj = {
      'Пользователи младше 40': arr.filter(user => user.age < 40),
      'Пользователь с именем Федор': arr.find(item => item.name.startsWith('Fedor')),
    };

    return obj;
  };

  getUsers([
    { name: 'Vasya Pupkin', age: 25 },
    { name: 'Ivan Petrov', age: 30 },
    { name: 'Fedor Ivanov', age: 42 },
  ]);
}

//     Задание 8

{
  const getUsers = (arr) => {
    return arr.map((user, index) => ({ [`Пользователь ${index + 1}`]: user }));
  };

  getUsers(['Artsiom', 'Vasya', 'Petr']);
}

//     Задание 9

{
  const concatObj = (arr) => {
    return arr.reduce((prev, item) => Object.assign(prev, item), {});
  };

  concatObj([{ name: 'Vasya' }, { name: 'Piotr', age: 25 }, { salary: '2000$' }]);
}

//     Задание 10

{
  class Animal {
    constructor(name) {
      this.name = name;
      this._foodAmount = 50;
    }
    formatFoodAmount() {
      return `${this._foodAmount} гр.`;
    }
    dailyNorm(amount) {
      if (!arguments.length) return this.formatFoodAmount();
      if (amount < 30 || amount > 100) {
        return 'Недопустимое количество корма.';
      }

      this._foodAmount = amount;
    }
    feed() {
      console.log(`Насыпаем в миску ${this._foodAmount} корма.`);
    }
  }

  class Cat extends Animal {
    feed() {
      super.feed();
      console.log('Кот доволен ^_^');

      return this;
    }
    stroke() {
      console.log('Гладим кота');

      return this;
    }
  }

  const barsik = new Cat('Барсик');
  barsik.feed().stroke();
}

//     Задание 11

{
  function getNumbers(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
      [firstNumber, secondNumber] = [secondNumber, firstNumber];
    }

    return new Promise((resolve, reject) => {
      if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
        let timer = setInterval(() => {
          console.log(firstNumber);

          if (firstNumber === secondNumber) {
            resolve(firstNumber);
            clearInterval(timer);
          }

          firstNumber++;
 
        }, 1000);
      } else {
        reject('В функцию были переданы не целые числа');
      }
    });
  }

  getNumbers(1, 8)
    .then(firstNumber => console.log(`Последнее запомненное число: ${firstNumber}`))
    .catch(error => console.log(`Возникла ошибка в промисе: ${error}`));
}
