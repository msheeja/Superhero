import * as uiModule from "./detailsUiModule.js";
import * as apiModule from "./apiModule.js";

var characterId = 0;

const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("id")) {
  characterId = searchParams.get("id");
}

apiModule.getCharacterDetailsFromApi(characterId).then((details) => {
  uiModule.showCharacterDetails(details.data.results[0]);
});

apiModule.getComicsFromApi(characterId).then((comics) => {
  for (var comic of comics.data.results) {
    uiModule.showComic(comic);
  }
});

apiModule.getSeriesFromApi(characterId).then((series) => {
  for (var seriesItem of series.data.results) {
    uiModule.showSeries(seriesItem);
  }
});
