'use strict';

var container = document.getElementById('container');
var buttons = document.getElementsByTagName('button'),
    button = buttons[0];
var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML =
  'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML =
  'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var linksFrstPar = firstPar.children,
    linksSecPar = secondPar.children;

button.onclick = function () {
  for (var i = 0; i < linksFrstPar.length; i++) {
    linksFrstPar[i].classList.toggle('red');
  }
};

secondPar.addEventListener('click', function (evt) {
  var target = evt.target;

  evt.preventDefault();

  if (target.tagName === 'A') {
    linkGet(target);
  }
});

function linkGet(target) {
  var linkPath = JSON.parse(JSON.stringify(target.getAttribute('href')));
  var parseHref = JSON.stringify({ path: linkPath });

  if (localStorage.getItem(target.text) === null) {
    localStorage.setItem(target.text, parseHref);

    alert('ссылка сохранена');
    
    target.href = '#';
  } else {
    var link = JSON.parse(localStorage[target.text]);

    alert(link.path);
  }
}

window.addEventListener('load', function () {
  localStorage.clear();
});
