// 1

{
  const regexp =
    /^[a-z]{3,10}_[a-z]{3,10}(-\d{4}|)@([a-z\d]{2,21}|([a-z\d]{1,10}(\.|-)[a-z\d]{1,10}))\.com$/i;

  regexp.test('name_surname-1234@g-mai-l.com');
}

// 2

{
  const isCorrect = (number) => {
    const regexp = /^((\+?375-?)|(8-?0))(25|29|33|44|17)-?[1-9]{1}[\d]{2}(-?[\d]{2}){2}$/;

    return regexp.test(number);
  };

  isCorrect('+375-25-777-77-77');
}

// 3.1

{
  const getVowels = (text) => {
    const regexp = /[ауоыэеёиюяaeiouy]/gi;

    return text.match(regexp) ? text.match(regexp).length : 0;
  };

  getVowels('');
}


// 3.2

{
  const getVowels = (text) => {
    const regexp = /[ауоыэеёиюяaeiouy]/i;
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
      if (regexp.test(text[i])) {
        counter++;
      }
    }
    return counter;
  };

  getVowels('');
}
