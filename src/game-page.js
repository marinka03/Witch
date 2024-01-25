import jumpWitch from "./helpers/jumpWitch";

const witch = document.getElementById('witch');
const fire = document.getElementById('fire');
const arrow = document.getElementById('arrow');
const bat = document.getElementById('bat');
const inputWrapper = document.getElementById('input-wrapper');
const output = document.getElementById('rangevalue');
let rangeBat = document.getElementById('range-bat');

let batCounter = 0;

document.addEventListener('keydown', function keydown(event) {
  jumpWitch(witch);
});
witch.classList.add('move');


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
    window.confirm("DEAD! ARE YOU WONT TO TRY AGAIN?")
    //NOTIFICATION 
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
    window.confirm("WINNER!!!")
  }

  if (batRight < 812 && batRight > 767 && witchBottom < 20) {
    batCounter += 1;
    rangeBat.value = batCounter;
    console.dir(rangeBat.value);
    output.textContent = batCounter;
  }
}, 200);
