import * as dataModule from "./dataModule.js";

var favouritesContainer = document.getElementById("favourites-container");

function createFavouriteItem(favouriteCharacter) {
  var colDiv = document.createElement("div");
  var favouriteItemDiv = document.createElement("div");
  var itemInnerDiv = document.createElement("div");
  var image = document.createElement("img");
  var header = document.createElement("h3");
  var trashIcon = document.createElement("i");

  colDiv.classList.add("col");

  favouriteItemDiv.classList.add("favourite-item");
  favouriteItemDiv.classList.add("overflow-hidden");
  favouriteItemDiv.classList.add("rounded-4");
  favouriteItemDiv.classList.add("shadow-lg");

  itemInnerDiv.classList.add("d-flex");
  itemInnerDiv.classList.add("flex-column");
  itemInnerDiv.classList.add("p-5");
  itemInnerDiv.classList.add("pb-3");
  itemInnerDiv.classList.add("text-white");
  itemInnerDiv.classList.add("text-shadow-1");

  image.src = favouriteCharacter.image;

  header.innerText = favouriteCharacter.name;
  header.classList.add("mt-5");
  header.classList.add("mb-4");
  header.classList.add("display-6");
  header.classList.add("lh-1");
  header.classList.add("fw-bold");

  trashIcon.classList.add("bi");
  trashIcon.classList.add("bi-trash-fill");
  trashIcon.addEventListener("click", (event) => {
    dataModule.toggleFavourite(favouriteCharacter.id);
    refreshFavourites();
  });

  itemInnerDiv.appendChild(image);
  itemInnerDiv.appendChild(header);
  itemInnerDiv.appendChild(trashIcon);

  favouriteItemDiv.appendChild(itemInnerDiv);
  colDiv.append(favouriteItemDiv);
  favouritesContainer.appendChild(colDiv);
}

function refreshFavourites() {
  favouritesContainer.replaceChildren();
  for (var favouriteCharacter of dataModule.getListOfCharacters()) {
    if (favouriteCharacter.isFavourite) {
      createFavouriteItem(favouriteCharacter);
    }
  }
}

refreshFavourites();
