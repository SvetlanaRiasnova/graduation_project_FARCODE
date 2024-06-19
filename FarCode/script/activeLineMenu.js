let items = document.getElementsByClassName('conсept__menu-link');
let activeClassName = 'active';

function unselectItems() {
  for (let i = 0; i < items.length; i++) {  
    items[i].classList.remove(activeClassName);
  }
}

function selectItem(item) {
  unselectItems();
  item.classList.add(activeClassName);
}

function onItemClick(event) {
  selectItem(event.target);
}

for (let i = 0; i < items.length; i++) {  
  items[i].addEventListener('click', onItemClick);
}

