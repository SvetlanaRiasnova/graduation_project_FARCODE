// //открытие модального окна
const regButton = document.querySelector(".intro__info-button");
const modalWindow = document.querySelector(".modal");
const modalFon = document.querySelector(".modal-fon");
const closeButton = document.querySelector(".modal_close");

function showModal() {
    
    modalWindow.classList.toggle("hidden");
    modalFon.classList.toggle("hidden");

}
function closeModal() {
        modalWindow.classList.add("hidden");
        modalFon.classList.add("hidden");
}

modalFon.addEventListener('click', showModal);
closeButton.addEventListener('click', closeModal);
regButton.addEventListener("click", showModal);


//переход к форме регистрации на странице кейса
const participationButton = document.querySelector(".case__intro-button");
const targetRegistationForm = document.querySelector(".register");

participationButton.addEventListener("click", (e) => {
    e.preventDefault();
    targetRegistationForm.scrollIntoView({ behavior: 'smooth' });
} )