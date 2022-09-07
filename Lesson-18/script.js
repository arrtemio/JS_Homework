const topButton = document.getElementById('top-button'),
      stopWatch = document.getElementById('stopwatch'),
      minutes = document.getElementById('minutes'),
      seconds = document.getElementById('seconds'),
      msec = document.getElementById('msec'),
      botButtons = document.getElementById('bot-buttons'),
      stops = document.getElementById('stop-list');

let timer,
    save,
    reset;

function getTime() {
  msec.innerHTML++;

  msec.innerHTML = +msec.innerHTML < 10 ? `0${msec.innerHTML}` : msec.innerHTML;

  if (+seconds.innerHTML === 59 && +msec.innerHTML === 100) {
      seconds.innerHTML = '00';
      msec.innerHTML = '00';
      minutes.innerHTML++;
      minutes.innerHTML = +minutes.innerHTML < 10 ? `0${minutes.innerHTML}` : minutes.innerHTML;
  }

  if (+msec.innerHTML === 100) {
      msec.innerHTML = '00';
      seconds.innerHTML++;
      seconds.innerHTML = +seconds.innerHTML < 10 ? `0${seconds.innerHTML}` : seconds.innerHTML;
  }

  if (+minutes.innerHTML === 60) {
      clearInterval(timer);
      topButton.classList.add('none');
      save.classList.add('none');
  }
}

function running() {
  stopWatch.dataset.watch = 'running';

  topButton.innerHTML = 'STOP';
  botButtons.innerHTML = `<button id="save" class='button'>SAVE</button>
    <button id="reset" class='button'>RESET</button>`;

  reset = document.getElementById('reset');
  save = document.getElementById('save');

  timer = setInterval(getTime, 10);

  reset.addEventListener('click', resetWatch);

  save.addEventListener('click', saveStops);
}

function stopped() {
  stopWatch.dataset.watch = 'stopped';
  topButton.innerHTML = 'RUN';
  
  clearInterval(timer);
}

function run() {
  stopWatch.dataset.watch = 'running';
  topButton.innerHTML = 'STOP';

  timer = setInterval(getTime, 10);
}

topButton.addEventListener('click', () => {
  if (stopWatch.dataset.watch === 'initial') {

    running();

  } else if (stopWatch.dataset.watch === 'running') {

    stopped();

  } else {

    run();

  }
});

function saveStops() {
  stops.innerHTML += `<li>Время: ${minutes.innerHTML}:${seconds.innerHTML}:${msec.innerHTML}</li>`;
}

function resetWatch() {
  clearInterval(timer);

  topButton.classList.remove('none');
  save.classList.remove('none');
  stopWatch.dataset.watch = 'initial';
  topButton.innerHTML = 'START';
  minutes.innerHTML = '00';
  seconds.innerHTML = '00';
  msec.innerHTML = '00';
  stops.innerHTML = '';
  botButtons.innerHTML = '';
}

window.addEventListener('beforeunload', () => {
  let condition = JSON.stringify({
      msec: msec.innerHTML,
      seconds: seconds.innerHTML,
      minutes: minutes.innerHTML,
      stopWatchCond: stopWatch.dataset.watch,
      stops: stops.innerHTML,
  });

  sessionStorage.setItem('condition', condition);
});

window.addEventListener('DOMContentLoaded', () => {
  let upload = JSON.parse(sessionStorage.getItem('condition'));

  minutes.innerHTML = upload.minutes;
  seconds.innerHTML = upload.seconds;
  msec.innerHTML = upload.msec;
  stops.innerHTML = upload.stops;

  if (upload.stopWatchCond === 'running') {

    running();
  } else if (upload.stopWatchCond === 'stopped') {

    stopped();

    botButtons.innerHTML = `<button id="save" class='button'>SAVE</button>
    <button id="reset" class='button'>RESET</button>`;

    reset = document.getElementById('reset');
    save = document.getElementById('save');

    reset.addEventListener('click', resetWatch);

    save.addEventListener('click', saveStops);
  }
});
