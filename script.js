const closed = document.querySelector(".hamburgerClose");
const open = document.querySelector(".hamburgerOpen");

closed.addEventListener("click", () => {
  closed.style.display = "none";
  open.style.removeProperty("display");
  open.style.display = "block";
});

open.addEventListener("click", () => {
  open.style.display = "none";
  closed.style.removeProperty("display");
  closed.style.display = "block";
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