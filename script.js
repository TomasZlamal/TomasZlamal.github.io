var menu = document.querySelector(".burger-bar");
var selected = false;
menu.addEventListener("click", () => {
    var menu_items = document.querySelector(".menu-items");
    if(!selected) {
        menu_items.style.width = "100%";
    }
    else {
        menu_items.style.width = "0";
    }
    selected = !selected;
});
