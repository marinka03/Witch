import createModal from './helpers/createModal';

const container = document.querySelector('.container');
const rulesBtn = document.getElementById('rules-btn');

const TEXT =
  'You need to collect all the bats and jump over fire and arrows. The Inquisition is hunting you. Be brave and be careful!';
const TITLE = 'Rules';

rulesBtn.addEventListener('click', openModal);

function openModal(evt) {
  const markup = createModal(TITLE, TEXT);
  container.insertAdjacentHTML('afterend', markup);
  rulesBtn.removeEventListener('click', openModal);

  const closeModalBtn = document.querySelector('.close-modal');
  const backdrop = document.querySelector('.backdrop');
  backdrop.style.display = 'block';
  closeModalBtn.addEventListener('click', onCloseModal);
  backdrop.addEventListener('click', onCloseModal);

  function onCloseModal() {
    backdrop.innerHTML = '';
    backdrop.style.display = 'none';
    closeModalBtn.removeEventListener('click', onCloseModal);
  }

  rulesBtn.addEventListener('click', openModal);
}
