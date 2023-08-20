const witch = document.getElementById('witch');
const fireball = document.getElementById('fire');
const arrow = document.getElementById('arrow');

console.log(fireball);
console.log(witch);

document.addEventListener('keydown', function keydown(event) {
  jump();
});

function jump() {
  if (witch.classList != 'jump') { 
    witch.classList.add('jump');  
  }
  setTimeout(function () {
      witch.classList.remove('jump');
    }, 600);
    
}

// let isAlive = setInterval(
//     function life(){
//         let fireballRight = parseInt(window.getComputedStyle(fireball).getPropertyValue('right'))
//         let arrowRight = parseInt(window.getComputedStyle(arrow).getPropertyValue('right'))
//         let witchBottom = parseInt(window.getComputedStyle(witch).getPropertyValue('bottom'))

//         if(fireballRight < 750 && fireballRight > 700 && witchBottom < 20 || arrowRight < 750 && arrowRight > 730 && witchBottom < 20){
//             window.alert("GAME OVER !!!")
//         }
//     }
//     ,50)