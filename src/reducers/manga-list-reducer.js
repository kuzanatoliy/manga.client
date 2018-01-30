import { actionTypes } from '../action/manga-list-action';

const defaultState = {
  loading: false,
  error: null,
  mangalist: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_MANGA_LIST: {
      return { ...state, loading: true, error: null };
    }
    case actionTypes.LOAD_MANGA_LIST_SUCCESS: {
      return { ...state, mangaList: action.mangaList, loading: false, error: null };
    }
    default: {
      return { ...state };
    }
  }
}

export default reducer;
