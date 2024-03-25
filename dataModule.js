class character {
  id;
  name;
  image;
  isFavourite;

  constructor(id, name, thumbnail) {
    this.id = id;
    this.name = name;
    this.isFavourite = false;
    this.image = thumbnail.path + "." + thumbnail.extension;
  }
}

var valueFromStorage = localStorage["characterList"] || [];
var listOfCharacters;

if (valueFromStorage.length !== 0) {
  listOfCharacters = JSON.parse(valueFromStorage);
} else {
  listOfCharacters = [];
}

function getListOfCharacters() {
  return listOfCharacters;
}

function initCharacterList(charactersList) {
  if (listOfCharacters.length === 0) {
    for (var item of charactersList.data.results) {
      listOfCharacters.push(new character(item.id, item.name, item.thumbnail));
    }
    localStorage["characterList"] = JSON.stringify(listOfCharacters);
  }
}

function toggleFavourite(characterId) {
  characterId = parseInt(characterId);
  var valueToSet = !listOfCharacters.filter(
    (item) => item.id === characterId
  )[0].isFavourite;
  listOfCharacters.filter((item) => item.id === characterId)[0].isFavourite =
    valueToSet;
  localStorage["characterList"] = JSON.stringify(listOfCharacters);
}

export { initCharacterList, toggleFavourite, getListOfCharacters };
