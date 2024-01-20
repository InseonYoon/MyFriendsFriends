const modal = document.querySelector('#modal');
const openModalBtn = document.querySelector('#formButton');
const closeModalBtn = document.querySelector('#okButton');

openModalBtn.addEventListener('click', () => {
    modal.style.visibility = 'visible';
});
closeModalBtn.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
});