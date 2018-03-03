import { actionTypes } from '../action/manga-action';

const defaultState = {
  loading: false,
  error: null,
  manga: {
    name: '',
    author: [],
    status: '',
    yearOfRelease: 0,
    info: '',
    cover: '',
    lastUpdate: '',
    chapters: []
  }
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_MANGA: {
      return { ...state, loading: true, error: null };
    }
    case actionTypes.LOAD_MANGA_SUCCESS: {
      return { ...state, manga: action.manga, loading: false, error: null };
    }
    default: {
      return { ...state };
    }
  }
}

export default reducer;
