const titleHtml = document.getElementById("title"),
  directorHtml = document.getElementById("director"),
  yearHtml = document.getElementById("year"),
  imgHtml = document.querySelector("img"),
  cardBody = document.querySelector(".card__body"),
  listItems = document.querySelector(".list").querySelectorAll("div");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", changes);
}

function changes() {
  for (let i = 0; i < listItems.length; i++) {
    this.style.backgroundColor = "#082e4d";
    listItems[i].removeAttribute("style");
  }
  let data = moviesData.find((data) => data.id == this.id);
  titleHtml.innerHTML = `<h4>${data.title}</h4>`;
  yearHtml.innerHTML = data.year;
  directorHtml.innerHTML = data.director;
  cardBody.innerHTML = data.description;
  imgHtml.src = data.image;
}
