export const LOAD_MANGA_LIST = 'LOAD_MANGA_LIST';
export const LOAD_MANGA_LIST_SUCCESS = 'LOAD_MANGA_LIST_SUCCESS';

export const actionTypes = {
  LOAD_MANGA_LIST,
  LOAD_MANGA_LIST_SUCCESS
};

export const loadMangaList = () => ({
  type: LOAD_MANGA_LIST
});

export const loadMangaListSuccess = mangaList => ({
  type: LOAD_MANGA_LIST_SUCCESS,
  mangaList
});

export const actions = {
  loadMangaList,
  loadMangaListSuccess
};

export default {
  actionTypes,
  actions
};
