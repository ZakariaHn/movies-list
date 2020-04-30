let baraka = document.getElementById("baraka");
let cardFront = document.getElementById("cardFront");
let cardBody = document.querySelector(".card__body");
baraka.onclick = function () {
  cardFront.classList.add("barakaImg");
  cardBody.innerHTML =
    "If man sends another Voyager to the distant stars and it can carry only one film on board, that film might be 'Baraka.' It uses no language, so needs no translation. It speaks in magnificent images, natural sounds, and music both composed and discovered. It regards our planet and the life upon it. It stands outside of historical time. To another race, it would communicate: This is what you would see if you came here. Of course this will all long since have disappeared when the spacecraft is discovered.";
  this.style.backgroundColor = "#082e4d";
};
