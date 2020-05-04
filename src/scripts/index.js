import { data } from "./data.js";
let parsedData = JSON.parse(data);

const directorHtml = document.getElementById("director"),
  imgHtml = document.querySelector("img"),
  cardBody = document.querySelector(".card__body"),
  toHover = document.querySelector(".toHover"),
  listItems = document.querySelector(".list").querySelectorAll("div"),
  section = document.querySelector(".list");

parsedData.forEach((obj) => {
  let { id, title } = obj;
  let card = `<div id = ${id}>${title}</div>`;
  section.innerHTML += card;
});

listItems.forEach((item) => {
  item.addEventListener("click", changes);
});

function changes() {
  listItems.forEach((item) => {
    this.style.backgroundColor = "#082e4d";
    this.style.transform = "translateX(2rem)";
    item.removeAttribute("style");
    toHover.style.opacity = "1";
  });
  let data = moviesData.find((data) => data.id == this.id);
  directorHtml.innerHTML = data.director;
  cardBody.innerHTML = data.description;
  imgHtml.src = data.image;
}
