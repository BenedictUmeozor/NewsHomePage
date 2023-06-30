const body = document.body;
const menuBtn = document.querySelector(".menu-btn");
const menuBtnImg = menuBtn.querySelector("img");

const toggleNav = () => {
  body.classList.toggle("active");

  if (body.classList.contains("active")) {
    menuBtnImg.src = "./assets/images/icon-menu-close.svg";
    menuBtnImg.style.width = "30px";
  } else {
    menuBtnImg.src = "./assets/images/icon-menu.svg";
    menuBtnImg.style.width = "43px";
  }
};

menuBtn.addEventListener("click", toggleNav);
