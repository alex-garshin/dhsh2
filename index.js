const menu = document.querySelector(".header__menu");
const buttonMenu = menu.querySelector(".header__menu-burger");
const menuLinks = menu.querySelector(".header__menu-links");
const menuLink = menu.querySelectorAll(".header__menu-link");
const lupaSearch = menu.querySelector(".header__lupa");
const searchBlock = menu.querySelector('.header__search-block')
const lupaSearchBlack = menu.querySelector('.header__lupa-black')

buttonMenu.addEventListener("click", () => {
  switchMenu();
});

const switchMenu = () => {
  menuLinks.classList.toggle("menu__links_opened");
};

lupaSearch.addEventListener("click", () => {
  searchMenu();
});

const searchMenu = () => {
  menuLinks.classList.toggle("menu-links_closed");
  searchBlock.classList.toggle("header__search-block_opened")
  lupaSearchBlack.classList.toggle("header__search-block_opened")
  lupaSearch.classList.toggle("header__lupa_closed")
}