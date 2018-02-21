export const LOAD_MANGA = 'LOAD_MANGA';
export const LOAD_MANGA_SUCCESS = 'LOAD_MANGA_SUCCESS';

export const actionTypes = {
  LOAD_MANGA,
  LOAD_MANGA_SUCCESS
};

export const loadManga = () => ({
  type: LOAD_MANGA
});

export const loadMangaSuccess = manga => ({
  type: LOAD_MANGA_SUCCESS,
  manga
});

export const actions = {
  loadManga,
  loadMangaSuccess
};

export default {
  actionTypes,
  actions
};
