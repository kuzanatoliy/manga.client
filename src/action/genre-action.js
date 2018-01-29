export const LOAD_GENRE = 'LOAD_GENRE';
export const LOAD_GENRE_SUCCESS = 'LOAD_GENRE_SUCCESS';

export const actionTypes = {
  LOAD_GENRE,
  LOAD_GENRE_SUCCESS
}

export const loadGenre = () => ({
  type: LOAD_GENRE
});

export const loadGenreSuccess = genres => ({
  type: LOAD_GENRE_SUCCESS,
  genres
});

export const actions = {
  loadGenre,
  loadGenreSuccess
};

export default {
  actions,
  actionTypes
};
