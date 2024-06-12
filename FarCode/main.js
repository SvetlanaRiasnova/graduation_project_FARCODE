const modalWindow = document.querySelector(".modal");
setTimeout(function(){ 
    modalWindow.classList.toggle("hidden");    
}, 1000);
document.querySelector(".modal_close").addEventListener("click", function(){
    modalWindow.classList.toggle("hidden");          
});