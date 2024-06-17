//переход к форме регистрации на странице кейса
const participationButton = document.querySelector(".case__intro-button");
const targetRegistationForm = document.querySelector(".register");

participationButton.addEventListener("click", (e) => {
    e.preventDefault();
    targetRegistationForm.scrollIntoView({ behavior: 'smooth' });
} )