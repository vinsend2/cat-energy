var MainMenuBtn = document.querySelector(".main-menu__tuggle");
var MainMenuList = document.querySelector(".main-menu");

MainMenuBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    MainMenuList.classList.toggle("main-menu--open");
    MainMenuBtn.classList.toggle("main-menu__tuggle--open");
})