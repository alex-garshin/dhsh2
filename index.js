const menu = document.querySelector(".header__menu");
const body = document.querySelector(".body");
const buttonMenu = menu.querySelector(".header__menu-burger");
const menuLinks = menu.querySelector(".header__menu-links");
const menuLink = menu.querySelectorAll(".header__menu-link");
const lupaSearch = menu.querySelector(".header__lupa");
const searchBlock = menu.querySelector(".header__search-block");
const lupaSearchBlack = menu.querySelector(".header__lupa-black");
const listSelect = document.querySelector(".base__lists-selector")




buttonMenu.addEventListener("click", () => {
  switchMenu();
});

const switchMenu = () => {
  menuLinks.classList.toggle("menu__links_opened");
};

const toggleSearchBlock = () => {
  searchBlock.classList.remove("header__search-block_opened");
  searchBlock.classList.add("header__search-block_closed");
  lupaSearch.classList.remove("header__lupa_closed");
  lupaSearch.classList.add("header__lupa_opened");
  menuLinks.classList.remove("menu-links_closed");
  lupaSearchBlack.classList.remove("header__lupa-black_opened");
};

lupaSearch.addEventListener("click", () => {
  searchMenu();
});

const searchMenu = () => {
  menuLinks.classList.toggle("menu-links_closed");
  searchBlock.classList.add("header__search-block_opened");
  searchBlock.classList.remove("header__search-block_closed");
  lupaSearchBlack.classList.add("header__lupa-black_opened");
  lupaSearch.classList.remove("header__lupa_opened");
  lupaSearch.classList.add("header__lupa_closed");
};

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    toggleSearchBlock();
  }
});

document.addEventListener("click", (event) => {
  const isClickInside = document
    .querySelector(".header__menu")
    .contains(event.target);

  if (!isClickInside) {
    toggleSearchBlock();
  }
});
