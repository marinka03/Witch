const witch = document.getElementById('witch');
const fire = document.getElementById('fire');
const arrow = document.getElementById('arrow');
const bat = document.getElementById('bat');
const inputWrapper = document.getElementById('input-wrapper');
const output = document.getElementById('rangevalue');
let rangeBat = document.getElementById('range-bat');
// let witchBottom = parseInt(window.getComputedStyle(witch).getPropertyValue('bottom'))
// let batRight = parseInt(window.getComputedStyle(bat).getPropertyValue('right'));
// bat.addEventListener('input', function onInput(evt) {
let batCounter = 0;

//   let value = rangeBat.value;
//   console.log("value",value)
//   if (batRight === 800 && witchBottom < 5) {
//     console.log(batRight);
//     console.log(value);
//     console.dir(rangeBat.value);
//    return value += 1;
//   }
// });

// console.log(witch.style.animation = "wMove 500ms linear 1s infinite");

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
let witchBottom = parseInt(
  window.getComputedStyle(witch).getPropertyValue('bottom')
);
let batRight = parseInt(window.getComputedStyle(bat).getPropertyValue('right'));
let value = rangeBat.value;

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
    batCounter = 0;
    console.log('mertva');
  }
}, 100);

let isBatCounted = setInterval(function isBatCount() {
  let witchBottom = parseInt(
    window.getComputedStyle(witch).getPropertyValue('bottom')
  );

  let batRight = parseInt(
    window.getComputedStyle(bat).getPropertyValue('right')
  );
  // CHANGE COUNTER IN FUTURE
  if (batCounter >= 3) {
    batCounter = 0;
    rangeBat.value = 0;
    output.value = 0;
    clearInterval(isBatCounted);
  }

  if (batRight < 812 && batRight > 767 && witchBottom < 20) {
    batCounter += 1;

    // console.dir(output.textContent)
    rangeBat.value = batCounter;
    console.dir(rangeBat.value);
    output.textContent = batCounter;
  }
}, 200);
