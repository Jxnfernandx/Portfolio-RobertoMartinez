const closed = document.querySelector(".hamburgerClose");
const open = document.querySelector(".hamburgerOpen");

function toggleIcons(iconToShow, iconToHide) {
  iconToHide.style.display = "none";
  iconToShow.style.display = "block"
}

closed.addEventListener("click", () => {
  toggleIcons(open, closed);
});

open.addEventListener("click", () => {
  toggleIcons(closed, open);
});

const links = document.querySelectorAll(".links a");
const contents = document.querySelectorAll(".content");

links.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    contents.forEach((content, i) => {
      if (i === index) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
  });
});