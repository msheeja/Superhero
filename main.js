import * as uiModule from "./mainUiModule.js";
import * as dataModule from "./dataModule.js";
import * as apiModule from "./apiModule.js";

apiModule.getAllCharactersFromApi().then((characters) => {
  dataModule.initCharacterList(characters);
  uiModule.updateCharacterListItems();
  uiModule.updateFavouriteList();
});
