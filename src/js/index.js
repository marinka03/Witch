import * as bootstrap from 'bootstrap';

const container = document.querySelector('.container');
const rulesBtn = document.getElementById('rules-btn');

const TEXT =
  'You need to collect all the bats and jump over fire and arrows. The Inquisition is hunting you. Be brave and be careful!';
const TITLE = 'Rules';
var myModal = new bootstrap.Modal(document.getElementById("myModal"), {});
myModal.show()
rulesBtn.addEventListener('click', ()=>{
  myModal.show()
});