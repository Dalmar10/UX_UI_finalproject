let icon = document.querySelector('.moblie_menu_icon');
let icon_toggle = document.querySelector('.moblie_menu_toggle');
let moblie_menu = document.querySelector('.nav_menu');


icon.addEventListener("click", () => {
    icon_toggle.classList.toggle("active");
    mobbile_menu.classList.toggle("active");


})