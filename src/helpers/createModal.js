const createModal = (title, text) => `<div class="backdrop">
<div class="modal">
  <div class="modal-container">
    <button type="button" class="close-modal">Close</button>
    <h2 class="title-modal">${title}</h2>
    <p class="text-modal">${text}</p>
  </div>
</div>
</div>`;

export default createModal;