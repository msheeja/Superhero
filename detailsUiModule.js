var characterName = document.getElementById("character-name");
var characterDescription = document.getElementById("character-description");
var characterImage = document.getElementById("character-image");
var comicList = document.getElementById("comic-list");
var seriesList = document.getElementById("series-list");

function showCharacterDetails(details) {
  characterName.innerText = details.name;
  characterDescription.innerText = details.description;
  characterImage.src =
    details.thumbnail.path + "." + details.thumbnail.extension;
  console.log(details);
}

function showComic(comic) {
  var featureDiv = document.createElement("div");
  var image = document.createElement("img");
  var header = document.createElement("h3");
  var preview = document.createElement("p");
  var creators = document.createElement("p");

  image.src = comic.thumbnail.path + "." + comic.thumbnail.extension;
  image.classList.add("detail-item-image");

  header.innerText = comic.title;
  header.classList.add("fs-2");
  header.classList.add("detail-item-header");

  var previewText = comic.textObjects.filter(
    (item) =>
      item.type === "issue_preview_text" || item.type === "issue_solicit_text"
  );
  if (previewText.length > 0) {
    preview.innerText = previewText[0].text;
  }
  preview.classList.add("preview");

  creators.innerText = getAllCreators(comic.creators.items);
  creators.classList.add("creators");

  featureDiv.appendChild(image);
  featureDiv.appendChild(header);
  featureDiv.appendChild(preview);
  featureDiv.appendChild(creators);

  comicList.appendChild(featureDiv);
}

function getAllCreators(creators) {
  var creatorsToDisplay = "";
  if (creators.length > 1) {
    creatorsToDisplay = "Creators - " + creators[0].name;
  }
  for (var i = 1; i < creators.length; i++) {
    creatorsToDisplay += `, ${creators[i].name}`;
  }
  return creatorsToDisplay;
}

function showSeries(series) {
  var featureDiv = document.createElement("div");
  var image = document.createElement("img");
  var header = document.createElement("h3");
  var preview = document.createElement("p");
  var creators = document.createElement("p");

  image.src = series.thumbnail.path + "." + series.thumbnail.extension;
  image.classList.add("detail-item-image");

  header.innerText = series.title;
  header.classList.add("fs-2");
  header.classList.add("detail-item-header");

  preview.innerText = series.description;
  preview.classList.add("preview");

  creators.innerText = getAllCharacters(series.characters.items);
  creators.classList.add("characters");

  featureDiv.appendChild(image);
  featureDiv.appendChild(header);
  featureDiv.appendChild(preview);
  featureDiv.appendChild(creators);

  seriesList.appendChild(featureDiv);
}

function getAllCharacters(characters) {
  var charactersToDisplay = "";
  if (characters.length > 1) {
    charactersToDisplay = "Characters - " + characters[0].name;
  }
  for (var i = 1; i < characters.length; i++) {
    charactersToDisplay += `, ${characters[i].name}`;
  }
  return charactersToDisplay;
}

export { showCharacterDetails, showComic, showSeries };
