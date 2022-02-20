const cor1 = document.querySelector('.black');
const cor2 = document.querySelector('.red');
const cor3 = document.querySelector('.blue');
const cor4 = document.querySelector('.green');

function className(event) {
  const lugar = document.querySelector('.selected');
  lugar.classList.remove('selected');
  event.target.classList.add('selected');
}

cor1.addEventListener('click', className);
cor2.addEventListener('click', className);
cor3.addEventListener('click', className);
cor4.addEventListener('click', className);

const quads = document.getElementsByClassName('pixel');

function paintBlue(event) {
  event.target.classList.add('blue');
  event.target.classList.remove('red');
  event.target.classList.remove('black');
  event.target.classList.remove('green');
}

function paintBlack(event) {
  event.target.classList.add('black');
  event.target.classList.remove('red');
  event.target.classList.remove('blue');
  event.target.classList.remove('green');
}

function paintRed(event) {
  event.target.classList.add('red');
  event.target.classList.remove('black');
  event.target.classList.remove('blue');
  event.target.classList.remove('green');
}

function paintGreen(event) {
  event.target.classList.add('green');
  event.target.classList.remove('red');
  event.target.classList.remove('blue');
  event.target.classList.remove('black');
}

function paint(event) {
  const lugar = document.querySelector('.selected');
  if (lugar === cor1) {
    paintBlack(event);
  } else if (lugar === cor2) {
    paintRed(event);
  } else if (lugar === cor3) {
    paintBlue(event);
  } else if (lugar === cor4) {
    paintGreen(event);
  }
}

for (let index = 0; index < quads.length; index += 1) {
  quads[index].addEventListener('click', paint);
}

const reset = document.querySelector('#clear-board');
reset.addEventListener('click', () => {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].classList.remove('black', 'red', 'blue', 'green');
  }
});
