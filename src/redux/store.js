import { combineReducers } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

//import TaskReducer from './reducers/TaskReducer';
//import AboutMeReducer from './reducers/AboutMeReducer';
//import ItemReducer from './reducers/ItemReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState = {}) {
  return createStore(
    combineReducers({
      //TaskReducer,
      //AboutMeReducer,
      //ItemReducer
    }),
    //preloadedState,
    composeEnhancers(applyMiddleware(reduxThunk, reduxLogger))
  )
}
