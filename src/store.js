import { combineReducers } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

import genresReducer from './reducers/genres-reducer';
import mangaListReducer from './reducers/manga-list-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState = {}) {
  return createStore(
    combineReducers({
      genresReducer,
      mangaListReducer
    }),
    preloadedState,
    composeEnhancers(applyMiddleware(reduxThunk, reduxLogger))
  )
}
