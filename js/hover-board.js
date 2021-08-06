const board = document.querySelector('#board');

const SQUARES_NUMBER = 600;

const colors = [
  '#ffffff',
  '#ffffdf',
  '#ffffbf',
  '#ffff9e',
  '#ffff7a',
  '#ffff52',
  '#ffff00',
  '#d0d015',
  '#a3a21b',
  '#78771b',
  '#504e17',
  '#2b2911',
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    // console.log('mouseover');
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    // console.log('mouseleave');
    removeColor(square);
  });

  board.append(square);
}

function setColor(el) {
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
  el.style.backgroundColor = '#1d1d1d';
  el.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
