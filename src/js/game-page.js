import * as bootstrap from 'bootstrap';
import jumpWitch from '../helpers/jumpWitch';

const witch = document.getElementById('witch');
const fire = document.getElementById('fire');
const arrow = document.getElementById('arrow');
const bat = document.getElementById('bat');

const cloud = document.getElementById('cloud');
const output = document.getElementById('rangevalue');
let rangeBat = document.getElementById('range-bat');
const reloadBtnD = document.getElementById('reload-btn-dead');
const reloadBtnW = document.getElementById('reload-btn-win');

let batCounter = 0;

document.addEventListener('keydown', function keydown(e) {
  if (e.code === 'ArrowUp' || e.code === 'KeyW') {
    jumpWitch(witch);
  }
});
witch.classList.add('move');

// let batRight = parseInt(window.getComputedStyle(bat).getPropertyValue('right'));
// let value = rangeBat.value;

function areElementsTouching(element1, element2) {
  // Отримуємо координати та розміри першого елемента
  const rect1 = element1.getBoundingClientRect();
  // Отримуємо координати та розміри другого елемента
  const rect2 = element2.getBoundingClientRect();

  // Перевіряємо, чи координати та розміри перетинаються
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

let isTouch = setInterval(() => {
  if (areElementsTouching(witch, fire) || areElementsTouching(witch, arrow)) {
    rangeBat.value = 0;
    output.value = 0;
    batCounter = 0;
    var myModalLoose = new bootstrap.Modal(
      document.getElementById('modal-dead'),
      {}
    );
    reloadBtnD.addEventListener('click', () => {
      document.location.reload();
    });
    bat.style.animation = 'none';
    witch.style.animation = 'none';
    arrow.style.animation = 'none';
    fire.style.animation = 'none';
    cloud.style.animation = 'none';
    clearInterval(isTouch);
    clearInterval(isBatCounted);
    myModalLoose.show();
  }
}, 120);

let isBatCounted = setInterval(() =>{
  if (areElementsTouching(witch, bat)) {
    batCounter += 1;
    rangeBat.value = batCounter;
    output.textContent = batCounter;

  }
  if (batCounter == 10) {
    // batCounter = 0;
    // rangeBat.value = 0;
    // output.value = 0;
    var myModalWin = new bootstrap.Modal(
      document.getElementById('modal-win'),
      {}
    );
    reloadBtnW.addEventListener('click', () => {
      document.location.reload();
    });
    bat.style.animation = 'none';
    witch.style.animation = 'none';
    arrow.style.animation = 'none';
    fire.style.animation = 'none';
    cloud.style.animation = 'none';
    clearInterval(isTouch);
    clearInterval(isBatCounted);
    myModalWin.show();

  }
}, 200);
