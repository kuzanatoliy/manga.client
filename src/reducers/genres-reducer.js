import { actionTypes } from '../action/genres-action';

const defaultState = {
  genres: [],
  error: null,
  loading: false,
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.LOAD_GENRES: {
      return { ...state, loading: true, error: null }
    }
    case actionTypes.LOAD_GENRES_SUCCESS: {
      return { ...state, genres: action.genres, loading: false, error: null }
    }
    default: {
      return { ...state }
    }
  }
}

export default reducer;
