const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  menu_close = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});
menu_close.addEventListener("click", () => {
  menu.classList.remove("active");
});

const percents = document.querySelectorAll(".sliders__item__precent"),
  lines = document.querySelectorAll(".sliders__slider-fg");

percents.forEach((item, index) => {
  lines[index].style.width =
    item.innerHTML.replace("%", "") > 100 ? "100%" : item.innerHTML;
});


const menu_links = document.querySelectorAll('.menu__link');
menu_links.forEach((item)=>{
  item.addEventListener('click',()=>{
    menu.classList.remove('active');
  })
})

const smoothLinks = document.querySelectorAll("a[href^='#']");
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
