import { data } from "./data.js";
let parsedData = JSON.parse(data);

// <=========== Getting the elements from HTML ===========>

const section = document.querySelector(".list"),
  card = document.querySelector(".card"),
  dataField = document.querySelector(".DataField");

// <=========== Building List Items generator ============>

parsedData.forEach((obj) => {
  let { id, title } = obj;
  let list = `<div id = ${id}>${title}</div>`;
  section.innerHTML += list;
});

// Building Card to display the Poster and the description

let cardContent = `
                  <div class="cardContent">
                    <div class="cardFront">
                      <img src="" />
                    </div>
                    <div class="cardBack">
                      <p class="cardBody"></p>
                    </div>
                  </div>`;

card.innerHTML += cardContent;

const cardBody = document.querySelector(".cardBody"),
  listItems = document.querySelectorAll(".list *"),
  img = document.querySelector("img");

// <====== Creating a div to display the movie data =======>

let dataSection = `
                  <div id="director"></div>
                  <p class="toHover">Hover<span>&#8594;</span></p>`;

dataField.innerHTML += dataSection;

let directorHtml = document.getElementById("director"),
  toHover = document.querySelector(".toHover");

// Function to excute commands after click on the list item

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
  let data = parsedData.find((data) => data.id == this.id);
  directorHtml.innerHTML = data.director;
  cardBody.innerHTML = data.description;
  img.src = data.image;
}
