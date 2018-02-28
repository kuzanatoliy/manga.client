import { URL, KEY } from '../constants/source';

const OPTIONS = {
  method: 'get',
  headers: {
    'X-Mashape-Key': KEY,
    'Accept': 'text/plain'
  } 
};

function getData(path) {
  return fetch(URL + path, OPTIONS)
    .then(res => res.json());
}

export const getMangaChapter = (manga, number) => getData(`/manga/${ manga }/${ number }`);

export const getGenreList = () => getData('/search/genres');

export const getManga = manga => getData(`/manga/${ manga }`);

export const getMangaByGenre = (genre, cover = 0, info = 0) => getData(`/search/genres/${ genre }?cover=${ cover }&info=${ info }`);

export const getMangaList = (cover = 0, info = 0) => getData(`?cover=${ cover }&info=${ info }`);

export const search = (query, genre = [], info = 0, cover = 0) => getData(`/q=${ query }&g=${ genre }&cover=${ cover }&info=${ info }`);

export default {
  getMangaChapter,
  getGenreList,
  getManga,
  getMangaList,
  getMangaByGenre,
  search
};
