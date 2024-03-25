import * as dataModule from "./dataModule.js";

var charactersList = document.getElementById("characters-list");
var favouriteList = document.getElementById("favourite-list");
var searchSuperhero = document.getElementById("search-superhero");
var searchForm = document.getElementById("search-form");

var superheroList = dataModule.getListOfCharacters();

function updateCharacterListItems() {
  charactersList.replaceChildren();
  for (var character of superheroList) {
    createCharacterListItem(character);
  }
}

function createCharacterListItem(character) {
  const listItem = document.createElement("li");
  listItem.classList.add("list-group-item");
  listItem.classList.add("list-group-item-action");

  const divItem = document.createElement("div");
  divItem.classList.add("d-flex");
  divItem.classList.add("justify-content-between");
  divItem.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() == "div") {
      window.location.replace("./details.html?id=" + character.id);
    }
  });

  const divItemName = document.createElement("div");
  divItemName.id = character.id;
  divItemName.innerText = character.name;

  const favouriteIcon = document.createElement("i");
  favouriteIcon.classList.add("bi");
  favouriteIcon.classList.add(
    character.isFavourite ? "bi-heart-fill" : "bi-heart"
  );
  favouriteIcon.addEventListener("click", (event) => {
    addToFavourite(event.target.parentElement.childNodes[0].id);
  });

  divItem.appendChild(divItemName);
  divItem.appendChild(favouriteIcon);
  listItem.appendChild(divItem);

  charactersList.appendChild(listItem);
}

function addToFavourite(characterId) {
  dataModule.toggleFavourite(characterId);
  updateFavouriteList();
  updateCharacterListItems();
}

function updateFavouriteList() {
  var allFavourites = superheroList.filter((item) => item.isFavourite);
  favouriteList.replaceChildren();
  for (var favouriteItem of allFavourites) {
    createFavouriteListItem(favouriteItem);
  }
}

function createFavouriteListItem(favouriteItem) {
  const listItem = document.createElement("li");
  listItem.classList.add("list-group-item");
  listItem.innerText = favouriteItem.name;

  favouriteList.appendChild(listItem);
}

searchForm.addEventListener("submit", (event) => event.preventDefault());

searchSuperhero.addEventListener("input", () => filterSuperheroes());

function filterSuperheroes() {
  superheroList = dataModule
    .getListOfCharacters()
    .filter((item) =>
      item.name.toLowerCase().includes(searchSuperhero.value.toLowerCase())
    );

  if (superheroList.length === 0) {
    superheroList = dataModule.getListOfCharacters();
  }
  updateCharacterListItems();
  updateFavouriteList();
}

export { updateCharacterListItems, updateFavouriteList };
