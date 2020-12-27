const cv = document.querySelector(".content button");
const scroll = document.querySelectorAll(".right ul>li");
const gmail = document.querySelector(".contact .gmail");
const gmail_image = document.querySelector(".contact .gmail img");
const gmail_h = document.querySelector(".contact .gmail h3");

cv.addEventListener("click", function (e) {
  window.open("../CV_Mayur Goyal.pdf", "_blank");
});

var w = window.innerWidth;
var h = window.innerHeight;
scroll.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll(0, index * h);
  });
});

gmail_image.addEventListener("mouseover", function (e) {
  gmail_image.style.transition = "all 2s";
  gmail_h.style.visibility = "visible";
});

function appHeight() {
  const doc = document.documentElement
  doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
}

window.addEventListener('resize', appHeight);
appHeight();