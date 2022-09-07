// var xhr = new XMLHttpRequest();

// var getUsers = document.getElementById('button'),
//     main = document.getElementsByClassName('main')[0],
//     box = document.createElement('div');

// getUsers.addEventListener('click', function () {
//   xhr.open('GET', 'https://reqres.in/api/users?page=2');

//   xhr.send();

//   xhr.onload = function () {
//     var statusType = +String(xhr.status)[0];

//     if (statusType === 2) {
//       var users = JSON.parse(xhr.response).data;

//       box.classList.add('box');
//       main.append(box);

//       for (var k in users) {
//         var userLink = document.createElement('div');

//         userLink.classList.add('user-link');
//         userLink.innerHTML = 'User ' + (users.indexOf(users[k]) + 1);
//         box.append(userLink);

//         var userBox = document.createElement('div');

//         userBox.classList.add('user-box');

//         userBox.innerHTML +=
//           '<img src = "' + users[k].avatar + '">' +
//           '<p>' + 'First Name: ' + users[k].first_name + '<br>' +
//           'Last Name: ' + users[k].last_name + '</p>';

//         main.append(userBox);
//       }

//       document.getElementsByClassName('user-box')[0].classList.add('show');
//       document.getElementsByClassName('user-link')[0].classList.add('selected-link');
//     } else {
//       main.innerHTML = 'Ошибка обработки данных с сервера';
//     }
//   };

//   getUsers.disabled = true;
// });

// box.addEventListener('click', function (evt) {
//   var target = evt.target;
//   var links = document.getElementsByClassName('user-link');
//   var userBox = document.getElementsByClassName('user-box');

//   if (target.classList.value === 'user-link') {
//     document.getElementsByClassName('show')[0].classList.remove('show');
//     links[0].classList.remove('selected-link');

//     for (var i = 0; i < links.length; i++) {
//       if (target === links[i]) {
//         links[i].classList.add('selected-link');
//         userBox[i].classList.add('show');
//       } else {
//         if (links[i] !== target) {
//           links[i].classList.remove('selected-link');
//           userBox[i].classList.remove('show');
//         }
//       }
//     }
//   }
// });

const getUsers = document.getElementById('button'),
  main = document.getElementsByClassName('main')[0],
  box = document.createElement('div');

async function getData() {
  let response = await fetch('https://reqres.in/api/users?page=2');

  if (response.ok) {
    const json = await response.json();
    let users = json.data;
    console.log(users);

    box.classList.add('box');
    main.append(box);

    for (let user in users) {
      let userLink = document.createElement('div');

      userLink.classList.add('user-link');
      userLink.innerHTML = `User ${users.indexOf(users[user]) + 1}`;
      box.append(userLink);

      const userBox = document.createElement('div');

      userBox.classList.add('user-box');

      userBox.innerHTML +=
        `<img src="${users[user].avatar}">` +
        `<p>First Name: ${users[user].first_name} <br>` +
        `Last Name: ${users[user].last_name} </p>`;

      main.append(userBox);
    }

    document.getElementsByClassName('user-box')[0].classList.add('show');
    document.getElementsByClassName('user-link')[0].classList.add('selected-link');
  } else {
    main.innerHTML = 'Server data error';
  }
}

getUsers.addEventListener('click', () => {
  getData();
});

box.addEventListener('click', function (evt) {
  const target = evt.target;
  const links = document.getElementsByClassName('user-link');
  const userBox = document.getElementsByClassName('user-box');

  if (target.classList.value === 'user-link') {
    document.getElementsByClassName('show')[0].classList.remove('show');
    links[0].classList.remove('selected-link');

    for (let i = 0; i < links.length; i++) {
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
