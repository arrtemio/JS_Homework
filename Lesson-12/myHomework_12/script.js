
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
});

tbody.addEventListener("click", function (event) {
  var target = event.target;

  while (target != tbody) {
    if (target.tagName === "TD") {
      setInput(target);
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
