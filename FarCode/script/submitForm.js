const res = document.querySelector(".modal__registration");
const registerButton =  document.querySelector(".register__button");
register_form.onsubmit = async (e) => {
    e.preventDefault();
    // let response = await fetch('URL', {  
    //   method: 'POST',
    //   body: new FormData(register_form)
    // });
    // let result = await response.json();
    sayRes()
    document.getElementById("register_form").reset()
    showModal();
  };
function sayRes() {
    res.classList.toggle("hidden");
    setTimeout(() => {
        res.classList.toggle("hidden");
    }, 1300);
}