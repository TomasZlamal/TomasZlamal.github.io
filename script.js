var menu = document.querySelector(".burger-bar");
var barA = document.querySelector(".bar-a");
var barB = document.querySelector(".bar-b");
var barC = document.querySelector(".bar-c");
var selected = false;
menu.addEventListener("click", () => {
    var menu_items = document.querySelector(".menu-items");
    barA.classList.toggle("a");
    barB.classList.toggle("b");
    barC.classList.toggle("c"); 
    if(!selected) {
        menu_items.style.width = "100%";
    }
    else {
        menu_items.style.width = "0";
    }
    selected = !selected;
});
