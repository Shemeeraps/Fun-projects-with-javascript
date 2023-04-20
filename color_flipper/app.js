'use strict';

const colors = [
  'red',
  'green',
  'yellow',
  '#34282C',
  '#3A3B3C',
  '#736F6E',
  '#728FCE',
  '#15317E',
];

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

document.querySelector('#btn').addEventListener('click', function () {
  const randomNumber = getRandomNumber();

  document.querySelector('body').style.backgroundColor = colors[randomNumber];
  document.querySelector('.color').textContent = colors[randomNumber];
});
