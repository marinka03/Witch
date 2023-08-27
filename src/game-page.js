const witch = document.getElementById('witch');

const fire = document.getElementById('fire');
const arrow = document.getElementById('arrow');
const bat = document.getElementById('bat');

const inputWrapper = document.getElementById('input-wrapper');
const output = document.getElementById('rangevalue');
let rangeBat = document.getElementById('range-bat');

document.addEventListener('keydown', function keydown(event) {
  jump();
});
witch.classList.add('move');

function jump() {
  if (witch.classList != 'jump') {
    witch.classList.add('jump');
    witch.classList.remove('move');
  }
  setTimeout(function () {
    witch.classList.add('move');
    witch.classList.remove('jump');
  }, 600);
}

let isAlive = setInterval(function life() {
  let fireRight = parseInt(
    window.getComputedStyle(fire).getPropertyValue('right')
  );
  let arrowRight = parseInt(
    window.getComputedStyle(arrow).getPropertyValue('right')
  );
  let witchBottom = parseInt(
    window.getComputedStyle(witch).getPropertyValue('bottom')
  );

  if (
    (fireRight < 825 && fireRight > 780 && witchBottom < 20) ||
    (arrowRight < 812 && arrowRight > 767 && witchBottom < 20)
  ) {
    rangeBat.value = 0;
    output.value = 0;
    window.alert('GAME OVER !!!');
  }
}, 10);
