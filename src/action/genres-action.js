export const LOAD_GENRES = 'LOAD_GENRE';
export const LOAD_GENRES_SUCCESS = 'LOAD_GENRE_SUCCESS';

export const actionTypes = {
  LOAD_GENRES,
  LOAD_GENRES_SUCCESS
}

export const loadGenres = () => ({
  type: LOAD_GENRES
});

export const loadGenresSuccess = genres => ({
  type: LOAD_GENRES_SUCCESS,
  genres
});

export const actions = {
  loadGenres,
  loadGenresSuccess
};

export default {
  actions,
  actionTypes
};
