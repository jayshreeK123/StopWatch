let timerInterval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let display = document.querySelector('.display');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');
let resetButton = document.querySelector('.reset');

function startTimer() {
  timerInterval = setInterval(updateTimer, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  display.textContent = '00:00:00';
}

function updateTimer() {
  milliseconds += 10;

  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
  }

  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }

  display.textContent = formatTime(minutes) + ':' + formatTime(seconds) + ':' + formatTime(Math.floor(milliseconds / 10));
}

function formatTime(time) {
  return (time < 10 ? '0' : '') + time;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
