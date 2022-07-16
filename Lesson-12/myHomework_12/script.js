// Сверстать таблицу из 3х столбцов, в последней строке которой все ячейки объеденены в одну с текстом
// "Добавить".
// По клику на эту ячейку-кнопку в начало таблицы должна добавляться новая строка.
// По клику на ячейку таблицы, в ней должен появиться сфокусированный (!!!) текстовый инпут.
// При потере фокуса инпутом - он должен исчезнуть, на его месте остается лишь ранее введенный в него текст.
// При клике на ячейку, уже содержащую текст - вставляется инпут с этим же текстом (т.е. можно отредактировать текст).
// В одно время в таблице может находиться только один инпут.
// При реализации использовать делегирование событий.

// Добавить событие по нажатию на Enter в случае, если на странице есть активный инпут. Событие должно работать точно
// так же, как и потеря фокуса, то есть прятать инпут и оставлять в ячейке текст. *

"use strict";

var table = document.getElementById("table"),
  tbody = table.getElementsByTagName("tbody")[0],
  cell = table.getElementsByTagName("td"),
  button = document.getElementById("button");

button.addEventListener("click", function (evt) {
  evt.stopImmediatePropagation();
  var firstTableRow = tbody.firstElementChild;
  var newTableRow = document.createElement("tr");

  newTableRow.innerHTML = "<td></td><td></td><td></td>";

  tbody.insertBefore(newTableRow, firstTableRow);
  //   tbody.prepend(newTableRow);
});

tbody.addEventListener("click", function (event) {
  var target = event.target;

  while (target != tbody) {
    if (target.tagName === "TD") {
      setInput(target);
      //   return;
    }
    target = target.parentNode;
  }
});

function setInput(target) {
  var pasteInput = document.createElement("input");

  target.prepend(pasteInput);
  pasteInput.focus();

  if (target.textContent) {
    pasteInput.value = target.textContent;
  }

  pasteInput.addEventListener("focusout", function () {
    target.innerHTML = pasteInput.value;
  });
  pasteInput.addEventListener("keyup", function (key) {
    if (key.keyCode === 13) {
      pasteInput.blur();
    }
  });
}
