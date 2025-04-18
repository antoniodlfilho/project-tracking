const menuMobile = document.getElementById("menu_mobile");
const listItemsMobile = document.getElementById("list_menu");

function menuOnOff() {
    listItemsMobile.classList.toggle("active");
}

function menuImg() {
    if(listItemsMobile.classList.contains("active")) {
        menuMobile.src = "./images/icon-close.svg"
    } else {
        menuMobile.src = "./images/icon-hamburger.svg"
    }
}
 
menuMobile.addEventListener("click", menuOnOff);
menuMobile.addEventListener("click", menuImg);