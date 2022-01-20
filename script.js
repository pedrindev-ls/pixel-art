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

const quad1 = document.querySelector('#quad1');
const quad2 = document.querySelector('#quad2');
const quad3 = document.querySelector('#quad3');
const quad4 = document.querySelector('#quad4');
const quad5 = document.querySelector('#quad5');
const quad6 = document.querySelector('#quad6');
const quad7 = document.querySelector('#quad7');
const quad8 = document.querySelector('#quad8');
const quad9 = document.querySelector('#quad9');
const quad10 = document.querySelector('#quad10');
const quad11 = document.querySelector('#quad11');
const quad12 = document.querySelector('#quad12');
const quad13 = document.querySelector('#quad13');
const quad14 = document.querySelector('#quad14');
const quad15 = document.querySelector('#quad15');
const quad16 = document.querySelector('#quad16');
const quad17 = document.querySelector('#quad17');
const quad18 = document.querySelector('#quad18');
const quad19 = document.querySelector('#quad19');
const quad20 = document.querySelector('#quad20');
const quad21 = document.querySelector('#quad21');
const quad22 = document.querySelector('#quad22');
const quad23 = document.querySelector('#quad23');
const quad24 = document.querySelector('#quad24');
const quad25 = document.querySelector('#quad25');


function paint(event) {
    let lugar = document.querySelector('.selected')
    if (lugar === cor1){
        event.target.classList.add('black')
        event.target.classList.remove('red')
        event.target.classList.remove('blue')
        event.target.classList.remove('green')
    } else if (lugar === cor2){
        event.target.classList.add('red')
        event.target.classList.remove('black')
        event.target.classList.remove('blue')
        event.target.classList.remove('green')
    } else if (lugar === cor3){
        event.target.classList.add('blue')
        event.target.classList.remove('red')
        event.target.classList.remove('black')
        event.target.classList.remove('green')
    } else if (lugar === cor4){
        event.target.classList.add('green')
        event.target.classList.remove('red')
        event.target.classList.remove('blue')
        event.target.classList.remove('black')
    }
}

quad1.addEventListener('click', paint);
quad2.addEventListener('click', paint);
quad3.addEventListener('click', paint);
quad4.addEventListener('click', paint);
quad5.addEventListener('click', paint);
quad6.addEventListener('click', paint);
quad7.addEventListener('click', paint);
quad8.addEventListener('click', paint);
quad9.addEventListener('click', paint);
quad10.addEventListener('click', paint);
quad11.addEventListener('click', paint);
quad12.addEventListener('click', paint);
quad13.addEventListener('click', paint);
quad14.addEventListener('click', paint);
quad15.addEventListener('click', paint);
quad16.addEventListener('click', paint);
quad17.addEventListener('click', paint);
quad18.addEventListener('click', paint);
quad19.addEventListener('click', paint);
quad20.addEventListener('click', paint);
quad21.addEventListener('click', paint);
quad22.addEventListener('click', paint);
quad23.addEventListener('click', paint);
quad24.addEventListener('click', paint);
quad25.addEventListener('click', paint);

const reset = document.querySelector('#clear-board');
reset.addEventListener('click', function() {
    const pixels = document.getElementsByClassName('pixel');
    for (let i of pixels) {
        i.classList.remove('black');
        i.classList.remove('red');
        i.classList.remove('blue');
        i.classList.remove('green');
    }
})