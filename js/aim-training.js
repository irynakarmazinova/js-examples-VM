const startBtn = document.getElementById('start');
const screens = document.querySelectorAll('.screen');
const timeList = document.getElementById('time-list');
const timeRef = document.getElementById('time');
const board = document.getElementById('board');

let time = 0;
let score = 0;

const colors = [
  '#ffe8d9',
  '#ffd2b3',
  '#ffbb8e',
  '#ffa46a',
  '#ff8d45',
  '#ff7518',
  '#d16119',
  '#a44e18',
  '#793b16',
  '#da5700',
];

startBtn.addEventListener('click', e => {
  e.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', e => {
  if (e.target.classList.contains('time-btn')) {
    // console.log(e.target);
    time = parseInt(e.target.getAttribute('data-time'));
    screens[1].classList.add('up');

    startGame();
  }
});

board.addEventListener('click', e => {
  if (e.target.classList.contains('circle')) {
    score++;
    e.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;

    if (current < 10) {
      current = `0${current}`;
    }

    setTime(current);
  }
}

// повторяющиеся элементы нужно выносить в функцию
function setTime(value) {
  timeRef.innerHTML = `00:${value}`;
}

function finishGame() {
  //   timeRef.parentNode.remove();
  timeRef.parentNode.classList.add('hide');
  board.innerHTML = `<h2>Cчет: <span class="primary">${score}</span></h2>`;
}

function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  //   circle.style.backgroundColor =
  //     colors[Math.floor(Math.random() * colors.length)];
  const color = getRandomColor();
  circle.style.backgroundColor = color;
  circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${x}px`;
  circle.style.left = `${y}px`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
  // return colors[Math.floor(Math.random() * colors.length)];

  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

// cheat code - kill all circles automatically
// function winTheGame() {
//   function kill() {
//     const circle = document.querySelector('.circle');

//     if (circle) {
//       circle.click();
//     }
//   }

//   setInterval(kill, 75);
// }
