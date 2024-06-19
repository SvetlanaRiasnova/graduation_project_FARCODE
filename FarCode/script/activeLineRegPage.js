let items2 = document.getElementsByClassName("case__menu-link");
let activeClass = 'active';

function unselectItem() {
  for (let i = 0; i < items2.length; i++) {  
    items2[i].classList.remove(activeClass);
  }
}

function selectItem(item) {
  unselectItem();
  item.classList.add(activeClass);
}

function onItemClick(event) {
  selectItem(event.target);
}

for (let i = 0; i < items2.length; i++) {  
  items2[i].addEventListener('click', onItemClick);
}

