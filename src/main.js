const container = document.querySelector('.container');
const modalWrapper = document.querySelector('.modal-wrapper');

const btn = document.getElementById('rules-btn');

const TEXT =
  'You need to collect all the bats and jump over fire and arrows. The Inquisition is hunting you. Be brave and be careful!';
const TITLE = 'Rules';

btn.addEventListener('click', openModal);

function openModal(evt) {
  const markup = `<div class="backdrop">
  <div class="modal">
    <div class="modal-container">
      <button type="button" class="close-modal">Close</button>
      <h2 class="title-modal">${TITLE}</h2>
      <p class="text-modal">${TEXT}</p>
    </div>
  </div>
  </div>`;

  btn.removeEventListener('click', openModal);

  container.insertAdjacentHTML('afterend', markup);

  const closeModal = document.querySelector('.close-modal');
  const backdrop = document.querySelector('.backdrop');

  backdrop.style.display = 'block';

  closeModal.addEventListener('click', onClose);
  function onClose(evt) {
    console.dir(evt.target);
    backdrop.innerHTML = '';
    backdrop.style.display = 'none';

    closeModal.removeEventListener('click', onClose);
    btn.addEventListener('click', openModal);
  }
}

// let batRight = parseInt(
//   window.getComputedStyle(bat).getPropertyValue('right')
// );

// if (batRight < 812 && batRight > 767 && batRight < 20) {
//   value += 1;
//   console.log(value);
// }
