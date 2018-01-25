const URL = 'https://doodle-manga-scraper.p.mashape.com/mangareader.net';

const OPTIONS = {
  method: 'get',
  headers: {
    'X-Mashape-Key': 'JrESH9sCozmsh2CmcfbeFGiOby3Zp1rhrHrjsnSj8fMUj35hVg',
    'Accept': 'text/plain'
  } 
};

function getData(path) {
  return fetch(URL + path, OPTIONS)
    .then(res => res.json());
}

const getMangaChapter = (manga, number) => getData(`/manga/${ manga }/${ number }`);

const getGenreList = () => getData('/search/genres');

const getManga = manga => getData(`/manga/${ manga }`);

const getMangaByGenre = (genre, cover = 0, info = 0) => getData(`/search/genres/${ genre }`);

const getMangaList = (cover = 0, info = 0) => getData(`?cover=${ cover }&info=${ info }`);

const search = (query, genre = [], info = 0, cover = 0) => getData(`/q=${ query }&g=${ genre }&cover=${ cover }&info=${ info }`);

export {
  getMangaChapter,
  getGenreList,
  getManga,
  getMangaList,
  getMangaByGenre,
  search
};
