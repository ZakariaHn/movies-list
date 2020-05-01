const titleHtml = document.getElementById("title"),
  directorHtml = document.getElementById("director"),
  yearHtml = document.getElementById("year"),
  imgHtml = document.querySelector("img"),
  cardBody = document.querySelector(".card__body"),
  toHover = document.querySelector(".toHover"),
  listItems = document.querySelector(".list").querySelectorAll("div");

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
  let data = moviesData.find((data) => data.name === this.id);
  directorHtml.innerHTML = data.director;
  cardBody.innerHTML = data.description;
  imgHtml.src = data.image;
}
