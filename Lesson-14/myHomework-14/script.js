'use strict';

var tableContainer = document.getElementById('table-container');

var input = document.getElementsByTagName('input'),
    inputX = document.getElementById('xInput'),
    inputY = document.getElementById('yInput'),
    button = document.getElementById('button');

for (var i = 0; i < input.length; i++) {
  input[i].addEventListener('keyup', function () {
    if (inputX.value === '' || inputY.value === '') {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });
}

button.addEventListener('click', function () {
  var x = +inputX.value,
      y = +inputY.value;

  if (x < 1 || x > 10 || y < 1 || y > 10 || parseInt(x) !== x || parseInt(y) !== y) {
    alert('Введите целое число от 1 до 10!!!');

    inputX.value = '';
    inputY.value = '';
    tableContainer.innerHTML = '';
    button.disabled = true;
  } else {
    tableContainer.innerHTML = '';
    createChessPole(tableContainer, x, y);
  }

  function createChessPole(parent, columns, rows) {
    var table = document.createElement('table');

    for (var i = 0; i < rows; i++) {
      var tr = document.createElement('tr');

      for (var j = 0; j < columns; j++) {
        var td = document.createElement('td');
        
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    parent.appendChild(table);

    var trCollection = table.getElementsByTagName('tr');

    for (var i = 0; i < trCollection.length; i++) {
      var tdInTr = trCollection[i].getElementsByTagName('td');

      if (i % 2 !== 0) {
        for (var j = 0; j < tdInTr.length; j++) {
          if (j % 2 !== 0) {
            tdInTr[j].classList.add('black');
          }
        }
      } else if (i % 2 === 0) {
        for (var j = 0; j < tdInTr.length; j++) {
          if (j % 2 === 0) {
            tdInTr[j].classList.add('black');
          }
        }
      }
    }

    table.addEventListener('click', function (evt) {
      evt.preventDefault();

      var target = evt.target;
      var firstTd = document.getElementsByTagName('td')[0];

      while (target.tagName === 'TD') {
        for (var i = 0; i < trCollection.length; i++) {
          var tdInTr = trCollection[i].getElementsByTagName('td');
          if (firstTd.classList.contains('black') === false) {
            for (var i = 0; i < trCollection.length; i++) {
              var tdInTr = trCollection[i].getElementsByTagName('td');

              if (i % 2 !== 0) {
                for (var j = 0; j < tdInTr.length; j++) {
                  if (j % 2 !== 0) {
                    tdInTr[j].classList.add('black');
                  } else {
                    tdInTr[j].classList.remove('black');
                  }
                }
              } else if (i % 2 === 0) {
                for (var j = 0; j < tdInTr.length; j++) {
                  if (j % 2 === 0) {
                    tdInTr[j].classList.add('black');
                  } else {
                    tdInTr[j].classList.remove('black');
                  }
                }
              }
            }
          } else {
            for (var i = 0; i < trCollection.length; i++) {
              var tdInTr = trCollection[i].getElementsByTagName('td');

              if (i % 2 !== 0) {
                for (var j = 0; j < tdInTr.length; j++) {
                  if (j % 2 !== 0) {
                    tdInTr[j].classList.remove('black');
                  } else {
                    tdInTr[j].classList.add('black');
                  }
                }
              } else if (i % 2 === 0) {
                for (var j = 0; j < tdInTr.length; j++) {
                  if (j % 2 === 0) {
                    tdInTr[j].classList.remove('black');
                  } else {
                    tdInTr[j].classList.add('black');
                  }
                }
              }
            }
          }
        }

        target = target.parentNode;
      }
    });
  }
});
