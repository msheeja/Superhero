const timeStamp = 1711279729766;
const hash = "aa32fee78c24c1bb7ec0f0c3b5d1c0ef";
const apikey = "a2cc0d45f9962ec65a70f671338ebc74";
const apiParams = `ts=${timeStamp}&apikey=${apikey}&hash=${hash}`;
const charactersUrl = "https://gateway.marvel.com/v1/public/characters";

async function getAllCharactersFromApi() {
  const url = `${charactersUrl}?${apiParams}`;
  const response = await fetch(url);
  return await response.json();
}

async function getCharacterDetailsFromApi(characterId) {
  if (characterId !== 0) {
    const url = `${charactersUrl}/${characterId}?${apiParams}`;
    const response = await fetch(url);
    return await response.json();
  }
}

async function getComicsFromApi(characterId) {
  if (characterId !== 0) {
    const url = `${charactersUrl}/${characterId}/comics?${apiParams}`;
    const response = await fetch(url);
    return await response.json();
  }
}

async function getSeriesFromApi(characterId) {
  if (characterId !== 0) {
    const url = `${charactersUrl}/${characterId}/series?${apiParams}`;
    const response = await fetch(url);
    return await response.json();
  }
}

export {
  getAllCharactersFromApi,
  getCharacterDetailsFromApi,
  getComicsFromApi,
  getSeriesFromApi,
};
