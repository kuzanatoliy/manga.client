const URL = 'https://doodle-manga-scraper.p.mashape.com/mangareader.net';

const OPTIONS = {
  method: 'get',
  headers: {
    'X-Mashape-Key': 'JrESH9sCozmsh2CmcfbeFGiOby3Zp1rhrHrjsnSj8fMUj35hVg',
    'Accept': 'text/plain'
  } 
};

function getData(path) {
  return fetch(`${ URL }/${ path }`, OPTIONS);
}

function getMangaChapter(manga, number) {
  return getData(`manga/${ manga }/${ number }`);
}

function getGenreList() {
  return getData('search/genres');
}

function getManga(manga) {
  return getData(`manga/${ manga }`);
}

function getMangaByGenre(genre, cover = 0, info = 0) {
  return getData(`search/genres/${ genre }`);
}