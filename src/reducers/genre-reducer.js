import { actionTypes } from '../action/genre-action';

const defaultState = {
  genres = [],
  error = null,
  loading = false,
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.LOAD_GENRE: {
      return { ...state, loading = true }
    }
    case actionTypes.LOAD_GENRE_SUCCESS: {
      return { ...state, genres: action.genres, loading: false }
    }
    default: {
      return { ...state }
    }
  }
}

export default reducer;
