var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://reqres.in/api/users?page=2');

xhr.send();

var getUsers = document.getElementById('button');
var main = document.getElementsByClassName('main')[0];
var box = document.createElement('div');

getUsers.addEventListener('click', function () {
  var statusType = +String(xhr.status)[0];

  if (statusType === 2) {
    var users = JSON.parse(xhr.response).data;

    box.classList.add('box');
    main.append(box);

    for (var k in users) {
      var userLink = document.createElement('div');

      userLink.classList.add('user-link');
      userLink.innerHTML = 'User ' + (users.indexOf(users[k]) + 1);
      box.append(userLink);

      var userBox = document.createElement('div');

      userBox.classList.add('user-box');

      userBox.innerHTML +=
        '<img src = "' + users[k].avatar + '">' +
        '<p>' + 'First Name: ' + users[k].first_name + '<br>' +
        'Last Name: ' + users[k].last_name + '</p>';

      main.append(userBox);
    }

    document.getElementsByClassName('user-box')[0].classList.add('show');
    document.getElementsByClassName('user-link')[0].classList.add('selected-link');
  } else {
    main.innerHTML = 'Ошибка обработки данных с сервера';
  }

  getUsers.disabled = true;
});

box.addEventListener('click', function (evt) {
  var target = evt.target;

  if (target.classList.value === 'user-link') {
    var links = document.getElementsByClassName('user-link');
    var userBox = document.getElementsByClassName('user-box');

    document.getElementsByClassName('show')[0].classList.remove('show');
    links[0].classList.remove('selected-link');

    for (var i = 0; i < links.length; i++) {
      if (target === links[i]) {
        links[i].classList.add('selected-link');
        userBox[i].classList.add('show');
      } else {
        if (links[i] !== target) {
          links[i].classList.remove('selected-link');
          userBox[i].classList.remove('show');
        }
      }
    }
  }
});
