import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/RaisedButton';
//import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import configureStore from './store';
import './index.css';

//const store = configureStore();

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
/*ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);*/
registerServiceWorker();
